import React from "react";
import ProjectItem from "./ProjectItem";

function ProjectList( props ) {
  // console.log(projects);

  // const projects = props.projects
  // const { projects } = props

  const renderProjectItems = props.projects.map( project => 
    <ProjectItem 
      {... project } 
      key = { project.id }
    />)

  return (
    <div id="projects">
      <h2>My Projects</h2>
      <div id="project-list">
        {/* render ProjectItem components here */}
        { renderProjectItems }
      </div>
    </div>
  );
}

export default ProjectList;
