import "./App.css";
import Reviews from "./Components/Reviews";
import Review from "./Components/Review"
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <main>
      <Routes>
        <Route path="/" element={<Reviews />} />
        <Route path="/reviews/:review_id" element={<Review />}/>
      </Routes>
    </main>
  );
}

export default App;
