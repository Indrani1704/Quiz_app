export interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: string;
  explanation?: string;
  hint?: string;
}

export interface AnswerRecord {
  question: string;
  selected: string | null;
  correct: string;
  isCorrect: boolean;
}

export interface QuizState {
  questions: Question[];
  currentQuestionIndex: number;
  score: number;
  answers: AnswerRecord[];
  selectedAnswer: string | null;
  isCompleted: boolean;
  loading: boolean;
}