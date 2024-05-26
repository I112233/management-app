import React, { Children } from 'react'

export default function Modal({ children }) {
    return (
        <dialog>
            {children}
        </dialog>
    )
}

