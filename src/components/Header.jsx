import { Link } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";

const Header = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="flex justify-between items-center p-5 border-b">
      <div className="space-x-5">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </div>

      <button
        onClick={toggleTheme}
        className="w-full sm:w-auto px-4 py-2 md:px-6 md:py-3 bg-sky-500 hover:bg-sky-600 active:scale-95 transition-all  duration-300  text-white  font-medium  rounded-lg shadow-md  cursor-pointer "
      >
        {theme === "light" ? "Dark Mode" : "Light Mode"}
      </button>
    </div>
  );
};

export default Header;
