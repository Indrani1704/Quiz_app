import { useState, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/reduxHooks";
import { resetQuiz } from "../../features/quiz";
import confetti from "canvas-confetti";
import { AnimatePresence, motion } from "framer-motion";

const ResultCard = () => {
  const dispatch = useAppDispatch();
  const { score, questions, answers } = useAppSelector((s) => s.quiz);

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const total = questions.length;
  const percentage = Math.round((score / total) * 100);

  const attempted = answers.filter((a) => a.selected !== null).length;
  const correct = answers.filter((a) => a.isCorrect).length;
  const wrong = attempted - correct;
  const skipped = total - attempted;

  //  Confetti
  useEffect(() => {
    if (percentage >= 80) {
      confetti({ particleCount: 120, spread: 80 });
    }
  }, [percentage]);

  //  Rank
  const getRank = () => {
    if (percentage >= 80) return { label: "Gold", color: "text-yellow-400" };
    if (percentage >= 60) return { label: "Silver", color: "text-gray-300" };
    return { label: "Bronze", color: "text-orange-400" };
  };

  const rank = getRank();

  const toggle = (i: number) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-[#0f172a] to-black text-white p-4 flex flex-col">

      {/* HEADER */}
      <div className="text-center mb-4">
        <h1 className="text-3xl font-bold">🎉 Quiz Completed</h1>
        <p className="text-sm opacity-70">{percentage}% Score</p>
      </div>

      {/* MAIN GRID */}
      <div className="flex-1 grid grid-cols-3 gap-4">

        {/* LEFT - SCORE */}
        <div className="bg-white/5 border border-white/10 rounded-xl flex flex-col items-center justify-center p-4">

          <div className="relative w-40 h-40">
            <svg className="w-full h-full -rotate-90">
              <circle cx="80" cy="80" r="65" stroke="rgba(255,255,255,0.1)" strokeWidth="10" fill="none" />
              <circle
                cx="80"
                cy="80"
                r="65"
                stroke="url(#grad)"
                strokeWidth="10"
                fill="none"
                strokeDasharray={408}
                strokeDashoffset={408 - (408 * percentage) / 100}
                strokeLinecap="round"
              />
              <defs>
                <linearGradient id="grad">
                  <stop offset="0%" stopColor="#6366f1" />
                  <stop offset="100%" stopColor="#ec4899" />
                </linearGradient>
              </defs>
            </svg>

            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <span className="text-3xl font-bold">{percentage}%</span>
              <span className="text-xs opacity-70">{score}/{total}</span>
            </div>
          </div>

          <div className={`mt-3 text-sm font-semibold ${rank.color}`}>
            🏆 {rank.label}
          </div>
        </div>

        {/* MIDDLE - STATS */}
        <div className="bg-white/5 border border-white/10 rounded-xl p-4 space-y-3">

          <div className="grid grid-cols-2 gap-3">
            <Stat label="Correct" value={correct} />
            <Stat label="Wrong" value={wrong} />
            <Stat label="Skipped" value={skipped} />
            <Stat label="Attempted" value={attempted} />
          </div>

          <Bar label="Correct" value={(correct / total) * 100} color="bg-emerald-400" />
          <Bar label="Wrong" value={(wrong / total) * 100} color="bg-rose-400" />
          <Bar label="Skipped" value={(skipped / total) * 100} color="bg-amber-400" />
        </div>

        {/* RIGHT - ANSWERS */}
        <div className="bg-white/5 border border-white/10 rounded-xl p-3 flex flex-col">

          {/* SCROLL ONLY HERE */}
          <div className="flex-1 overflow-y-auto space-y-2 pr-1">

            {questions.map((q, i) => {
              const ans = answers[i];

              const status =
                ans?.selected === null
                  ? "⚠"
                  : ans?.isCorrect
                  ? "✅"
                  : "❌";

              const isOpen = openIndex === i;

              return (
                <div
                  key={i}
                  className="bg-white/5 rounded-lg p-2 flex flex-col min-h-[60px]"
                >
                  {/* TOP */}
                  <div className="flex justify-between text-xs">
                    <span className="truncate w-[80%]">
                      {i + 1}. {q.question}
                    </span>
                    <span>{status}</span>
                  </div>

                  {/* ANSWER */}
                  <div className="text-[11px] mt-1 opacity-80">
                    {ans?.selected ?? "NA"} |
                    <span className="text-emerald-300 ml-1">
                      {q.correctAnswer}
                    </span>
                  </div>

                  {/* TOGGLE */}
                  <button
                    onClick={() => toggle(i)}
                    className="text-[10px] text-indigo-300 mt-1 self-start"
                  >
                    {isOpen ? "Hide" : "View more"}
                  </button>

                  {/* EXPAND */}
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="text-[11px] mt-1 bg-black/20 p-2 rounded"
                      >
                        {q.explanation}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* BUTTON */}
      <div className="text-center mt-4">
        <button
          onClick={() => dispatch(resetQuiz())}
          className="px-6 py-2 rounded-lg bg-gradient-to-r from-indigo-500 to-pink-500 
          hover:scale-105 transition text-sm font-semibold"
        >
          Restart Quiz
        </button>
      </div>
    </div>
  );
};

export default ResultCard;

/* STAT */
const Stat = ({ label, value }: any) => (
  <div className="bg-white/5 p-3 rounded-lg text-center">
    <div className="text-lg font-bold">{value}</div>
    <p className="text-xs opacity-70">{label}</p>
  </div>
);

/* BAR */
const Bar = ({ label, value, color }: any) => (
  <div>
    <div className="flex justify-between text-[11px] mb-1">
      <span>{label}</span>
      <span>{Math.round(value)}%</span>
    </div>
    <div className="w-full h-1.5 bg-white/10 rounded">
      <div
        className={`h-1.5 ${color} rounded`}
        style={{ width: `${value}%` }}
      />
    </div>
  </div>
);