// src/components/Input.js
import React from 'react';

const Input = ({ value, onChange }) => {
    return (
        <input
            type="text"
            value={value}
            onChange={onChange}
            placeholder="Digite seu código"
            className="mt-1 block w-full rounded-md border border-gray-300 p-2 shadow-sm focus:border-green-500 focus:ring focus:ring-green-500 focus:ring-opacity-50"
        />
    );
};

export default Input;
