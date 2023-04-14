import { useEffect } from "react";

function ProjectCard({
  project: { id, about, image, link, name, phase, clapCount },
  incrementClaps
}) {


  useEffect( () => {

    console.log( `Hey, I loaded the component for project ${ name }.` )

    return () => console.log( `I unloaded project ${ name }.` )
  }, [] )

  return (
    <li className="card">
      <figure className="image">
        <img src = { image } alt = { name } />
        <button className="claps" onClick = { () => incrementClaps( id ) }>
          👏{ clapCount }
        </button>
      </figure>

      <section className="details">
        <h4>{ name }</h4>
        <p>{ about }</p>
        {
          link ? (
            <p>
              <a href = { link }>Link</a>
            </p>
          ) : null
        }
      </section>

      <footer className="extra">
        <span className="badge blue">Phase { phase }</span>
      </footer>
    </li>
  );
};

export default ProjectCard;
