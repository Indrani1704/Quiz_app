import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { QuizState } from "../../types/quizTypes";
import { fetchQuizData } from "./quizThunks"; 

const initialState: QuizState = {
  questions: [],
  currentQuestionIndex: 0,
  score: 0,
  answers: [],
  selectedAnswer: null,
  isCompleted: false,
  loading: false, 
};

const quizSlice = createSlice({
  name: "quiz",
  initialState,

  reducers: {
   answerQuestion: (state, action: PayloadAction<string>) => {
  const currentQ = state.questions[state.currentQuestionIndex];
  if (!currentQ) return;

 
  if (state.selectedAnswer !== null) return;

  state.selectedAnswer = action.payload;

  const isCorrect = action.payload === currentQ.correctAnswer;

  if (isCorrect) state.score++;

  state.answers.push({
    question: currentQ.question,
    selected: action.payload,
    correct: currentQ.correctAnswer,
    isCorrect,
  });
},

  nextQuestion: (state) => {
  const currentQ = state.questions[state.currentQuestionIndex];

  if (state.selectedAnswer === null && currentQ) {
    state.answers.push({
      question: currentQ.question,
      selected: null,
      correct: currentQ.correctAnswer,
      isCorrect: false,
    });
  }

  state.selectedAnswer = null;

  if (state.currentQuestionIndex < state.questions.length - 1) {
    state.currentQuestionIndex++;
  } else {
    state.isCompleted = true;
  }
},

    resetQuiz: (state) => {
      state.currentQuestionIndex = 0;
      state.score = 0;
      state.answers = [];
      state.selectedAnswer = null;
      state.isCompleted = false;
    },
  },

  
  extraReducers: (builder) => {
    builder
      .addCase(fetchQuizData.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchQuizData.fulfilled, (state, action) => {
        state.loading = false;
        state.questions = action.payload;
      })
      .addCase(fetchQuizData.rejected, (state) => {
        state.loading = false;
      });
  },
});

export const { answerQuestion, nextQuestion, resetQuiz } =
  quizSlice.actions;

export default quizSlice.reducer;