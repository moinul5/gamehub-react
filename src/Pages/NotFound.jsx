import { NavLink } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="min-h-[calc(100vh-120px)] flex items-center justify-center bg-slate-900 px-4">
      <div className="text-center max-w-md">

        {/* 404 */}
        <h1 className="text-7xl font-extrabold text-yellow-400 mb-4">
          404
        </h1>

        {/* Message */}
        <h2 className="text-2xl font-bold text-slate-200 mb-2">
          Page Not Found
        </h2>

        <p className="text-slate-400 mb-6">
          Sorry, the page you are looking for does not exist or has been moved.
        </p>

        {/* Button */}
        <NavLink
          to="/"
          className="btn btn-warning text-black font-semibold"
        >
          Go Back Home
        </NavLink>
      </div>
    </div>
  );
};

export default NotFound;
