import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];

  return <nav>{/* display an <a> tag for each link here */}
    <a href="#home">{links[0]}</a>
    <a href="#about">{links[1]}</a>
    <a href="#projects">{links[2]}</a>
    </nav>;
}

export default NavBar;
