import React from "react";
import notebook from "../../assets/notebook.jpg"
import Button from "../Button/Button";

export default function NoProject({ onStartAddProject }) {
    return (
        <div className="mt-24 text-center w-2/3">
            <img className="w-16 h-16 object-contain mx-auto" src={notebook} alt="an empty notebook" />
            <h2 className="text-xl font-bold text-stone-500 my-4">No Project Selected Yet</h2>
            <p>Select a project or get started with a new one</p>
            <p className="mt-8">
                <Button onClick={onStartAddProject}>Create new project</Button>
            </p>
        </div>
    )
}