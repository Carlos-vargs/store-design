import React from 'react';

export default function InputFile({title, name, type, value, onChange}) {
    return (
        <label className="block text-sm font-medium text-gray-700">
            <span>{title}</span>
            <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                <div className="space-y-1 text-center">

                    <div className="flex text-sm text-gray-600">
                        <label
                            className="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
                        >
                            <span>Upload a file</span>
                            <input name={name} type={type} className="sr-only" value={value} onChange={onChange}/>
                        </label>
                        <p className="pl-1">or drag and drop</p>
                    </div>
                    <p className="text-xs text-gray-500">PNG, JPG, GIF up to 10MB</p>
                </div>
            </div>
        </label>
    );
}