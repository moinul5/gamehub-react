import { useContext, useState } from "react";
import { AuthContext } from "../Contexts/AuthContext";
import { updateProfile } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import Loader from "../components/Loader";

const UpdateProfile = () => {
  const { user,setUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleUpdate = (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    const name = e.target.name.value.trim();
    const photoURL = e.target.photoURL.value.trim();

    if (!name || !photoURL) {
      setError("Both fields are required");
      return;
    }

    updateProfile(user, {
      displayName: name,
      photoURL: photoURL,
    })
      .then(() => {
        setSuccess("Profile updated successfully");
        setUser({
            ...user,
            displayName: name,
            photoURL: photoURL
        })
        navigate("/my-profile");
      })
      .catch((err) => {
        setError(err.message);
      });
  };

  return (
    <div className="min-h-[calc(100vh-120px)] flex items-center justify-center bg-slate-900 px-4">
      <div className="bg-slate-950 border border-slate-800 rounded-xl p-8 w-full max-w-md">

        <h2 className="text-2xl font-bold text-center mb-6">
          Update <span className="text-yellow-400">Profile</span>
        </h2>

        <form onSubmit={handleUpdate} className="space-y-4">

          {/* Name */}
          <div>
            <label className="label text-sm text-slate-300">
              Name
            </label>
            <input
              type="text"
              name="name"
              defaultValue={user?.displayName || ""}
              className="input input-bordered w-full bg-slate-900 text-slate-200"
            />
          </div>

          {/* Photo URL */}
          <div>
            <label className="label text-sm text-slate-300">
              Photo URL
            </label>
            <input
              type="text"
              name="photoURL"
              defaultValue={user?.photoURL || ""}
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
            Update Information
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdateProfile;
