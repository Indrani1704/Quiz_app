import { createAsyncThunk } from "@reduxjs/toolkit";
import { quizData } from "../../data/quizData";
import type { Question } from "../../types/quizTypes";

export const fetchQuizData = createAsyncThunk<
  Question[],
  void
>("quiz/fetchQuizData", async () => {
  const shuffled = [...quizData].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, 10);
});