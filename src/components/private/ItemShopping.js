import { XCircleIcon } from '@heroicons/react/solid';
import React from 'react';

export default function ItemShopping({ image_url, title, description, price, id, count }) {

    const productsInTheBag = JSON.parse(localStorage.getItem('bag'))

    if (!productsInTheBag) localStorage.setItem('bag', JSON.stringify([]))

    function removeProductFromTheBag(currentId) {

        productsInTheBag.forEach((e, i) => {

            let count = 0

            if (e.product.id === currentId) {

                productsInTheBag.splice(i, 1)
                localStorage.setItem('bag', JSON.stringify(productsInTheBag))

                setTimeout(() => {
                    window.location.reload(true)
                }, 100);

            }


        });

    }

    return (
        <div className="flex items-center justify-between gap-2 p-5" >
            <img src={image_url} alt={title} className="rounded-full h-10 object-cover w-10" />
            <div className="flex items-center justify-center">
                <div className="flex justify-center flex-col gap-1" >
                    <b>{title}</b>
                    <span className="shortenText" title={description} >
                        {description}
                    </span>
                </div>
                <div className="text-gray-800">${price}</div>
            </div>
            {/* <input
                className="w-12 rounded-lg pl-4 text-base  border border-gray-300 focus:outline-none "
                type='number'
                name='count'
                value={count}
            /> */}
            <XCircleIcon
                className="w-8 h-8 text-red-500"
                onClick={() => removeProductFromTheBag(id)}
            />
        </div>
    );
}
