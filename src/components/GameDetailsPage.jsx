const GameDetailsPage = ({ game }) => {
  const {
    title,
    coverPhoto,
    category,
    ratings,
    developer,
    description,
    downloadLink,
  } = game;

  return (
    <div className="max-w-5xl mx-auto px-4 py-10">
      
      {/* Cover Image */}
      <div className="mb-6">
        <img
          src={coverPhoto}
          alt={title}
          className="w-full h-[350px] object-cover rounded-xl border border-slate-800"
        />
      </div>

      {/* Title & Meta */}
      <div className="mb-6">
        <h1 className="text-3xl md:text-4xl font-bold mb-2">
          {title}
        </h1>

        <div className="flex flex-wrap gap-4 text-sm text-slate-400">
          <span>
            <span className="text-yellow-400">Category:</span> {category}
          </span>
          <span>
            <span className="text-yellow-400">Developer:</span> {developer}
          </span>
          <span>
            <span className="text-yellow-400">Rating:</span> ⭐ {ratings}
          </span>
        </div>
      </div>

      {/* Description */}
      <div className="bg-slate-950 border border-slate-800 rounded-xl p-6 mb-8">
        <h2 className="text-xl font-semibold mb-3 text-yellow-400">
          About the Game
        </h2>
        <p className="text-slate-300 leading-relaxed">
          {description}
        </p>
      </div>

      {/* Action Button */}
      <div>
        <a
          href={downloadLink}
          target="_blank"
          rel="noreferrer"
          className="btn btn-warning text-black font-semibold"
        >
          Download / Play Now
        </a>
      </div>
    </div>
  );
};

export default GameDetailsPage;
