const Newsletter = () => {
  return (
    <section className="bg-slate-950 py-16 px-4 mt-16">
      <div className="max-w-4xl mx-auto text-center">

        {/* Title */}
        <h2 className="text-3xl font-bold mb-4">
          Join the <span className="text-yellow-400">GameHub</span> Newsletter
        </h2>

        {/* Description */}
        <p className="text-slate-400 mb-8">
          Get updates on new indie games, developer stories, and exclusive releases
          delivered straight to your inbox.
        </p>

        {/* Form */}
        <form className="flex flex-col sm:flex-row gap-4 justify-center">
          <input
            type="email"
            placeholder="Enter your email address"
            className="input input-bordered w-full sm:w-80 bg-slate-900 text-slate-200"
          />

          <button
            type="submit"
            className="btn btn-warning text-black font-semibold"
          >
            Subscribe
          </button>
        </form>

        {/* Small note */}
        <p className="text-xs text-slate-500 mt-4">
          No spam. Unsubscribe anytime.
        </p>
      </div>
    </section>
  );
};

export default Newsletter;
