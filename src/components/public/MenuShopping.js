import React, { Fragment, useState } from 'react';
import { Dialog, Transition } from '@headlessui/react'
import { ShoppingBagIcon, ShoppingCartIcon } from '@heroicons/react/outline'
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

    const data = productsInTheBag.filter(o => hash[o.product.id] ? false : hash[o.product.id] = true)

    if (!productsInTheBag) {
        localStorage.setItem('bag', JSON.stringify([]))
    }

    const prices = []

    productsInTheBag.forEach(e => prices.push(e.product.price))


    let [isOpen, setIsOpen] = useState(false)

    function closeModal() {
        setIsOpen(false)
    }

    function openModal() {
        setIsOpen(true)
    }


    // const allE = []

    // let count = 0
    // productsInTheBag.forEach((e, i) => {
    //     if (e.id === productsInTheBag[i].id) {
    //         allE.push({
    //             product: e,
    //             counter: count++
    //         });
    //     }
    // });

    // console.log(allE);

    return (
        <Fragment>
            <div className="text-right">
                <button className="group -m-2 p-2 flex items-center" onClick={openModal}>
                    <ShoppingBagIcon
                        className="flex-shrink-0 h-6 w-6 text-gray-400 group-hover:text-gray-500"
                        aria-hidden="true"
                    />
                    <span className="ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800">{productsInTheBag.length}</span>
                    <span className="sr-only">items in the shopping car, view bag</span>
                </button>
                {productsInTheBag && <Transition appear show={isOpen} as={Fragment}>
                    <Dialog
                        as="div"
                        className="fixed inset-0 z-10 overflow-y-auto"
                        onClose={closeModal}
                    >
                        <div className="min-h-screen text-center">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0"
                                enterTo="opacity-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100"
                                leaveTo="opacity-0"
                            >
                                <Dialog.Overlay className="fixed inset-0" />
                            </Transition.Child>
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95"
                            >
                                <div className={`h-72 overflow-auto scrollbarHidden flex flex-col justify-${data.length !== 0 ? 'between' : 'center'} z-10 absolute right-0 w-max mt-28 mr-9 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none`} >
                                    {data.map(item => (
                                        <ItemShopping
                                            image_url={item.product.image_url}
                                            title={item.product.title}
                                            description={item.product.description}
                                            price={item.product.price}
                                            id={item.product.id}
                                            count={item.count}
                                            key={`${item.product.id}${Math.random()}`}
                                        />
                                    ))}
                                    {
                                        data.length !== 0
                                            ? <div className="p-5 flex items-center justify-center gap-4">
                                                <span>total ${productsInTheBag.length === 0 ? 0 : prices.reduce((acc, e) => acc + e)} </span>
                                                <button className="hover:bg-green-500 transition border capitalize px-2 h-8 hover:text-white rounded-lg text-gray-800" >buy all</button>
                                                <button className="hover:bg-red-500 transition border capitalize px-2 h-8 hover:text-white rounded-lg text-gray-800" >delete all</button>
                                            </div>
                                            : <div className="flex items-center justify-center flex-col">
                                                <span>You have not selected any products yet</span>
                                                <Link to="/products" className="bg-blue-400 rounded-lg text-white flex items-center justify-center gap-2">
                                                    <span>Find out products </span>
                                                    <ShoppingCartIcon className="w-6 h-6" />
                                                </Link>
                                            </div>
                                    }
                                </div>
                            </Transition.Child>
                        </div>
                    </Dialog>
                </Transition>
                }
            </div>
        </Fragment>
    )
}
