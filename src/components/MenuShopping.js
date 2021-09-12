import React from 'react';
import { Menu, Transition } from '@headlessui/react'
import { Fragment } from 'react'
import { ShoppingBagIcon } from '@heroicons/react/outline'
import { Link } from 'react-router-dom';
import '../pages/styles/app.css'

export default function MenuShopping(props) {
    return (
        <div className="text-right">
            <Menu as="div" className="relative inline-block text-left">
                <div>
                    <Menu.Button className="inline-flex justify-center">
                        <Link to="#" className="group -m-2 p-2 flex items-center">
                            <ShoppingBagIcon
                                className="flex-shrink-0 h-6 w-6 text-gray-400 group-hover:text-gray-500"
                                aria-hidden="true"
                            />
                            <span className="ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800">0</span>
                            <span className="sr-only">items in the shopping car, view bag</span>
                        </Link>
                    </Menu.Button>
                </div>
                <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                >
                    <Menu.Items className="absolute right-0 w-max mt-2 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                        <div className="p-1 ">
                            <Menu.Item>
                                <div className="flex items-cemter justify-between gap-2  p-4 border-b" >
                                    <img src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=689&q=80" alt="timepiece" className="rounded-full h-10 object-cover  w-10  " />
                                    <div className="flex items-center justidy-center">
                                        <div className="flex justify-center flex-col gap-1" >
                                            <b>Prodouct title</b>
                                            <p className="shortenText" title=" Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt eos placeat, repudiandae optio beatae velit possimus necessitatibus recusandae rerum animi voluptatum molestias laudantium dolorum voluptatibus sed aut in fugiat quibusdam!" >
                                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt eos placeat, repudiandae optio beatae velit possimus necessitatibus recusandae rerum animi voluptatum molestias laudantium dolorum voluptatibus sed aut in fugiat quibusdam!
                                            </p>
                                        </div>
                                        <div className="text-gray-800">$44.99</div>
                                    </div>
                                    <button className="bg-green-500 capitalize px-3 py-1 rounded-lg text-white" >buy now</button>
                                    <button className="bg-red-500 capitalize px-3 py-1 rounded-lg text-white" >delete</button>
                                </div>
                            </Menu.Item>
                            <Menu.Item>
                                <div className="flex items-cemter justify-between gap-2  p-4 border-b" >
                                    <img src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=689&q=80" alt="timepiece" className="rounded-full h-10 object-cover  w-10  " />
                                    <div className="flex items-center justidy-center">
                                        <div className="flex justify-center flex-col gap-1" >
                                            <b>Prodouct title</b>
                                            <p className="shortenText" title=" Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt eos placeat, repudiandae optio beatae velit possimus necessitatibus recusandae rerum animi voluptatum molestias laudantium dolorum voluptatibus sed aut in fugiat quibusdam!" >
                                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt eos placeat, repudiandae optio beatae velit possimus necessitatibus recusandae rerum animi voluptatum molestias laudantium dolorum voluptatibus sed aut in fugiat quibusdam!
                                            </p>
                                        </div>
                                        <div className="text-gray-800">$44.99</div>
                                    </div>
                                    <button className="bg-green-500 capitalize px-3 py-1 rounded-lg text-white" >buy now</button>
                                    <button className="bg-red-500 capitalize px-3 py-1 rounded-lg text-white" >delete</button>
                                </div>
                            </Menu.Item>
                            <Menu.Item>
                                <div className="flex items-cemter justify-between gap-2  p-4 border-b" >
                                    <img src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=689&q=80" alt="timepiece" className="rounded-full h-10 object-cover  w-10  " />
                                    <div className="flex items-center justidy-center">
                                        <div className="flex justify-center flex-col gap-1" >
                                            <b>Prodouct title</b>
                                            <p className="shortenText" title=" Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt eos placeat, repudiandae optio beatae velit possimus necessitatibus recusandae rerum animi voluptatum molestias laudantium dolorum voluptatibus sed aut in fugiat quibusdam!" >
                                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt eos placeat, repudiandae optio beatae velit possimus necessitatibus recusandae rerum animi voluptatum molestias laudantium dolorum voluptatibus sed aut in fugiat quibusdam!
                                            </p>
                                        </div>
                                        <div className="text-gray-800">$44.99</div>
                                    </div>
                                    <button className="bg-green-500 capitalize px-3 py-1 rounded-lg text-white" >buy now</button>
                                    <button className="bg-red-500 capitalize px-3 py-1 rounded-lg text-white" >delete</button>
                                </div>
                            </Menu.Item>
                            <Menu.Item>
                                <div className="p-4 flex items-center justify-around" >
                                <button className="bg-green-500 capitalize px-3 py-1 rounded-lg text-white" >buy all</button>
                                <button className="bg-red-500 capitalize px-3 py-1 rounded-lg text-white" >delete all</button>
                                <b>total = $400.50c</b>
                                </div>
                            </Menu.Item>
                        </div>
                    </Menu.Items>
                </Transition>
            </Menu>
        </div>
    )
}
