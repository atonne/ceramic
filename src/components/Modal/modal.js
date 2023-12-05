import React, { useState } from 'react';

const Modal = ({ isOpen, onClose, children }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 overflow-auto bg-black bg-opacity-90 flex items-center justify-center">
            <div className=" p-8 rounded-lg max-w-md">{children}</div>
        </div>
    );
};

export default Modal;
