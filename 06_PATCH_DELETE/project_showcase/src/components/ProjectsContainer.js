import { useState, useEffect } from 'react';

import ProjectForm from "./ProjectForm";
import ProjectEditForm from "./ProjectEditForm";
import ProjectList from "./ProjectList";

const baseUrl = "http://localhost:4000/"
const projectsUrl = baseUrl + "projects/"

function ProjectsContainer() {
  let [projects, setProjects] = useState([]);
  const [projectToEdit, setProjectToEdit] = useState(null);
  const [selectedPhase, setSelectedPhase] = useState("");
  const [searchQuery, setSearchQuery] = useState("")

  
  useEffect(() => {
    if (selectedPhase && searchQuery) {
      projectsUrl += `?phase=${selectedPhase}&q=${searchQuery}`
    } else if (selectedPhase) {
      projectsUrl += `?phase=${selectedPhase}`
    } else if (searchQuery) {
      projectsUrl += `?q=${searchQuery}`
    }
    fetch(projectsUrl)
      .then((res) => res.json())
      .then((projectsData) => setProjects(projectsData));
  }, [selectedPhase, searchQuery])

  const onAddProject = (project) => {
    setProjects(projects => [...projects, project]);
  }
  
  const onUpdateProject = () => {
    setProjectToEdit(null);
  };

  const onEditProject = (projectToEdit) => {
    setProjectToEdit(projectToEdit);
  };

  const updateProjects = updatedProject => {

    const patchRequest = {
      method: 'PATCH',
      headers: {
        'content-type': 'application/json',
        'accepts': 'application/json'
      },
      body: JSON.stringify( updatedProject )
    }

    fetch( projectsUrl + updatedProject.id, patchRequest )
    .then( r => r.json() )
    .then( updatedProjectData => {
      const updatedProjects = projects.map( project =>
        project.id === updatedProjectData.id ? updatedProjectData : project )

      setProjects( updatedProjects )
    })
  }

  const deleteProject = deletedProject => {

    const deleteRequest = {
      method: 'DELETE',
    }

    fetch( projectsUrl + deletedProject.id, deleteRequest )
    .then( () => {
      const deleteProjects = projects.filter( project => project.id !== deletedProject.id )

      setProjects( deleteProjects )
    })
  }

  const renderForm = () => {
    if (projectToEdit) {
      return (
        <ProjectEditForm
          projectToEdit={projectToEdit}
          onUpdateProject={onUpdateProject}
          updateProjects={updateProjects}
        />
      );
    } else {
      return <ProjectForm onAddProject={onAddProject} />;
    }
  };

  return (
    <>
      {renderForm()}
      <ProjectList
        projects={projects}
        setSelectedPhase={setSelectedPhase}
        onEditProject={onEditProject}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        deleteProject={deleteProject}
        updateProjects={updateProjects}
      />
    </>
  )
}

export default ProjectsContainer;