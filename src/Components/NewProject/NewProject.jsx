import React from "react";
import Input from "../Input/Input";
import { useRef } from "react";

export default function NewProject({ onAdd }) {
    const title = useRef();
    const description = useRef();
    const dueDate = useRef();

    function handleSave() {
        const enteredTitle = title.current.value;
        const enteredDescription = description.current.value;
        const enteredDueDate = dueDate.current.value;

        if (
            enteredTitle.trim() === "" &&
            enteredDescription.trim() === "" &&
            enteredDueDate.trim() === ""
        ) {
            // error
        }

        onAdd({
            title: enteredTitle,
            description: enteredDescription,
            dueDate: enteredDueDate,
        });
    }

    return (
        <div className="w-[35rem] mt-16">
            <menu className="flex item-center justify-end gap-4 my-4">
                <li>
                    <button
                        onClick={handleSave}
                        className="text-stone-800 hover:text-stone-950"
                    >
                        Save
                    </button>
                </li>
                <li>
                    <button className="bg-stone-800 text-stone-50 hover:bg-stone-950 px-6 py-2 rounded-md">
                        Cancel
                    </button>
                </li>
            </menu>
            <div>
                <Input ref={title} label="Title" />
                <Input ref={description} label="Description" textarea />
                <Input type="date" ref={dueDate} label="Due Date" />
            </div>
        </div>
    );
}
