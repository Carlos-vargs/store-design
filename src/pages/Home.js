import React from 'react';
import { Link } from 'react-router-dom';
import {  ArrowRightIcon, } from '@heroicons/react/outline';

import CardCollection from '../components/Home/CardCollection';
import './styles/app.css'

const data = {
    categories: [
        {
            id: 'fe658605-4cfa-4a99-a845-d66fbcd1c0d7',
            title: 'shop the collection',
            collection: 'womens',
            image_url: 'https://images.unsplash.com/photo-1617922001439-4a2e6562f328?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80',
            image_alt: 'Womens collection',
        },
        {
            id: 'fccd970b-165f-4d9a-a6f5-ab15716e0ee9',
            title: 'shop the collection',
            collection: 'mens',
            image_url: 'https://images.unsplash.com/photo-1520975916090-3105956dac38?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80',
            image_alt: 'Mens collection',
        },
        {
            id: 'ebf483f1-13db-42c4-add5-f515800ebd6b',
            title: 'shop the collection',
            collection: 'desk accessories',
            image_url: 'https://images.unsplash.com/photo-1474354503580-955e733d2a7d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80',
            image_alt: 'Desk accessories collection',
        },
    ]
}

export default function Home() {
    return (
        <React.Fragment>
            <div className="border-t">
                <div className="bg-white w-full">
                    <div className="storeImage w-full object-cover	bg-fixed bg-no-repeat flex-col flex items-center" >
                        <h1 className="text-white font-bold	capitalize text-6xl mt-20" >mid-season sale</h1>
                        <Link to="/products" className="bg-blue-700 w-40 rounded-md mt-4 p-2.5 flex justify-center text-white" >shop collection</Link>
                        <div className="flex items-center justify-center gap-10 mt-10 text-white " >
                            {data.categories.map((card) => (
                                <CardCollection
                                    key={card.id}
                                    title={card.title}
                                    collection={card.collection}
                                    image_url={card.image_url}
                                    image_alt={card.image_alt}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            <div className="mt-72 px-9 pb-36">
                <div className="flex justify-between items-center" >
                    <h2 className="font-extrabold text-2xl text-gray-800 capitalize" >trending products</h2>
                    <Link to="/products" className="text-blue-800  flex items-center gap-1 " >
                        <span>Shop the collection</span>
                        <ArrowRightIcon className="w-4 h-4" />
                    </Link>
                </div>
                <div className="flex items-center justify-center gap-10 mt-6" >
                    <Link to="/product/:id">
                        <div className="flex flex-col w-80 justify-center">
                            <div className="flex flex-col w-80 h-96 border rounded-lg overflow-hidden" >
                                <img className="w-full h-full object-cover" src="#" alt='image product' />
                            </div>
                            <div className="mt-4 capitalize flex flex-col gap-3">
                                <span className="text-gray-600" >title</span>
                                <span className="text-gray-400 description-paragraph" >description</span>
                                <b className="text-gray-700" >price</b>
                            </div>
                        </div>
                    </Link>

                </div>
            </div>
        </React.Fragment>
    );
}
