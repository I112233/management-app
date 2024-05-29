import React, { forwardRef, useImperativeHandle, useRef } from "react";
import { createPortal } from "react-dom";
import Button from "../Button/Button";

const Modal = forwardRef(function Modal({ children, btnCaption }, ref) {
    const dialog = useRef()
    useImperativeHandle(ref, () => {
        return {
            idoAction() {
                dialog.current.showModal()
            }
        }
    })

    return createPortal(
        <dialog className="backdrop:bg-stone-900/90 p-4 rounded-md shadow-md" ref={dialog}>
            {children}
            <form className="mt-4 text-right" method="dialog"><Button>{btnCaption}</Button></form>
        </dialog>,
        document.getElementById("modal-root")
    );
})

export default Modal;