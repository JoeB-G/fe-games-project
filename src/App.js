import "./App.css";
import Reviews from "./Components/Reviews";
import Review from "./Components/Review";
import { Routes, Route } from "react-router-dom";
import CategorySelect from "./Components/CategorySelect";

function App() {
  const user = {
    username: "jessjelly",
    name: "Jess Jelly",
    avatar_url:
      "https://vignette.wikia.nocookie.net/mrmen/images/4/4f/MR_JELLY_4A.jpg/revision/latest?cb=20180104121141",
  };

  return (
    <div className="app">
      <h1>PLACEHOLDER HEADING</h1>{" "}
      <CategorySelect />
      <main>
        <p>Signed in as {user.username}</p>
        <Routes>
          <Route path="/" element={<Reviews/>} />
          <Route path="/reviews/category/:category" element={<Reviews/>} />
          <Route path="/reviews/:review_id" element={<Review user={user} />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
