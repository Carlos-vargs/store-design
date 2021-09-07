import React from 'react';
import { Link, } from 'react-router-dom';
import ProductCard from '../components/ProductCard';

const data = {
    //temporary product for testing only
    //the real products come from the api-store
    products: [
        {
            id: 'a9be9ef-ef49-4b6b-9715-5936fe90e',
            title: "Shoes",
            description: "Nikes shoes",
            price: "50",
            image_url: "https://images.unsplash.com/photo-1491553895911-0055eca6402d?,ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
            image_alt: "nike shoes",
        },
        {
            id: 'a9be9ef-ef49-dde433-93e3r1tgbce95320e',
            title: "Shoes",
            description: "Vans shoes",
            price: "44",
            image_url: "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=343&q=80",
            image_alt: "vans shoes",
        },
        {
            id: 'a9be9ef-ef49-4b6b-9716fe95320e',
            title: "Shoes",
            description: "Nikes shoes",
            price: "65",
            image_url: "https://images.unsplash.com/photo-1543508282-6319a3e2621f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=358&q=80",
            image_alt: "nike shoes",
        },
        {
            id: 'a9be9ef-ef49-dde433-93e3r15bce95320e',
            title: "Shoes",
            description: "Nike shoes",
            price: "30",
            image_url: "https://images.unsplash.com/photo-1515955656352-a1fa3ffcd111?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
            image_alt: "nike shoes",
        },
        {
            id: 'a9be9e-9715-595320e',
            title: "Shoes",
            description: "Nikes shoes",
            price: "50",
            image_url: "https://images.unsplash.com/photo-1491553895911-0055eca6402d?,ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
            image_alt: "nike shoes",
        },
        {
            id: 'a9b-93e3ggbce95320e',
            title: "Shoes",
            description: "Vans shoes",
            price: "44",
            image_url: "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=343&q=80",
            image_alt: "vans shoes",
        },
        {
            id: 'a9-9715',
            title: "Shoes",
            description: "Nikes shoes",
            price: "65",
            image_url: "https://images.unsplash.com/photo-1543508282-6319a3e2621f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=358&q=80",
            image_alt: "nike shoes",
        },
        {
            id: 'a9be9ef-efe433-93e3r15',
            title: "Shoes",
            description: "Nike shoes",
            price: "30",
            image_url: "https://images.unsplash.com/photo-1515955656352-a1fa3ffcd111?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
            image_alt: "nike shoes",
        },
    ],
}

export default function Category() {
    return (
        <div className="flex px-10 justify-center flex-col bg-gray-50" >
            <div className="flex flex-col items-center justify-center gap-4 py-20 " >
                <h1 className="text-4xl font-extrabold" >New Arrivals</h1>
                <span className="text-gray-500" >Thoughtfully designed objects for the workspace, home, and travel.</span>
                {/* this link is just for the user that are authenticated, right now itsn't finished  */}
                <Link to="/create/product" className="capitalize bg-blue-600 py-2 w-40 rounded-lg flex items-center justify-center text-white" >create new product </Link>
            </div>
            <div className="border-t flex justify-between gap-8 flex-wrap py-14" >
                {data.products.map((card) => (
                    <ProductCard
                        key={card.id}
                        id={card.id}
                        title={card.title}
                        description={card.description}
                        price={card.price}
                        image_url={card.image_url}
                        image_alt={card.image_alt}
                    />
                ))}
            </div>
        </div>
    );
}

