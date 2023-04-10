import { render } from "@testing-library/react";
import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];

  const renderLinks = links.map( link => <a key={ link } href={ `#${ link }` }>{ link }</a> )

  // console.log( renderLinks )

  return (
    <nav>
      {/* display an <a> tag for each link here */}
      { renderLinks }
    </nav>
  )
}

export default NavBar;


// links.forEach( link => {
//    let navLink = document.createElement( 'a' )
//    navLink.href = `#${link}`
//    navLink.textContent = link