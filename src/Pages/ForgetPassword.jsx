import { use, useState } from "react";
import { AuthContext } from "../Contexts/AuthContext";
import { useLocation, useNavigate } from "react-router-dom";
import useTitle from "../components/useTitle";

const ForgotPassword = () => {
    const { ForgetPassword } = use(AuthContext)
  useTitle("GameHub | Forgot Password");
  const location = useLocation();
  const navigate = useNavigate();

  const [email, setEmail] = useState(
    location.state?.email || ""
  );
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleReset = (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    if (!email) {
      setError("Please enter your email address");
      return;
    }

    ForgetPassword(email)
    .then(() => {
        setSuccess("Password reset email sent. Redirecting to Gmail...");
        setTimeout(() => {
          window.location.href = "https://mail.google.com";
        }, 1500);
      })
      .catch((err) => {
        setError(err.message);
      });

      
  };

  return (
    <div className="min-h-[calc(100vh-120px)] flex items-center justify-center bg-slate-900 px-4">
      <div className="bg-slate-950 border border-slate-800 rounded-xl p-8 w-full max-w-md">

        <h2 className="text-2xl font-bold text-center mb-6">
          Reset <span className="text-yellow-400">Password</span>
        </h2>

        <form onSubmit={handleReset} className="space-y-4">

          {/* Email */}
          <div>
            <label className="label text-sm text-slate-300">
              Email Address
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="input input-bordered w-full bg-slate-900 text-slate-200"
            />
          </div>

          {/* Error */}
          {error && (
            <p className="text-red-400 text-sm">{error}</p>
          )}

          {/* Success */}
          {success && (
            <p className="text-green-400 text-sm">{success}</p>
          )}

          {/* Button */}
          <button
            type="submit"
            className="btn btn-warning w-full text-black font-semibold"
          >
            Reset Password
          </button>
        </form>

        {/* Back to login */}
        <button
          onClick={() => navigate("/login")}
          className="text-sm text-slate-400 mt-4 hover:text-yellow-400 transition block mx-auto"
        >
          Back to Login
        </button>
      </div>
    </div>
  );
};

export default ForgotPassword;
