import { NavLink } from 'react-router-dom'
import { FaLinkedinIn } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaFacebookMessenger } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-10">
      <div className="max-w-screen-xl mx-auto px-4 flex flex-wrap justify-between">
        <div className="footer-section flex-1 min-w-[250px] mb-6">
          <h3 className="text-lg mb-4">About Us</h3>
          <p className="text-sm leading-relaxed">
            Lorem ipsum dolor sit amet,  <br />consectetur adipiscing elit. Fusce <br /> at nulla  id purus consequat tristique.
          </p>
        </div>
        <div className="footer-section flex-1 min-w-[250px] mb-6">
          <h3 className="text-lg mb-4">Quick Links</h3>
          <ul className="list-none">
            <li className="mb-2">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? 'text-yellow-400' : 'text-white'
                }
              >
                Home
              </NavLink>
            </li>
            <li className="mb-2">
              <NavLink to="/movies" className="text-white">
                Movies
              </NavLink>
            </li>
            <li className="mb-2">
              <NavLink to="/about" className="text-white">
                About
              </NavLink>
            </li>
            <li className="mb-2">
              <NavLink to="/contact" className="text-white">
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="footer-section flex-1 min-w-[250px] mb-6">
          <h3 className="text-lg mb-4">Follow Us</h3>
          <div className="social-icons flex space-x-4">
            <NavLink to="#" className="text-white hover:text-yellow-400">
            <FaFacebookMessenger />
            </NavLink>
            <NavLink to="#" className="text-white hover:text-yellow-400">
            <FaTwitter />
            </NavLink>
            <NavLink to="#" className="text-white hover:text-yellow-400">
            <FaInstagram />
            </NavLink>
            <NavLink to="#" className="text-white hover:text-yellow-400">
            <FaLinkedinIn />
            </NavLink>
          </div>
        </div>
      </div>
      <div className="footer-bottom text-center pt-6 border-t border-gray-600 text-sm">
        <p>&copy; Sumit-TV shows 2024. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer

