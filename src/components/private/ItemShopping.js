import { Menu } from '@headlessui/react';
import React from 'react';

export default function ItemShopping({ image_url, title, description, price}) {
    return (
        <Menu.Item>
            <div className="flex items-center justify-between gap-2 p-5" >
                <img src={image_url} alt={title} className="rounded-full h-10 object-cover  w-10  " />
                <div className="flex items-center justify-center">
                    <div className="flex justify-center flex-col gap-1" >
                        <b>{title}</b>
                        <span className="shortenText" title={description} >
                            {description}
                        </span>
                    </div>
                    <div className="text-gray-800">${price}</div>
                </div>
                <button className="hover:bg-green-500 border transition capitalize px-2 h-8 hover:text-white  rounded-lg text-gray-800" >buy now</button>
                <button className="hover:bg-red-500 transition border capitalize px-2 h-8 hover:text-white rounded-lg text-gray-800" >delete</button>
            </div>
        </Menu.Item>
    );
}
