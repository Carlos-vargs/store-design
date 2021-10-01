import React from 'react';

export default function Input({ name, placeholder, type, title, autocomplete, value, onChange }) {

    return (
        <div className="relative">
            <label className="ml-3 text-sm font-bold text-gray-700 tracking-wide">{title}
                <input
                    className="w-full text-base px-4 py-2 border border-gray-300 focus:outline-none rounded-2xl"
                    type={type}
                    placeholder={placeholder}
                    name={name}
                    autoComplete={autocomplete}
                    value={value}
                    onChange={onChange}
                    required
                />
            </label>
        </div>
    );
}