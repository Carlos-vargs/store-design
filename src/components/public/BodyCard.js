import React from 'react';
import { PhotographIcon } from '@heroicons/react/solid'

export default function BodyCard({ title, description, price, image_url, image_alt, priceTwo, children }) {
    return (
        <React.Fragment>
            <div className="flex flex-col w-80 justify-center cursor-pointer">
                <div className="flex flex-col w-80 h-96 border rounded-lg overflow-hidden relative" >
                    {
                        image_url
                            ? <img className="w-full h-full object-cover bg-gray-100" src={image_url} alt={image_alt} />
                            : <div className="w-full h-full bg-gray-100 flex items-center justify-center text-gray-400 ">
                                <PhotographIcon className="w-12 h-12" />
                                upload an image
                            </div>
                    }
                    <b className="text-white border-text absolute right-3.5 text-2xl bottom-3.5">{priceTwo && `$ ${priceTwo}`}</b>
                </div>
                <div className="mt-4 capitalize flex flex-col gap-3">
                    <span className="text-gray-600" >{title}</span>
                    <span className="text-gray-400 shortenText" title={description} >{description}</span>
                    <b className="text-gray-700" >{price && `$ ${price}`}</b>
                </div>
                {children}
            </div>
        </React.Fragment>
    );
}