import React from "react";
import Tasks from "../Tasks/Tasks";

export default function SelectedProject({ project, onDelete, onAddTask, onDeleteTask, tasks }) {
    const formattedDate = new Date(project.dueDate).toLocaleDateString('en-US', {
        year: "numeric",
        month: "short",
        day: "numeric",
    })
    return (
        <div className="w-[35rem] mt-16">
            <header style={{ width: "255px" }} className="pb-4 md-4 border-b-2 border-stone-300">
                <h1 className="text-3xl font-bold text-stone-600 md-2">{project.title}</h1>
                <br />
                <p className="text-stone-600 whitespace-pre-wrap" >{project.description}</p>
                <br />
                <p className="mb-4 text-stone-400" >{formattedDate}</p>
                <button onClick={onDelete} className="text-stone-600" >Delete</button>
            </header>
            <br />
            <Tasks tasks={tasks} onAddTask={onAddTask} onDeleteTask={onDeleteTask} />
        </div>
    )
}