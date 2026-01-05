import { useContext } from "react";
import { AuthContext } from "../Contexts/AuthContext";
import { useNavigate } from "react-router-dom";

const MyProfile = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  return (
    <div className="min-h-[calc(100vh-120px)] flex items-center justify-center bg-slate-900 px-4">
      <div className="bg-slate-950 border border-slate-800 rounded-xl p-8 w-full max-w-md text-center">

        {/* Profile Image */}
        <img
          src={user?.photoURL || "https://i.ibb.co/2kR8X9H/user.png"}
          alt="Profile"
          className="w-24 h-24 rounded-full mx-auto mb-4 border-2 border-yellow-400"
        />

        {/* Name */}
        <h2 className="text-2xl font-bold text-slate-200 mb-1">
          {user?.displayName || "No Name"}
        </h2>

        {/* Email */}
        <p className="text-slate-400 mb-6">
          {user?.email}
        </p>

        {/* Info Box */}
        <div className="bg-slate-900 rounded-lg p-4 mb-6 text-left text-sm text-slate-300">
          <p>
            <span className="text-yellow-400">Account Status:</span>{" "}
            Active
          </p>
          <p>
            <span className="text-yellow-400">Email Verified:</span>{" "}
            {user?.emailVerified ? "Yes" : "No"}
          </p>
        </div>

        {/* Update Button */}
        <button
          onClick={() => navigate("/update-profile")}
          className="btn btn-warning w-full text-black font-semibold"
        >
          Update Profile
        </button>
      </div>
    </div>
  );
};

export default MyProfile;
