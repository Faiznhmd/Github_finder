import { FaGithub } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Navbar = ({ title }) => {
  return (
    <nav className="navbar mb-12 shadow-lg bg-neutral text-neutral-content">
      <div className="container mx-auto">
        <div className="flex-none px-2 mx-2">
          <FaGithub className="text-3xl pr-2 inline cursor-pointer text-white" />
          <Link to="/" className="text-lg font-bold  align-middle text-white">
            GitHub Finder
          </Link>
        </div>
        <div className="flex-1 px-2 mx-2">
          <div className="flex justify-end">
            <Link
              to="/"
              className="btn btn-ghost btn-sm rounded-btn text-white"
            >
              Home
            </Link>
            <Link
              to="/about"
              className="btn btn-ghost btn-sm rounded-btn text-white"
            >
              About
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
