import "./App.css";
import Reviews from "./Components/Reviews";
import Review from "./Components/Review";
import { Routes, Route, Link } from "react-router-dom";
import SelectUser from "./Components/SelectUser";
import ErrorCard from "./Components/ErrorCard";

function App() {

  return (
    <div className="app">
      <Link to="/" style={{color:"black" ,"textDecoration": "none"}}><h1>PLACEHOLDER HEADING</h1></Link>
      <main>
        <SelectUser />
        <Routes>
        <Route path="*" element={<ErrorCard errorMessage={"The page you have navigated to does not exist! Click the heading to return home"} />} />
          <Route path="/" element={<Reviews/>} />
          <Route path="/reviews/category/:category" element={<Reviews/>} />
          <Route path="/reviews/:review_id" element={<Review/>} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
