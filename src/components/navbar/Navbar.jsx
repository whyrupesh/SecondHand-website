import { Link, useMatch, useResolvedPath } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <nav className="bg-black border-gray-200 text-white	">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <Link to="/" className="flex items-center space-x-3">
            {/* <img src="path/to/logo.png" class="h-8" alt="Logo" /> */}
            <span className="self-center text-2xl font-semibold whitespace-nowrap">
              Logo
            </span>
          </Link>

          <ul className="flex space-x-20">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/Buy">Explore</Link>
            </li>
            <li>
              <Link to="/Sell">Sell</Link>
            </li>
          </ul>

          <div>
            <a href="#">Profile</a>
          </div>
        </div>
      </nav>
    </>
  );
}
