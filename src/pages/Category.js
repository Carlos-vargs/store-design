import React, { useEffect, useState } from 'react';
import { Link, } from 'react-router-dom';
import ProductCard from '../components/ProductCard';

export default function Category() {

    const [data, setData] = useState({
        loading: true,
        error: null,
        products: [],
    });


    useEffect(() => {
        fetchProducts()
    }, [])

    async function fetchProducts() {
        setData({
            loading: true,
            error: null,
            products: [],
        })
        try {
            const data = await fetch('http://localhost:8000/api/v1/products')
            const response = await data.json()

            setData({
                loading: false,
                error: null,
                products: response.data,
            })

        } catch (error) {
            setData({
                loading: false,
                error: error,
            })
        }

    }

    if (data.error) {
        return (`Error: ${data.error.message}`)
    }


    return (
        <div className="flex px-10 justify-center flex-col bg-gray-50" >
            <div className="flex flex-col items-center justify-center gap-4 py-20 " >
                <h1 className="text-4xl font-extrabold" >New Arrivals</h1>
                <span className="text-gray-500 text-center" >Thoughtfully designed objects for the workspace, home and travel.</span>
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

