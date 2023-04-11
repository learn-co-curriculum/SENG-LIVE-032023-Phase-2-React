import React, { useState } from "react";

function Header() {

  const [ isDarkMode, setIsDarkMode ] = useState( true )

  function toggleDarkMode ( event ) {
  setIsDarkMode( !isDarkMode )
  }

  return (
    <header>
      <h1>
        <span className="logo">{"//"}</span>
        Project Showcase
      </h1>
      <nav>
        <button onClick={ toggleDarkMode }>
          {
            isDarkMode ? "Light Mode" : "Dark Mode"
          }
        </button>
      </nav>
    </header>
  );
}

export default Header;
