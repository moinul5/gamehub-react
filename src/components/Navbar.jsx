import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../Contexts/AuthContext";

function Navbar() {
  const { user, loading, handleSignout } = useContext(AuthContext);

  const links = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "text-yellow-400"
              : "text-slate-200 hover:text-yellow-400 transition"
          }
        >
          Home
        </NavLink>
      </li>

      <li>
        <NavLink
          to="/games"
          className={({ isActive }) =>
            isActive
              ? "text-yellow-400"
              : "text-slate-200 hover:text-yellow-400 transition"
          }
        >
          Games
        </NavLink>
      </li>

      <li>
        <NavLink
          to="/indie"
          className={({ isActive }) =>
            isActive
              ? "text-yellow-400"
              : "text-slate-200 hover:text-yellow-400 transition"
          }
        >
          Indie Spotlight
        </NavLink>
      </li>
    </>
  );

  return (
    <div className="navbar bg-slate-900 shadow-sm h-16 px-4">
      {/* START */}
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-slate-900 rounded-box z-10 mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>

        <NavLink to="/" className="flex items-center gap-2">
          <span className="text-2xl font-extrabold tracking-wide">
            <span className="text-yellow-400">Game</span>
            <span className="text-slate-200">Hub</span>
          </span>
        </NavLink>
      </div>

      {/* CENTER */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>

      {/* END */}
      <div className="navbar-end flex items-center gap-3 min-w-[140px] justify-end">
        {loading ? (
          <span className="loading loading-ring loading-sm text-yellow-400"></span>
        ) : user ? (
          <>
            <NavLink to="/my-profile">
              <img
                src={user.photoURL || "https://i.ibb.co.com/x8g6D58X/images.png"}
                alt="Profile"
                className="w-10 h-10 rounded-full border-2 border-yellow-400 hover:scale-105 transition"
              />
            </NavLink>

            <button onClick={handleSignout} className="btn btn-warning btn-sm text-black font-semibold">
              Logout
            </button>
          </>
        ) : (
          <>
            <NavLink
              to="/login"
              className="text-slate-200 hover:text-yellow-400 transition"
            >
              Login
            </NavLink>

            <NavLink
              to="/register"
              className="btn btn-warning btn-sm text-black font-semibold"
            >
              Register
            </NavLink>
          </>
        )}
      </div>
    </div>
  );
}

export default Navbar;
