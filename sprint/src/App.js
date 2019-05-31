import React, { Component } from "react";
import "./App.css";
import axios from "axios";
import ProjectsList from "./components/Projects";
import ActionsList from "./components/Actions";

const url = "http://localhost:8000";

class App extends Component {
  constructor() {
    super();
    this.state = {
      projects: [],
      actions: []
    };
  }

  getProjects() {
    axios
      .get(`${url}/projects`)
      .then(res => this.setState({ projects: res.data }))
      .catch(err => console.log(err));
    console.log(this.state.projects);
  }

  getActions() {
    axios
      .get(`${url}/actions`)
      .then(res => this.setState({ actions: res.data }))
      .catch(err => console.log(err));
    console.log(this.state.actions);
  }

  componentDidMount() {
    this.getProjects();
    this.getActions();
  }

  render() {
    return (
      <div className="App">
        <ProjectsList projects={this.state.projects} />
        <ActionsList actions={this.state.actions} />
      </div>
    );
  }
}

export default App;
