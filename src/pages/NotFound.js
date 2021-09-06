import React from 'react';
import { Link } from 'react-router-dom';

export default function NotFound() {
    return (
        <div className="flex justify-center items-center flex-col gap-4 p-28" >
            <h1 className="text-5xl	font-bold " >Page not found</h1>
            <Link to="/"  className="bg-blue-700 py-2 px-4  text-white rounded-lg" >
                Go home
            </Link>
        </div>
    );
}
