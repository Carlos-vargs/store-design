import React from 'react';
import { Link, } from 'react-router-dom';

export default function ProductCard({ title, description, price, image_url, image_alt, id }) {
    return (
        <React.Fragment>
            <Link to={`/product/${id}`}>
                <div className="flex flex-col w-80 justify-center">
                    <div className="flex flex-col w-80 h-96 border rounded-lg overflow-hidden" >
                        <img className="w-full h-full object-cover" src={image_url} alt={image_alt} />
                    </div>
                    <div className="mt-4 capitalize flex flex-col gap-3">
                        <span className="text-gray-600" >{title}</span>
                        <span className="text-gray-400 shortenText" >{description}</span>
                        <b className="text-gray-700" >${price}</b>
                    </div>
                </div>
            </Link>
        </React.Fragment>
    );
}