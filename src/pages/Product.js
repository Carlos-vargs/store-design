import React from 'react';
import { Link, useParams } from 'react-router-dom';

export default function Product() {

    const { id } = useParams()

    console.log(id);

    return (
        <React.Fragment>
            <div className="px-10 w-full" >
                <div className="border-t border-b pt-16 grid grid-cols-2 gap-8" >
                    <div className="flex flex-col justify-start">
                        <div className="flex flex-col w-full h-4/6 justify-items-start border rounded-lg overflow-hidden">
                            <img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1491553895911-0055eca6402d?,ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" alt="title product" />
                        </div>
                    </div>
                    <div className="flex flex-col" >
                        <div className="flex flex-col gap-4" >
                            <h1 className="capitalize text-4xl font-extrabold" >Shoes</h1>
                            <h2 className="text-3xl">$40</h2>
                            <span>rate</span>
                            <p className="text-lg text-gray-500	" >Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus rem, illo totam laudantium hic, sint, quod officia voluptates quo accusamus error perspiciatis commodi quos. Architecto odit consequatur maxime minus cupiditate?</p>
                        </div>
                    </div>
                </div>
                <div className="py-16" >
                    <b className="text-2xl text-gray-700 " >Customers also bought</b>
                    <div className="flex flex-wrap gap-7 justify-beetween mt-8">
                        {/* map */}
                        <div className="w-80">
                            <div className="flex flex-col w-80 h-96 border rounded-lg overflow-hidden relative" >
                                <img className="w-full h-full object-cover" src="#" alt="product" />
                                <b className="text-white absolute right-3.5 text-2xl bottom-3.5">$price</b>
                            </div>
                            <div className="mt-4 capitalize flex flex-col gap-1">
                                <span className="text-gray-800 description-paragraph" >title</span>
                                <span className="text-gray-400 description-paragraph" >description</span>
                                <Link to={`/product/1`} className="flex items-center justify-center  w-full bg-gray-100 rounded-lg py-2" >View</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </React.Fragment>
    );
}