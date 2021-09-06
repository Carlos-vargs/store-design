import React from 'react';

export default function CardService({ icon, title, paragraph }) {
    return (
        <React.Fragment>
            <div className="flex flex-col items-center justify-center text-center" >
                <span>{icon}</span>
                <b className="text-gray-800 uppercase my-4" >{title}</b>
                <span className="text-gray-400" >{paragraph}</span>
            </div>
        </React.Fragment>
    );
}