import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom";

function Header({ isDarkMode, onToggleDarkMode }) {
  const buttonTextContent = isDarkMode ? "Light Mode" : "Dark Mode";

  return (
    <header>
      <h1 className="branding">
        <Link to='/'>
          <span className="logo">{"//"}</span>
          Project Showcase
        </Link>
      </h1>
      <nav>
        <div className="navigation">
          <Link className='button' to='/projects' >
            All Projects
          </Link>
          <Link className="button" to="/projects/new">
            Add Project
          </Link>
          <Link className="button" to="/about">
            About
          </Link>
          <button onClick={onToggleDarkMode}>{buttonTextContent}</button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
