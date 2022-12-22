import { Route, Routes, useLocation } from "react-router-dom";
import HomePage from "./components/Pages/HomePage/HomePage";
import PuzzlePage from "./components/Pages/PuzzlePage/PuzzlePage";
import { AnimatePresence } from "framer-motion";
import GridContextProvider from "./context/grid-context";
function App() {
  const location = useLocation();
  return (
    <div className="puzzle-app">
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.key}>
          {["/Puzzles", "/"].map((path) => {
            return <Route key={path} path={path} element={<HomePage />} />;
          })}

          <Route
            path="/game"
            element={
              <GridContextProvider>
                <PuzzlePage />
              </GridContextProvider>
            }
          />
          <Route
            path="*"
            element={<p className="not-found">Page not found</p>}
          />
        </Routes>
      </AnimatePresence>
    </div>
  );
}

export default App;
