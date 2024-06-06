import React from "react";
import { useRef } from "react";
import Input from "../Input/Input";
import Modal from "../Modal/Modal";

export default function NewProject({ onAdd, onCancel }) {
    const title = useRef();
    const description = useRef();
    const dueDate = useRef();
    const modal = useRef();

    function handleSave() {
        const enteredTitle = title.current.value;
        const enteredDescription = description.current.value;
        const enteredDueDate = dueDate.current.value;

        if (
            enteredTitle.trim() === "" &&
            enteredDescription.trim() === "" &&
            enteredDueDate.trim() === ""
        ) {
            modal.current.idoAction();
            return;
        }

        onAdd({
            title: enteredTitle,
            description: enteredDescription,
            dueDate: enteredDueDate,
        });
    }

    return (
        <>
            <Modal ref={modal} btnCaption="Close">
                <h2>Invalid Input</h2>
                <p className="text-stone-400 md-4" >Oops ... looks like you forgot to enter a value.</p>
                <p className="text-stone-400 md-4" >Please make sure you provide a valid value for the input field.</p>
            </Modal>
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
                        <button onClick={onCancel} className="bg-stone-800 text-stone-50 hover:bg-stone-950 px-6 py-2 rounded-md">
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
        </>
    );
}
