
import React, { useState } from 'react'
import Header from "./components/Header";
import ProjectForm from "./components/ProjectForm";
import ProjectList from "./components/ProjectList";

const App = () => {

  const [projects, setProjects] = useState([]);
  
  const [isDarkMode, setIsDarkMode] = useState(true);

  const [searchQuery, setSearchQuery] = useState("")
  
  const changeSearchQuery = (e) => {
    setSearchQuery(e.target.value)
  }

  const filteredProjects = projects.filter( project => 
    project.name.toLowerCase().includes(searchQuery.toLowerCase()) 
    || 
    project.about.toLowerCase().includes(searchQuery.toLowerCase())
  )
  
  const toggleDarkMode = () => {
    setIsDarkMode(isDarkMode => !isDarkMode)
  }

  const incrementClap = ( projectToIncreaseClap ) => {
    const newClapCount = projectToIncreaseClap.clapCount + 1
    const updateProjectClapCount = {... projectToIncreaseClap, clapCount: newClapCount }
    
    const updateAllProjectsClapCount = projects.map( project => project.id === projectToIncreaseClap.id ? updateProjectClapCount : project )

    setProjects( updateAllProjectsClapCount )
  }


  const fetchProjects = () => {
    fetch("http://localhost:4000/projects")
      .then( res => res.json() )
      .then( projectsData => {
        let addClapCountToProjects = projectsData.map( project => {
          return {... project, clapCount: 0 }
        })

        // console.log( addClapCountToProjects )
        setProjects( addClapCountToProjects )
      });
  }

  return (
    <div className="App">
      <Header
        isDarkMode = { isDarkMode }
        toggleDarkMode = { toggleDarkMode }
      />
      <ProjectForm />

      <center>
        <button onClick={ fetchProjects }>Load Projects</button>
      </center>

      <ProjectList
        projects = { filteredProjects }
        changeSearchQuery = { changeSearchQuery }
        incrementClap = { incrementClap }
      />
    </div>
  );
};

export default App;
