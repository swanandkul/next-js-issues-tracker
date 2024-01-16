import { Link } from "react-router-dom";
import { useTheme } from "../context/theme-context";

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();

  const handleChange = () => {
    toggleTheme();
  };
  return (
    <>
      <div className="navbar">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/blog">Blog</Link>
      </div>
      <label class="toggle-container">
        <input type="checkbox" onChange={handleChange} />
        <span class="toggle-switch"></span>
      </label>
    </>
  );
};

export default Navbar;
