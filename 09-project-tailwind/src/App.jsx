import { useState } from "react";

import EmptyProjectPage from "./components/emptyProjectPage.jsx";
import NewProject from "./components/NewProject.jsx";
import Sidebar from "./components/Sidebar.jsx";
import SelectedProject from "./components/SelectedProject.jsx";

function App() {
  const [projectsState, setProjectsStates] = useState({
    selectedProjectId: undefined,
    projects: [],
    tasks: [],
  });

  function handleAddTask(text) {
    setProjectsStates(previousState => {
      const taskId = Math.random();

      const newTask = {
        projectId: previousState.selectedProjectId,
        text: text,
        id: taskId,
      }

      return {
        ...previousState,
        tasks: [...previousState.tasks, newTask] //copy the old array and after add the new one
      }
    })
  }

  function handleDeleteTask() {

  }

  function handleSelectProject(id) {
    setProjectsStates(previousState => {
      return {
        ...previousState,
        selectedProjectId: id,
      }
    });
  }

  function handleStartAddProject() {
    setProjectsStates(previousState => {
      return {
        ...previousState,
        selectedProjectId: null,
      }
    });
  }

  function handleCancelAddProject() {
    setProjectsStates(previousState => {
      return {
        ...previousState,
        selectedProjectId: undefined,
      }
    });
  }

  function handleAddProject(projectData) {
    setProjectsStates(previousState => {
      const generatedProjectId = Math.random();

      const newProject = {
        ...projectData,
        id: generatedProjectId,
      }

      return {
        // ...previousState,
        selectedProjectId: undefined,
        projects: [...previousState.projects, newProject] //copy the old array and after add the new one
      }
    })
  }

  function handleDeleteProject() {
    setProjectsStates(previousState => {
      return {
        ...previousState,
        selectedProjectId: undefined,
        projects: previousState.projects.filter((project) => project.id !== previousState.selectedProjectId),
      }
    });
  }

  /* Helper functions */

  const selectedProject = projectsState.projects.find(project => project.id === projectsState.selectedProjectId);

  // Render condiction
  console.log('projectsState: ', projectsState);
  let content = (
    <SelectedProject 
      project={selectedProject} 
      onDelete={handleDeleteProject}
      onAddTask={handleAddTask}
      onDeleteTask={handleDeleteTask}
      tasks={projectsState.tasks}
    />
  );

   if (projectsState.selectedProjectId === null) {
     content = <NewProject onAddProject={handleAddProject} onCancelProject={handleCancelAddProject} />
   } else if (projectsState.selectedProjectId === undefined) {
     content = <EmptyProjectPage onStartAddProject={handleStartAddProject} />
   }

  return (
    <main className="h-screen my-8 flex gap-8">
      <Sidebar 
        onStartAddProject={handleStartAddProject}
        projectsList={projectsState.projects}
        onSelectProject={handleSelectProject}
      />
      {content}
    </main>
  );
}

export default App;
