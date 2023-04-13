import { useState } from 'react';

import ProjectForm from "./ProjectForm";
import ProjectList from "./ProjectList";

const baseUrl = 'http://localhost:4000/'
const projectsUrl = baseUrl + 'projects/'

function ProjectsContainer() {

  const [ projects, setProjects ] = useState( [] );

  const fetchProjects = () => {
    fetch( projectsUrl )
      .then( res  => res.json() )
      .then( projectsData  => {
        const addClapsToProjects = projectsData.map( project => {
          return {...project, clapCount: 0 }
        })
        setProjects( addClapsToProjects )
      });
  }

  const incrementClaps = id => {
    const updateClapCountsForProjects = projects.map( project => 
      project.id === id ? 
      {...project, clapCount: project.clapCount + 1 } 
      : project 
    )
    setProjects( updateClapCountsForProjects )
  }

  const addNewProject = newProject => setProjects( [...projects, newProject ] )

  return (
    <>
      <ProjectForm addNewProject = { addNewProject } />

      <ProjectList
        fetchProjects = { fetchProjects }
        projects = { projects }
        incrementClaps = { incrementClaps }
      />
    </>
  )
}

export default ProjectsContainer;