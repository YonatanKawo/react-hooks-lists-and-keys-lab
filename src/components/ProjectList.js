import React from "react";
import Links from "./Links";
import user from "../data/user";
import ProjectItem from "./ProjectItem";

function ProjectList({projects}) {
  //console.log(props);
  
  return (
    <div id="projects">
      <h2>My Projects</h2>
      <div id="project-list">{/* render ProjectItem components here */}
    {projects.map((item) => {
      return (<ProjectItem key={item.id} name={item.name} about={item.about} technologies={item.technologies}/>)
    })}
     
      </div>
     
    </div>
  );
}

export default ProjectList;
