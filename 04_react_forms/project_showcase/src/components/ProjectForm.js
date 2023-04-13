import React, { useState } from "react";

function ProjectForm({ addNewProject }) {

  const [ formName, setFormName ] = useState( '' )
  const [ formAbout, setFormAbout ] = useState( '' )
  const [ formPhase, setFormPhase ] = useState( '' )
  const [ formLink, setFormLink ] = useState( '' )
  const [ formImage, setFormImage ] = useState( '' )

  const changeFormName = event => setFormName( event.target.value )

  const changeFormAbout = event => setFormAbout( event.target.value )

  const changeFormPhase = event => setFormPhase( event.target.value )

  const changeFormLink = event => setFormLink( event.target.value )

  const changeFormImage = event => setFormImage( event.target.value )

  const projectFormSubmit = ( event ) => {
    event.preventDefault()

    const newProject = {
      name: formName,
      about: formAbout,
      phase: parseInt( formPhase ),
      link: formLink,
      image: formImage,
      clapCount: 0
    }

    addNewProject( newProject )
  }



  return (
    <section>

      <form 
        className="form" 
        autoComplete="off" 
        onSubmit={ projectFormSubmit }
      >

        <h3>Add New Project</h3>

        <label htmlFor="name">Name</label>
        <input type="text" id="name" name="name" value={ formName } onChange={ changeFormName } />

        <label htmlFor="about">About</label>
        <textarea id="about" name="about" value={ formAbout } onChange={ changeFormAbout } />

        <label htmlFor="phase">Phase</label>
        <select name="phase" id="phase" value={ formPhase } onChange={ changeFormPhase }>
          <option>Select One</option>
          <option value="1">Phase 1</option>
          <option value="2">Phase 2</option>
          <option value="3">Phase 3</option>
          <option value="4">Phase 4</option>
          <option value="5">Phase 5</option>
        </select>

        <label htmlFor="link">Project Homepage</label>
        <input type="text" id="link" name="link" value={ formLink } onChange={ changeFormLink }/>

        <label htmlFor="image">Screenshot</label>
        <input type="text" id="image" name="image" value={ formImage } onChange={ changeFormImage }/>

        <button type="submit">Add Project</button>
      </form>
    </section>
  );
};

export default ProjectForm;
