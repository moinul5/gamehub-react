const Loader = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-900">
      <div className="flex flex-col items-center gap-4">

        {/* Spinner */}
        <span className="loading loading-ring loading-lg text-yellow-400"></span>

        {/* Text */}
        <p className="text-slate-400 text-sm tracking-wide">
          Loading GameHub...
        </p>

      </div>
    </div>
  );
};

export default Loader;
