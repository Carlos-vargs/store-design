import React from 'react';
import { Link } from 'react-router-dom';

export default function LinkForms({title, title_url ,url}) {
    return (
        <span className="flex flex-col items-center justify-center mt-10 text-center text-md text-gray-500">
            <span>{title}</span>
            <Link to={url} className="text-indigo-400 hover:text-blue-500 no-underline hover:underline cursor-pointer transition ease-in duration-300">{title_url}</Link>
        </span>
    );
}