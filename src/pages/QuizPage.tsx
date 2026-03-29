import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../hooks/reduxHooks";
import { fetchQuizData } from "../features/quiz";
import QuestionCard from "../components/quiz/QuestionCard";
import ResultCard from "../components/quiz/ResultCard";
import Loader from "../components/common/Loader";

const QuizPage = () => {
  const dispatch = useAppDispatch();

  const { loading, isCompleted, questions } = useAppSelector(
    (state) => state.quiz
  );

  useEffect(() => {
    dispatch(fetchQuizData());
  }, [dispatch]);

  //  Loading state
  if (loading) return <Loader />;

  //  Safety check (prevents blank screen)
  if (!questions || questions.length === 0) {
    return <p className="text-center mt-10">Loading quiz...</p>;
  }

  return (
    <div className="flex justify-center items-center min-h-screen">
      {isCompleted ? <ResultCard /> : <QuestionCard />}
    </div>
  );
};

export default QuizPage;