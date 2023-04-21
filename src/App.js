import "./App.css";
import Reviews from "./Components/Reviews";
import Review from "./Components/Review";
import { Routes, Route } from "react-router-dom";
import ErrorCard from "./Components/ErrorCard";
import HeaderBar from "./Components/HeaderBar";
import { useState } from "react";

function App() {
  const [sortOption, setSortOption] = useState("newest")
  return (
    <div className="app">
      <main>
        <Routes>
        <Route path="*" element={<><HeaderBar /><ErrorCard errorMessage={"The page you have navigated to does not exist! Click the heading to return home"} /></>} />
          <Route path="/" element={<><HeaderBar renderSortCategoryOptions={true} setSortOption={setSortOption}/><Reviews sortOption={sortOption} setSortOption={setSortOption}/></>} />
          <Route path="/reviews/category/:category" element={<><HeaderBar renderSortCategoryOptions={true} setSortOption={setSortOption}/><Reviews sortOption={sortOption} setSortOption={setSortOption}/></>} />
          <Route path="/reviews/:review_id" element={<div style={{ display: 'flex', flexDirection: 'column' }}><HeaderBar /><Review/></div>} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
