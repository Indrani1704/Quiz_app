import { Routes, Route } from "react-router-dom";
import QuizPage from "./pages/QuizPage";
import Home from "./pages/Home";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/quiz" element={<QuizPage />} />
    </Routes>
  );
};

export default App;