import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const MainLayout = () => {
  return (
    <div
      data-theme="dark"
      className="min-h-screen flex flex-col bg-slate-900 text-slate-200"
    >
      <Navbar />

      {/* THIS PART IS CRITICAL */}
      <div className="flex-1">
        <Outlet />
      </div>

      <Footer />
    </div>
  );
};

export default MainLayout;
