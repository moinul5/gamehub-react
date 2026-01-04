import { use } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../Contexts/AuthContext";

const Login = () => {
  const {loginUser} = use(AuthContext)

  const handleLogin =(e)=>{
    e.preventDefault()
    const email = e.target.email.value
    
    const password = e.target.password.value

    loginUser(email,password)
    .then(console.log("success")
    )
    .catch("error")

    e.target.reset()
  }
  return (
    <div className="min-h-[calc(100vh-120px)] flex items-center justify-center">
      <div className="w-full max-w-md bg-slate-950 border border-slate-800 rounded-xl p-8 shadow-lg">

        {/* Title */}
        <h2 className="text-2xl font-bold text-center mb-6">
          Login to <span className="text-yellow-400">Game</span>Hub
        </h2>

        {/* Form */}
        <form onSubmit={handleLogin} className="space-y-4">

          {/* Email */}
          <div>
            <label className="label">
              <span className="label-text text-slate-300">Email</span>
            </label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              className="input input-bordered w-full bg-slate-900 text-slate-200"
            />
          </div>

          {/* Password */}
          <div>
            <label className="label">
              <span className="label-text text-slate-300">Password</span>
            </label>
            <input
              name="password"
              type="password"
              placeholder="Enter your password"
              className="input input-bordered w-full bg-slate-900 text-slate-200"
            />
          </div>

          {/* Forgot Password */}
          <div className="text-right">
            <NavLink
              to="/forgot-password"
              className="text-sm text-yellow-400 hover:underline"
            >
              Forgot password?
            </NavLink>
          </div>

          {/* Login Button */}
          <button className="btn btn-warning w-full text-black font-semibold">
            Login
          </button>
        </form>

        {/* Divider */}
        <div className="divider text-slate-500">OR</div>

        {/* Google Login */}
        <button className="btn btn-outline w-full border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black">
          Continue with Google
        </button>

        {/* Register Link */}
        <p className="text-center text-sm text-slate-400 mt-6">
          Don’t have an account?{" "}
          <NavLink
            to="/register"
            className="text-yellow-400 hover:underline"
          >
            Register
          </NavLink>
        </p>
      </div>
    </div>
  );
};

export default Login;
