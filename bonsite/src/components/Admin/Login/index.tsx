// src/components/Login.js
import React, { useState } from 'react';
import Input from '../Inputs';
import { Button } from '@headlessui/react';
import { CheckIcon } from '@heroicons/react/24/outline';

const Login = (sandPasswordFunction : Function) => {
    const [code, setCode] = useState('');

    const handleChange = (e) => {
        setCode(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Código enviado: ${code}`);
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="bg-white p-6 rounded-lg shadow-md w-96">
                <h2 className="text-center text-2xl font-semibold">Login</h2>
                <form onSubmit={handleSubmit} className="mt-4">
                    <Input value={code} onChange={handleChange} />
                    <Button
                        onClick={sandPasswordFunction}
                        type="submit"
                        className="mt-4 w-full rounded-md bg-green-600 px-4 py-2 text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
                    >
                        <CheckIcon className="w-5 h-5 inline" aria-hidden="true" /> Entrar
                    </Button>
                </form>
            </div>
        </div>
    );
};

export default Login;
