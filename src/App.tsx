import { Route, Routes } from "react-router-dom";
import HomePage from "./components/Pages/HomePage/HomePage";
import PuzzlePage from "./components/Pages/PuzzlePage/PuzzlePage";
function App() {
  return (
    <div className="puzzle-app">
      <Routes>
        {["/Puzzles", "/"].map((path) => {
          return <Route key={path} path={path} element={<HomePage />} />;
        })}

        <Route path="/game" element={<PuzzlePage />} />
        <Route path="*" element={<p className="not-found">Page not found</p>} />
      </Routes>
    </div>
  );
}

export default App;
