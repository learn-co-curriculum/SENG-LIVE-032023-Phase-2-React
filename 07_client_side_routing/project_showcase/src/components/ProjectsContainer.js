import { useState, useEffect } from 'react';
import ProjectList from './ProjectList';
import ProjectEditForm from './ProjectEditForm';
import ProjectForm from './ProjectForm';
import ProjectDetail from './ProjectDetail';
import { Switch, Route, useLocation } from 'react-router-dom'

const ProjectsContainer = () => {
  const [projects, setProjects] = useState([]);
  const [projectToEdit, setProjectToEdit] = useState(null);
  const [selectedPhase, setSelectedPhase] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  const [ viewProjectDetails, setViewProjectDetails ] = useState( null )

  const location = useLocation()


  useEffect(() => {
    let url;
    if (selectedPhase && searchQuery) {
      url = `http://localhost:4000/projects?phase=${selectedPhase}&q=${encodeURI(searchQuery)}`;
    } else if (searchQuery) {
      url = `http://localhost:4000/projects?q=${encodeURI(searchQuery)}`;
    } else if (selectedPhase) {
      url = `http://localhost:4000/projects?phase=${selectedPhase}`;
    } else {
      url = "http://localhost:4000/projects";
    }
    fetch(url)
      .then((resp) => resp.json())
      .then((projects) => setProjects(projects));
  }, [selectedPhase, searchQuery]);

  const onSelectedPhaseChange = (newPhase) => {
    setSelectedPhase(newPhase)
  }

  const onAddProject = (newProj) => {
    setProjects((projects) => [...projects, newProj]);
  };

  const onUpdateProject = (updatedProject) => {
    setProjects(projects => projects.map(originalProject => {
      if (originalProject.id === updatedProject.id) {
        return updatedProject;
      } else {
        return originalProject;
      }
    }))
    setProjectToEdit(null);
  };
  
  const onDeleteProject = (deletedProjectId) => {
    // remove the project from state
    console.log('deleting project from App state', 'id:', deletedProjectId)
    setProjects(projects => projects.filter(project => {
      return project.id !== deletedProjectId
    }))
  }
  
  const onEditProject = (projectToEdit) => {
    setProjectToEdit(projectToEdit)
  };
  

  const projectFormUrl = projectToEdit ? `/projects/edit/${ projectToEdit.id }` : '/projects/new'


  const renderForm = () => {
    if (projectToEdit) {
      return (
        <ProjectEditForm
          projectToEdit={projectToEdit}
          onUpdateProject={onUpdateProject}
        />
      );
    } else {
      return <ProjectForm onAddProject={onAddProject} />;
    }
  };

  if ( location.pathname.includes( '/projects/new' ) && projectToEdit )
    setProjectToEdit( null )

  if ( location.pathname.includes( '/projects/edit/' ) ) {
    const id = parseInt( location.pathname.split( '/' ).slice( -1 )[0] )
    const project = projects.find( project => project.id === id )
    if ( project && ( !projectToEdit || project.id !== projectToEdit.id ) )
      setProjectToEdit( project )
  }

  if ( location.pathname.includes( '/projects/details/' ) ) {
    const id = parseInt( location.pathname.split( '/' ).slice( -1 )[0] )
    const project = projects.find( project => project.id === id )
    if ( project && ( !viewProjectDetails || project.id !== viewProjectDetails.id ) )
      setViewProjectDetails( project )
  }

  const projectDetailsUrl = viewProjectDetails ? '/projects/details/' + viewProjectDetails.id : null



  return (
    <>
      <Switch>
        <Route path = { projectFormUrl } >
          {renderForm()}
        </Route>

        <Route exact path = '/projects' >
          <ProjectList
            projects={projects}
            onEditProject={onEditProject}
            onUpdateProject={onUpdateProject}
            onDeleteProject={onDeleteProject}
            onSelectedPhaseChange={onSelectedPhaseChange}
            setSelectedPhase={setSelectedPhase}
            setSearchQuery={setSearchQuery}
          />
        </Route>

        <Route path = { projectDetailsUrl }>
          <ProjectDetail
            onEditProject={onEditProject}
            onUpdateProject={onUpdateProject}
            onDeleteProject={onDeleteProject}
            viewProjectDetails = { viewProjectDetails }
          />
        </Route>

      </Switch>
    </>
  )
}

export default ProjectsContainer;