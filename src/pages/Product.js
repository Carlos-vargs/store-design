import React from 'react';
import { useParams } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import { HeartIcon } from '@heroicons/react/solid'
import './styles/app.css'

const data = {
    products: [
        {
            id: 'a9be9ef-ef49-97',
            title: "Shoes",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus voluptatum nisi maxime obcaecati impedit? Ratione error eum qui quidem? Veniam accusamus ea repudiandae itaque, explicabo quidem perspiciatis. Culpa, asperiores deserunt.",
            price: "50",
            image_url: "https://images.unsplash.com/photo-1491553895911-0055eca6402d?,ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
            image_alt: "nike shoes",
        },
        {
            id: 'a9be9e',
            title: "Shoes",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus voluptatum nisi maxime obcaecati impedit? Ratione error eum qui quidem? Veniam accusamus ea repudiandae itaque, explicabo quidem perspiciatis. Culpa, asperiores deserunt.",
            price: "44",
            image_url: "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
            image_alt: "vans shoes",
        },
        {
            id: 'a9-9',
            title: "Shoes",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus voluptatum nisi maxime obcaecati impedit? Ratione error eum qui quidem? Veniam accusamus ea repudiandae itaque, explicabo quidem perspiciatis. Culpa, asperiores deserunt.",
            price: "65",
            image_url: "https://images.unsplash.com/photo-1543508282-6319a3e2621f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=750&q=80",
            image_alt: "nike shoes",
        },
        {
            id: 'a9be9ef-ef',
            title: "Shoes",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus voluptatum nisi maxime obcaecati impedit? Ratione error eum qui quidem? Veniam accusamus ea repudiandae itaque, explicabo quidem perspiciatis. Culpa, asperiores deserunt.",
            price: "30",
            image_url: "https://images.unsplash.com/photo-1515955656352-a1fa3ffcd111?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
            image_alt: "nike shoes",
        },
    ]
}

export default function Product() {

    const { id } = useParams()

    console.log(id);

    return (
        <React.Fragment>
            <div className="px-10 w-full" >
                <div className="border-t border-b pt-16 grid grid-cols-2 gap-8" >
                    <div className="flex flex-col justify-start">
                        <div className="flex flex-col w-full object-cover h-4/6 justify-items-start border rounded-lg overflow-hidden" style={{ minHeight: '319px' }}>
                            <img className="w-full h-full object-cover" src={data.products[3].image_url} alt={data.products[3].image_alt} />
                        </div>
                    </div>
                    <div className="flex flex-col" >
                        <div className="flex flex-col gap-4" >
                            <h1 className="capitalize text-4xl font-extrabold" >{data.products[3].title}</h1>
                            <h2 className="text-3xl">${data.products[3].price}</h2>
                            <span>rate</span>
                            <p className="text-lg text-gray-500	" >{data.products[3].description}</p>
                            <div className="flex items-center gap-4 mt-6 cursor-pointer " >
                            <div className="bg-blue-600 px-5 py-3 text-white rounded-lg w-2/4 text-center">Add to bag</div>
                            <HeartIcon 
                                className="w-6 h-6 text-red-400"
                            />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="py-16" >
                    <b className="text-2xl text-gray-700 " >Customers also bought</b>
                    <div className="flex items-center justify-center gap-12 mt-6">

                        {data.products.map((card) => (
                            <ProductCard
                                key={card.id}
                                id={card.id}
                                title={card.title}
                                description={card.description}
                                priceTwo={card.price}
                                image_url={card.image_url}
                                image_alt={card.image_alt}
                            >
                                <span className="flex items-center justify-center  w-full bg-gray-100 rounded-lg py-2" >View</span>
                            </ProductCard>
                            ))}

                    </div>
                </div>
            </div>
        </React.Fragment >
    );
}