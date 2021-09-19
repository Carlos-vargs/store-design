import React,{ Fragment } from 'react';
import { Menu, Transition } from '@headlessui/react'
import { ShoppingBagIcon } from '@heroicons/react/outline'
import { Link } from 'react-router-dom';
import '../../pages/styles/app.css'

export default function MenuShopping({ currentProduct }) {
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
                                <span className="ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800">
                                    {
                                        currentProduct
                                            ? currentProduct.propertyIsEnumerable.length
                                            : 0
                                    }
                                </span>
                                <span className="sr-only">items in the shopping car, view bag</span>
                            </Link>
                        </Menu.Button>
                    </div>
                    {currentProduct &&

                        <Transition
                            as={Fragment}
                            enter="transition ease-out duration-100"
                            enterFrom="transform opacity-0 scale-95"
                            enterTo="transform opacity-100 scale-100"
                            leave="transition ease-in duration-75"
                            leaveFrom="transform opacity-100 scale-100"
                            leaveTo="transform opacity-0 scale-95"
                        >

                            <Menu.Items className="  z-10 absolute right-0 w-max mt-2 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                <div className="p-1 ">
                                    <Menu.Item>
                                        <div className="flex items-center justify-between gap-2 p-4" >
                                            <img src={currentProduct.image_url} alt={currentProduct.title} className="rounded-full h-10 object-cover  w-10  " />
                                            <div className="flex items-center justidy-center">
                                                <div className="flex justify-center flex-col gap-1" >
                                                    <b>{currentProduct.title}</b>
                                                    <p className="shortenText" title={currentProduct.description} >
                                                        {currentProduct.description}
                                                    </p>
                                                </div>
                                                <div className="text-gray-800">${currentProduct.price}</div>
                                            </div>
                                            <button className="hover:bg-green-500 border transition capitalize px-2 h-8 hover:text-white  rounded-lg text-gray-800" >buy now</button>
                                            <button className="hover:bg-red-500 transition border capitalize px-2 h-8 hover:text-white rounded-lg text-gray-800" >delete</button>
                                        </div>
                                    </Menu.Item>
                                </div>
                            </Menu.Items>
                        </Transition>
                    }
                </Menu>
            </div>
        </Fragment>
    )
}
