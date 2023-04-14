import { useState, useEffect } from 'react';

import ProjectForm from "./ProjectForm";
import ProjectList from "./ProjectList";

const baseUrl = "http://localhost:4000/"
const projectsUrl = baseUrl + 'projects/'

function ProjectsContainer() {

  const [ projects, setProjects ] = useState( [] );


  // useEffect( () => {
  //   fetch( projectsUrl )
  //   .then( r => r.json() )
  //   .then( projectsData => {
  //     const addClapsToProjects = projectsData.map( project => {
  //         return {...project, clapCount: 0 }
  //     })
  //     setProjects( addClapsToProjects )
  //   });
  // }, [])

  useEffect( () => fetchProjects(), [] )


  const fetchProjects = () => {
    fetch( projectsUrl )
      .then( r => r.json() )
      .then( projectsData => {
        const addClapsToProjects = projectsData.map( project => {
            return {...project, clapCount: 0 }
        })
        setProjects( addClapsToProjects )
      });
  }

  const incrementClaps = id => {
    setProjects( projects.map( project => 
      project.id === id ? 
        {...project, clapCount: project.clapCount + 1 }
        : project
    ))
  }

  const addNewProject = newProject => {
    
    const postRequest = {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'accepts': 'application/json'
      },
      body: JSON.stringify( newProject )
    }
    
    fetch( projectsUrl, postRequest )
    .then( r => r.json() )
    .then( newProjectData => {
      const addClapCountToNewProject = {...newProjectData, clapCount: 0 }
      setProjects( [...projects, addClapCountToNewProject ] )
    })
  }

  return (
    <>
      <ProjectForm
        addNewProject = { addNewProject }
      />
      <ProjectList
        fetchProjects = { fetchProjects }
        projects = { projects }
        incrementClaps = { incrementClaps }
      />
    </>
  )
}

export default ProjectsContainer;