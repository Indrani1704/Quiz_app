import { quizData } from "../data/quizData";
export const getQuizQuestions = async ()=> new Promise(res=> setTimeout(()=>res(quizData),700));
