import { ShoppingBagIcon } from '@heroicons/react/outline';
import React from 'react';

export default function NoProductsFound() {
    return (
        <div className="flex items-center justify-center py-14 border-t" >

            <div className="bg-gray-200 h-72 w-72 rounded-full flex items-center justify-center p-20">
                <ShoppingBagIcon
                    className="h-52 w-52 text-gray-400 group-hover:text-gray-500"
                    aria-hidden="true"
                />

            </div>
            <div className="flex flex-col items-center justify-center" >
                <b  >Sorry at the moment there are no products available. </b>

                if you want to add new products you will need to register

            </div>
        </div>
    );
}
