import { useState } from "react";

import Header from "./components/Header";
import ProjectsContainer from "./components/ProjectsContainer";

function App() {

  const [ isDarkMode, setIsDarkMode ] = useState(true);

  const toggleDarkMode = () => {
    setIsDarkMode( !isDarkMode )
  }

  return (
    <div className={isDarkMode ? "App" : "App light"}>
      
      <Header 
        isDarkMode={isDarkMode} 
        toggleDarkMode={ toggleDarkMode } 
      />

      <ProjectsContainer />
    
    </div>
  );
};

export default App;
