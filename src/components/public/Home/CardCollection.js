import React from 'react';

export default function CardCollection({image_url, image_alt, title, collection}) {
    return (
        <React.Fragment>
            <div className="overflow-hidden z-auto  relative justify-end  cursor-pointer capitalize flex flex-col rounded-md bg-red-500 w-72 h-96  object-cover">
                <img src={image_url} alt={image_alt} />
                <div className="absolute p-3 flex flex-col">
                    <span>{title}</span>
                    <span className="font-semibold capitalize" >{collection}</span>
                </div>
            </div>
        </React.Fragment>
    );
}
