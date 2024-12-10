import { NavLink } from "react-router-dom";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="flex items-center justify-between px-6 py-4 bg-gray-800">
      <div className="text-white text-2xl font-bold">MoviesReview</div>
      <ul
        className={`flex gap-6 items-center text-white font-medium transition-transform duration-300 md:flex-row md:static md:bg-transparent md:h-auto md:w-auto ${
          isMenuOpen
            ? "flex flex-col fixed top-16 right-0 bg-gray-800 w-full h-screen justify-center"
            : "hidden md:flex"
        }`}
      >
        <li>
          <NavLink
            to="/"
            className={({ isActive }) =>
              `hover:text-blue-400 ${
                isActive ? "text-blue-400" : "text-white"
              }`
            }
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/Movies"
            className={({ isActive }) =>
              `hover:text-blue-400 ${
                isActive ? "text-blue-400" : "text-white"
              }`
            }
          >
            Movies
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/Contact"
            className={({ isActive }) =>
              `hover:text-blue-400 ${
                isActive ? "text-blue-400" : "text-white"
              }`
            }
          >
            Contact
          </NavLink>
        </li>
      </ul>
      <div
        className="flex flex-col justify-between h-6 w-8 cursor-pointer md:hidden"
        onClick={toggleMenu}
      >
        <span className="block w-full h-1 bg-white"></span>
        <span className="block w-full h-1 bg-white"></span>
        <span className="block w-full h-1 bg-white"></span>
      </div>
    </nav>
  );
};

export default Header;
