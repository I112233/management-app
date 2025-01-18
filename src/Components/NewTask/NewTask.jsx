import React, { useState } from 'react'

export default function NewTask({ onAddTask, onDeleteTask }) {

    const [enteredTask, setEnteredTask] = useState();

    function handleChange(event) {
        setEnteredTask(event.target.value)
    }

    function handleClick() {
        if (enteredTask.trim() === "") {
            return
        }
        onAddTask(enteredTask)
        setEnteredTask("")
    }

    return (
        <div >
            <input type="text" className='w-64 px-2 py-1 rounded-md bg-stone-200' onChange={handleChange} value={enteredTask} />
            <br /><br />
            <button onClick={handleClick} className='text-stone-700 hover:text-stone-950' >Add Task</button>
        </div>
    )
}
