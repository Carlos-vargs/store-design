import { Menu } from '@headlessui/react';
import { XCircleIcon } from '@heroicons/react/solid';
import React from 'react';

export default function ItemShopping({ image_url, title, description, price, id }) {

    const productsInTheBag = JSON.parse(localStorage.getItem('bag'))

    function removeProductFromTheBag(currentId) {

        let count = 0

        productsInTheBag.forEach((e, i) => {


            if (e.id === currentId) {

                count++
                console.log({
                    // product: productsInTheBag[i],
                    index: i,
                    count: count
                });

            }


        });

        // console.log(count);

    }


    // console.log(datos);

    return (
        <Menu.Item>
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
                <XCircleIcon
                    className="w-8 h-8 text-red-500"
                    onClick={() => removeProductFromTheBag(id)}
                />
            </div>
        </Menu.Item>
    );
}
