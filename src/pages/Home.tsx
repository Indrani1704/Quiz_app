import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div
      className="min-h-screen flex items-center justify-center relative overflow-hidden
      bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500"
    >
      {/*  Glow Background */}
      <div className="absolute w-72 h-72 bg-pink-400 rounded-full blur-3xl opacity-30 top-10 left-10"></div>
      <div className="absolute w-72 h-72 bg-blue-400 rounded-full blur-3xl opacity-30 bottom-10 right-10"></div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative z-10 text-center text-white backdrop-blur-xl bg-white/10 
        border border-white/20 rounded-3xl p-10 shadow-2xl w-[400px]"
      >
        {/* Title */}
        <h1 className="text-3xl font-bold mb-3">
          🚀 Quiz App
        </h1>

        {/* Tagline */}
        <p className="text-sm opacity-80 mb-6">
          Test your knowledge with a premium interactive quiz experience
        </p>

        {/* Start Button */}
        <button
          onClick={() => navigate("/quiz")}
          className="w-full bg-white text-black font-semibold p-3 rounded-xl 
          hover:scale-[1.03] transition shadow-lg"
        >
          Start Quiz →
        </button>
      </motion.div>
    </div>
  );
};

export default Home;