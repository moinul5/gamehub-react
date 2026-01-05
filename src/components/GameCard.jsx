import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";


const GameCard = ({ game }) => {
  const navigate = useNavigate();

  const { id, title, coverPhoto, ratings, category } = game;

  return (
     <motion.div
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 200 }}
      className="bg-slate-950 rounded-xl overflow-hidden cursor-pointer"
    >

    <div
      onClick={() => navigate(`/games/${id}`)}
      className="cursor-pointer bg-slate-950 border border-slate-800 rounded-xl overflow-hidden hover:scale-[1.02] transition-transform duration-200"
      >
      {/* Image */}
      <img
        src={coverPhoto}
        alt={title}
        className="h-48 w-full object-cover"
      />

      {/* Content */}
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-1">
          {title}
        </h3>

        <p className="text-sm text-slate-400 mb-2">
          Category: {category}
        </p>

        <div className="flex items-center justify-between">
          <span className="text-yellow-400 font-medium">
            ⭐ {ratings}
          </span>

          <span className="text-xs text-slate-500">
            View Details →
          </span>
        </div>
      </div>
    </div>
        </motion.div>
  );
};

export default GameCard;
