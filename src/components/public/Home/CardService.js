import React from 'react';
import parse from 'html-react-parser'

export default function CardService({ icon, title, paragraph }) {
    return (
        <React.Fragment>
            <div className="flex flex-col items-center justify-center text-center cursor-pointer" >
                <div className="flex items-center justify-center border rounded-full border-gray-200 w-14 h-14">
                    <div className="flex items-center justify-center border rounded-full border-gray-200 w-12 h-12">
                        <div className="flex items-center justify-center border rounded-full border-gray-200 w-10 h-10">
                            <span className="w-10 h-10 text-blue-400 shadows flex items-center justify-center">{parse(icon)}</span>
                        </div>
                    </div>
                </div>
                <b className="text-gray-800 uppercase my-4" >{title}</b>
                <span className="text-gray-400" >{paragraph}</span>
            </div>
        </React.Fragment>
    );
}