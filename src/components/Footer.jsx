import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-slate-950 text-slate-300 mt-16">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-8">

        {/* Brand */}
        <div>
          <h2 className="text-2xl font-bold mb-2">
            <span className="text-yellow-400">Game</span>Hub
          </h2>
          <p className="text-slate-400 text-sm">
            Discover, explore, and support indie game developers from around the world.
          </p>
        </div>

        {/* Navigation */}
        <div>
          <h3 className="text-sm font-semibold text-yellow-400 mb-3">
            Navigation
          </h3>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-yellow-400 transition">Home</li>
            <li className="hover:text-yellow-400 transition">Games</li>
            <li className="hover:text-yellow-400 transition">Indie Spotlight</li>
            <li className="hover:text-yellow-400 transition">Developers</li>
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h3 className="text-sm font-semibold text-yellow-400 mb-3">
            Resources
          </h3>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-yellow-400 transition">Support</li>
            <li className="hover:text-yellow-400 transition">Privacy Policy</li>
            <li className="hover:text-yellow-400 transition">Terms & Conditions</li>
          </ul>
        </div>

        {/* Social */}
        <div>
          <h3 className="text-sm font-semibold text-yellow-400 mb-3">
            Follow Us
          </h3>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-yellow-400 transition">Facebook</li>
            <li className="hover:text-yellow-400 transition">Twitter</li>
            <li className="hover:text-yellow-400 transition">Discord</li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-slate-800 text-center py-4 text-sm text-slate-400">
        © {new Date().getFullYear()} GameHub. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
