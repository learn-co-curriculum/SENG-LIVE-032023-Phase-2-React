import { useState } from "react";
import { FaPencilAlt, FaTrash } from "react-icons/fa";

function ProjectCard({ project, onEditProject, deleteProject, updateProjects }) {
  const { id, image, about, name, link, phase, claps } = project;

  const handleEditClick = () => {
    onEditProject(project);
  };

  const handleDeleteClick = () => {
    deleteProject( project )
  };

  const increaseClaps = () => {
    const updateProjectClaps = {...project, claps: project.claps + 1 }
    updateProjects( updateProjectClaps )
  }

  return (
    <li className="card">
      <figure className="image">
        <img src={image} alt={name} />
        <button onClick={ increaseClaps } className="claps">
          👏{claps}
        </button>
      </figure>

      <section className="details">
        <h4>{name}</h4>
        <p>{about}</p>
        {link ? (
          <p>
            <a href={link}>Link</a>
          </p>
        ) : null}
      </section>

      <footer className="extra">
        <span className="badge blue">Phase {phase}</span>
        <div className="manage">
          <button onClick={handleEditClick}>
            <FaPencilAlt />
          </button>
          <button onClick={handleDeleteClick}>
            <FaTrash />
          </button>
        </div>
      </footer>
    </li>
  );
};

export default ProjectCard;
