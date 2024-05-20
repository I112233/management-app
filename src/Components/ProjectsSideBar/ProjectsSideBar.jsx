import React from 'react'
import Button from '../Button/Button'

export default function ProjectsSideBar({ onStartAddProject }) {
    return (
        <aside className='w-1/3 px-8 py-16 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl mt-8'>
            <h2 className=' mb-8 font-bold-uppercase md:text-xl text-stone-200 '>Your Projects</h2>
            <div><Button onClick={onStartAddProject}>+ Add Project</Button></div>
            <ul></ul>
        </aside>
    )
}
