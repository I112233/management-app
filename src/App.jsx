import React, { useState } from "react";
import ProjectsSideBar from "./Components/ProjectsSideBar/ProjectsSideBar";
import NoProject from "./Components/NoProject/NoProject";
import NewProject from "./Components/NewProject/NewProject";

export default function App() {
  const [projectState, setProjectState] = useState({
    selectedProjectId: undefined,
    projects: []
  });

  function handleStartAddProject() {
    setProjectState(prevState => {
      return {
        ...prevState,
        selectedProjectId: null,
      }
    })
  }

  let content;

  if (projectState.selectedProjectId === null) {
    content = <NewProject />
  } else if (projectState.selectedProjectId === undefined) {
    content = <NoProject onStartAddProject={handleStartAddProject} />
  }

  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectsSideBar onStartAddProject={handleStartAddProject} />
      {content}
    </main>
  )
}