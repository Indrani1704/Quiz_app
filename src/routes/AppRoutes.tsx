import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import QuizPage from "../pages/QuizPage";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/quiz" element={<QuizPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;