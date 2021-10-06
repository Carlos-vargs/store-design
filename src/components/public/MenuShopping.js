import React, { Fragment, useEffect } from 'react';
import { Menu, Transition } from '@headlessui/react'
import { ShoppingBagIcon } from '@heroicons/react/outline'
import { Link } from 'react-router-dom';
import '../../pages/styles/app.css'
import ItemShopping from '../private/ItemShopping';

// const uniqueId = []

// productsInTheBag.forEach(e => uniqueId.push(e.id));

// const result = uniqueId.filter((item, index) => {
//     return uniqueId.indexOf(item) === index;
// })

// console.log(result);

// console.log(addAllProducts);

export default function MenuShopping() {

    const productsInTheBag = JSON.parse(localStorage.getItem('bag'))

    if (!productsInTheBag) {
        localStorage.setItem('bag', JSON.stringify([]))
    }

    let hash = {}

    const data = productsInTheBag.filter(o => hash[o.id] ? false : hash[o.id] = true)


    if (!productsInTheBag) {
        localStorage.setItem('bag', JSON.stringify([]))
    }

    const prices = []

    productsInTheBag.forEach(e => prices.push(e.price))

    const allE = []

    let count = 0
    productsInTheBag.forEach((e, i) => {
        if (e.id === productsInTheBag[i].id) {
            allE.push({
                product: e,
                counter: count++
            });   
           }
    });

    // console.log(allE);

    return (
        <Fragment>
            <div className="text-right">
                <Menu as="div" className="relative inline-block text-left">
                    <div>
                        <Menu.Button className="inline-flex justify-center">
                            <Link to="#" className="group -m-2 p-2 flex items-center">
                                <ShoppingBagIcon
                                    className="flex-shrink-0 h-6 w-6 text-gray-400 group-hover:text-gray-500"
                                    aria-hidden="true"
                                />
                                <span className="ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800">{productsInTheBag.length}</span>
                                <span className="sr-only">items in the shopping car, view bag</span>
                            </Link>
                        </Menu.Button>
                    </div>
                    {productsInTheBag &&

                        <Transition
                            as={Fragment}
                            enter="transition ease-out duration-100"
                            enterFrom="transform opacity-0 scale-95"
                            enterTo="transform opacity-100 scale-100"
                            leave="transition ease-in duration-75"
                            leaveFrom="transform opacity-100 scale-100"
                            leaveTo="transform opacity-0 scale-95"
                        >

                            <Menu.Items className=" h-72 overflow-auto scrollbarHidden flex flex-col justify-between z-10 absolute right-0 w-max mt-2 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                {data.map(item => (
                                    <ItemShopping
                                        image_url={item.image_url}
                                        title={item.title}
                                        description={item.description}
                                        price={item.price}
                                        id={item.id}
                                        key={`${item.id}${Math.random()}`}
                                    />
                                ))}
                                <div className="p-5 flex items-center justify-center gap-4">
                                    <span>total ${productsInTheBag.length === 0 ? 0 : prices.reduce((acc, e) => acc + e)} </span>
                                    <button className="hover:bg-green-500 transition border capitalize px-2 h-8 hover:text-white rounded-lg text-gray-800" >buy all</button>
                                    <button className="hover:bg-red-500 transition border capitalize px-2 h-8 hover:text-white rounded-lg text-gray-800" >delete all</button>
                                </div>
                            </Menu.Items>
                        </Transition>
                    }
                </Menu>
            </div>
        </Fragment>
    )
}
