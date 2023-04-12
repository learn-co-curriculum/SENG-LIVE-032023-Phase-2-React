// import { useState } from 'react';
import ProjectCard from "./ProjectCard";

function ProjectList({ projects, changeSearchQuery, incrementClap }) {
  
  const renderedProjects = projects.map(project =>
    <ProjectCard
      key={project.id}
      project = { project }
      incrementClap= { incrementClap }
    />
  )

  return (
    <section>
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
        onChange={ changeSearchQuery }
      />

      <ul className="cards">{ renderedProjects }</ul>
    </section>
  );
};

export default ProjectList;