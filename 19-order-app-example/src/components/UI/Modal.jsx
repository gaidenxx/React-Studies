import { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom'; // use portal to put the dialog html modal inside the modal id tag DOM in index.html

export default function Modal({children, open, onClose, className = '' }) {
    const dialog = useRef();

    useEffect(() => {
        const modal = dialog.current;

        if(open) {
            modal.showModal();
        } 
        return () => modal.close();
    }, [open]);

    return createPortal(
        <dialog ref={dialog} className={`modal ${className}`} onClose={onClose}>
            {children}
        </dialog>
    , document.getElementById('modal'));
}