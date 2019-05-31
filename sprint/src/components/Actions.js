import React from "react";

function ActionsList(props) {
  return (
    <div className="actions-list">
      <h1>Actions</h1>
      {props.actions.map(action => (
        <div className="action">
          <p className="action-id">Action id: {action.id}</p>
          <p className="project-id">Project id: {action.project_id}</p>
          <p className="action-des">Action description: {action.description}</p>
          <p className="action-memo">Action memos: {action.notes}</p>
        </div>
      ))}
    </div>
  );
}

export default ActionsList;
