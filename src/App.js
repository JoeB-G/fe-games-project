import "./App.css";
import Reviews from "./Components/Reviews";
import Review from "./Components/Review";
import { Routes, Route, Link } from "react-router-dom";
import SelectUser from "./Components/SelectUser";

function App() {

  return (
    <div className="app">
      <Link to="/" style={{color:"black" ,"textDecoration": "none"}}><h1>PLACEHOLDER HEADING</h1></Link>
      <main>
        <SelectUser />
        <Routes>
          <Route path="/" element={<Reviews/>} />
          <Route path="/reviews/category/:category" element={<Reviews/>} />
          <Route path="/reviews/:review_id" element={<Review/>} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
