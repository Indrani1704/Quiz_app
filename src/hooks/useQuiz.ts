import { useAppSelector } from "./reduxHooks";
export const useQuiz=()=> useAppSelector(s=>s.quiz);
