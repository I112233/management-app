import React, { useState } from "react";
import ProjectsSideBar from "./Components/ProjectsSideBar/ProjectsSideBar";
import NoProject from "./Components/NoProject/NoProject";
import NewProject from "./Components/NewProject/NewProject";

export default function App() {
  const [projectState, setProjectState] = useState({
    selectedProjectId: undefined,
    projects: []
  });

  function handleSelectedProject(id) {
    setProjectState(prevState => {
      return {
        ...prevState,
        selectedProjectId: id,
      }
    })
  }

  function handleStartAddProject() {
    setProjectState(prevState => {
      return {
        ...prevState,
        selectedProjectId: null,
      }
    })
  }

  function handleCancelProject() {
    setProjectState(prevState => {
      return {
        ...prevState,
        selectedProjectId: undefined,
      }
    })
  }

  function handleAddProject(projectData) {
    setProjectState(prevState => {

      const projectId = Math.random();
      const newProject = {
        ...projectData,
        id: projectId
      }
      return {
        ...prevState,
        selectedProjectId: undefined,
        projects: [...prevState.projects, newProject]
      }
    })
  }

  let content;

  if (projectState.selectedProjectId === null) {
    content = <NewProject onCancel={handleCancelProject} onAdd={handleAddProject} />
  } else if (projectState.selectedProjectId === undefined) {
    content = <NoProject onStartAddProject={handleStartAddProject} />
  }

  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectsSideBar onSelectedProject={handleSelectedProject} projects={projectState.projects} onStartAddProject={handleStartAddProject} />
      {content}
    </main>
  )
}