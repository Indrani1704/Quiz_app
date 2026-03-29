import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/reduxHooks";
import {
  answerQuestion,
  nextQuestion,
  resetQuiz,
} from "../../features/quiz";
import { useTimer } from "../../hooks/useTimer";
import { motion } from "framer-motion";

const QuestionCard = () => {
  const dispatch = useAppDispatch();

  const { questions, currentQuestionIndex } =
    useAppSelector((state) => state.quiz);

  const q = questions[currentQuestionIndex];

  const [selected, setSelected] = useState<string | null>(null);
  const [showHint, setShowHint] = useState(false);

  if (!q) return <p className="text-center mt-10 text-white">Loading...</p>;

  const total = questions.length;
  const progress = ((currentQuestionIndex + 1) / total) * 100;

  const handleNext = () => {
    if (selected !== null) {
      dispatch(answerQuestion(selected));
    }
    setSelected(null);
    setShowHint(false);
    dispatch(nextQuestion());
  };

  const time = useTimer(
    15,
    () => handleNext(),
    currentQuestionIndex
  );

  const timerPercent = (time / 15) * 100;

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-[#020617] via-[#0f172a] to-[#020617] flex items-center justify-center p-4">

      <motion.div
        key={currentQuestionIndex}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-[520px] bg-white/5 backdrop-blur-xl border border-white/10 
        rounded-2xl p-6 text-white shadow-[0_20px_80px_rgba(0,0,0,0.7)]"
      >
        {/* PROGRESS */}
        <div className="w-full h-2 bg-white/10 rounded mb-4">
          <div
            className="h-2 bg-gradient-to-r from-indigo-500 to-pink-500 rounded"
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* HEADER */}
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-sm opacity-70">
            Question {currentQuestionIndex + 1}/{total}
          </h2>

          <button
            onClick={() => dispatch(resetQuiz())}
            className="text-xs text-rose-400 px-2 py-1 rounded-md bg-white/5 hover:bg-white/10 transition"
          >
            Restart
          </button>
        </div>

        {/* QUESTION */}
        <h3 className="text-lg font-semibold mb-5 leading-snug">
          {q.question}
        </h3>

        {/* TIMER */}
        <div className="flex justify-center mb-5">
          <div className="relative w-16 h-16">
            <svg className="w-full h-full -rotate-90">
              <circle
                cx="32"
                cy="32"
                r="28"
                stroke="rgba(255,255,255,0.1)"
                strokeWidth="6"
                fill="none"
              />
              <circle
                cx="32"
                cy="32"
                r="28"
                stroke="#6366f1"
                strokeWidth="6"
                fill="none"
                strokeDasharray={175}
                strokeDashoffset={175 - (175 * timerPercent) / 100}
                className="transition-all duration-500"
              />
            </svg>

            <span className="absolute inset-0 flex items-center justify-center text-sm font-bold">
              {time}s
            </span>
          </div>
        </div>

        {/* OPTIONS */}
        <div className="space-y-3">
          {q.options.map((opt) => (
            <motion.button
              whileTap={{ scale: 0.97 }}
              key={opt}
              onClick={() => setSelected(opt)}
              className={`w-full p-3 rounded-xl border text-left transition-all duration-300
                ${
                  selected === opt
                    ? "bg-gradient-to-r from-indigo-500 to-pink-500 text-white border-transparent shadow-lg"
                    : "bg-white/5 border-white/10 hover:bg-white/10"
                }`}
            >
              {opt}
            </motion.button>
          ))}
        </div>

        {/* HINT BUTTON */}
        {q.hint && (
          <button
            onClick={() => setShowHint(!showHint)}
            className="mt-4 text-xs text-indigo-300 px-2 py-1 rounded-md bg-white/5 hover:bg-white/10 transition"
          >
            💡 {showHint ? "Hide Hint" : "Show Hint"}
          </button>
        )}

        {/* HINT CONTENT */}
        {showHint && q.hint && (
          <div className="mt-2 bg-indigo-500/10 border border-indigo-400/30 p-3 rounded-lg text-sm">
            {q.hint}
          </div>
        )}

        {/* NEXT */}
        <button
          onClick={handleNext}
          disabled={!selected}
          className="mt-6 w-full bg-gradient-to-r from-indigo-500 to-pink-500 
          p-3 rounded-xl font-semibold hover:scale-[1.02] transition disabled:opacity-50"
        >
          Next →
        </button>
      </motion.div>
    </div>
  );
};

export default QuestionCard;