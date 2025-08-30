// Navbar.tsx
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center p-4 shadow-md bg-white">
      <h1 className="text-xl font-bold">RESUMIND</h1>
      <Link to="/upload">
        <button className="px-4 py-2 rounded-full bg-indigo-500 text-white hover:bg-indigo-600">
          Upload Resume
        </button>
      </Link>
    </nav>
  );
};

export default Navbar;
