// import { useState } from "react";

function ProjectCard({ project, incrementClap }) {
  
  const {
    image,
    name,
    about,
    link,
    phase,
    clapCount
  } = project;

  return (
    <li className="card">
      <figure className="image">
        <img src={image} alt={name} />
        <button className="claps" onClick={ () => incrementClap( project ) }>
          👏{ clapCount }
        </button>
      </figure>

      <section className="details">
        <h4>{name}</h4>
        <p>{about}</p>
        {
          link ? (
            <p>
              <a href={link}>Link</a>
            </p>
          ) : null
        }
      </section>

      <footer className="extra">
        <span className="badge blue">Phase {phase}</span>
      </footer>
    </li>
  );
}

export default ProjectCard;
