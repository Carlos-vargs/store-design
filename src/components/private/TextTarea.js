import React from 'react';

export default function TextTarea({nameValue, rowsValue, placeholderValue, title, onChange, value}) {
    return (
        <label className="block text-sm font-medium text-gray-700">
            <span className="mb-1" >{title}</span>
                <textarea
                    name={nameValue}
                    rows={rowsValue}
                    className="p-2  shadow-sm focus:ring-1 focus:ring-blue-300	 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md"
                    placeholder={placeholderValue}
                    onChange={onChange}
                    value={value}
                    required
                />
        </label>
    );
}