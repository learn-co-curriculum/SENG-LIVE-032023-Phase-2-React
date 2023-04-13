import { useState } from 'react';
import ProjectCard from "./ProjectCard";

function ProjectList({ projects, fetchProjects, incrementClaps }) {

  const [ searchQuery, setSearchQuery ] = useState("")

  const changeSearch = ( e ) => setSearchQuery( e.target.value )

  const searchResults = projects.filter( project => project.name.toLowerCase().includes( searchQuery.toLowerCase() ) )

  const projectCards = searchResults.map( project => (
    <ProjectCard
      key = { project.id }
      project = { project }
      incrementClaps = { incrementClaps } 
    />
  ))

  return (
    <section>
      <button onClick = { fetchProjects }>Load Projects</button>
      <h2>Projects</h2>

      <div className="filter">
        <button>All</button>
        <button>Phase 5</button>
        <button>Phase 4</button>
        <button>Phase 3</button>
        <button>Phase 2</button>
        <button>Phase 1</button>
      </div>
      <input
        type="text"
        placeholder="Search..."
        onChange = { changeSearch }
      />

      <ul className="cards">{ projectCards }</ul>
    </section>
  );
};

export default ProjectList;