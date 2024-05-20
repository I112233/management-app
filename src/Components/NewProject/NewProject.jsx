import React from 'react'

export default function NewProject() {
    return (
        <div>
            <menu>
                <li><button>Save</button></li>
                <li><button>Cancel</button></li>
            </menu>
            <div>
                <p>
                    <label>Title</label>
                    <input type="text" />
                </p>
                <p>
                    <label>Description</label>
                    <textarea />
                </p>
                <p>
                    <label>Title</label>
                    <input type="text" />
                </p>
            </div>
        </div>
    )
}
