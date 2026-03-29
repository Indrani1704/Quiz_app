import { createAsyncThunk } from "@reduxjs/toolkit";
import { quizData } from "../../data/quizData";

export const fetchQuizData = createAsyncThunk(
  "quiz/fetchQuizData",
  async () => {
   
    const shuffled = [...quizData].sort(() => Math.random() - 0.5);
    return shuffled.slice(0, 10);
  }
);