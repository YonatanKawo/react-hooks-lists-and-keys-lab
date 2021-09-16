import React from "react";

function ProjectItem({name,about,technologies}) {
// console.log(props)
const techs = technologies.map((tech,id) => {
  
    return <span key={id}>{tech}</span>
  });

  return (
    <div className="project-item">
      <h3>{name}</h3>
      <p>{about}</p>
      <div className="technologies">
        {/* render a <span> for each technology in the technologies array */}
        <span>{techs} </span>
      </div>
    </div>
  );
}

export default ProjectItem;
