import React from 'react';

export default function ButtonLog({ type, text, value }) {
    return (
        <button type={type} value={value} className="w-full flex justify-center bg-gradient-to-r from-indigo-500 to-blue-600  hover:bg-gradient-to-l hover:from-blue-500 hover:to-indigo-600 text-gray-100 p-4  rounded-full tracking-wide font-semibold  shadow-lg cursor-pointer transition ease-in duration-500">
            {text}
        </button>
    );
}
