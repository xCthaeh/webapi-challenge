import React from "react";

function ProjectsList(props) {
  return (
    <div className="projects-list">
      <h1>Projects</h1>
      {props.projects.map(project => (
        <div className="project">
          <p className="project-id">Project id: {project.id}</p>
          <p className="project-name">Project name: {project.name}</p>
          <p className="project-des">
            Project description: {project.description}
          </p>
        </div>
      ))}
    </div>
  );
}

export default ProjectsList;
