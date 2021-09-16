import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRightIcon, } from '@heroicons/react/outline';
import ProductCard from '../components/ProductCard';
import CardCollection from '../components/Home/CardCollection';
import CardService from '../components/Home/CardService';
import './styles/app.css'
import Header from '../components/Header'

const nav = {
    categories: [
        {
            id: 'fe658605-4cfa-4a99-a845-d66bcd1c0d7',
            title: 'shop the collection',
            collection: 'womens',
            image_url: 'https://images.unsplash.com/photo-1617922001439-4a2e6562f328?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80',
            image_alt: 'Womens collection',
        },
        {
            id: 'fccd970b-165f-4d9a-a6f5-ab1571e0ee9',
            title: 'shop the collection',
            collection: 'mens',
            image_url: 'https://images.unsplash.com/photo-1520975916090-3105956dac38?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80',
            image_alt: 'Mens collection',
        },
        {
            id: 'ebf483f1-13db-42c4-add5-f15800ebd6b',
            title: 'shop the collection',
            collection: 'desk accessories',
            image_url: 'https://images.unsplash.com/photo-1474354503580-955e733d2a7d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80',
            image_alt: 'Desk accessories collection',
        },
    ],
    service: [
        {
            id: "164386c5-7c56-45a3-be3d-765ff2dd860d",
            icon: "icon",
            title: "free returns",
            paragraph: " Not what you expected? Place it back in the parcel and attach the pre-paid postage stamp.",
        },
        {
            id: "1083ab9f-e5c2-459f-92c3-5a0b417f2d38",
            icon: "icon",
            title: "same day delivery",
            paragraph: "We offer a delivery service that has neverbeen done before. Checkout today and receive your products within hours.",
        },
        {
            id: "2c6757ee-7614-43c1-8a0d-e80731c532a1",
            icon: "icon",
            title: "all year discount",
            paragraph: 'Looking for a deal? You can use the code "ALLYEAR" at checkout and get money off all year round.',
        },
        {
            id: "2c6757ee-7614-3344rd-8a0d-2324fdvthbxc",
            icon: "icon",
            title: "for the planet",
            paragraph: "We've pledged 1% of sales to the preservation and restoration of the natural environment.",
        },
    ],
}

export default function Home() {

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

    const cheapest = data.products.sort((a, b) =>  a.price - b.price).slice(0,4)
    

    return (
        <React.Fragment>
            <Header />
            <div className="border-t">
                <div className="bg-white w-full">
                    <div className="storeImage w-full object-cover	bg-fixed bg-no-repeat flex-col flex items-center" >
                        <h1 className="text-white font-bold	capitalize text-6xl mt-20" >mid-season sale</h1>
                        <Link to="/products" className="bg-blue-700 w-40 rounded-md mt-4 p-2.5 flex justify-center items-center text-center text-white" >shop collection</Link>
                        <div className="flex items-center justify-center gap-10 mt-10 text-white " >
                            {nav.categories.map((card) => (
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
                <div className="flex items-center justify-center gap-12 mt-6" >

                    {cheapest.map((card) => (
                        <ProductCard
                            key={card.id}
                            id={card.id}
                            title={card.title}
                            description={card.description}
                            price={card.price}
                            image_url={card.image_url}
                            image_alt={card.title}
                        />
                    ))}

                </div>
            </div>
            <div className="bg-gray-50 border-t px-10 flex items-center py-28 gap-12" >

                {nav.service.map((card) => (
                    <CardService
                        key={card.id}
                        icon={card.icon}
                        title={card.title}
                        paragraph={card.paragraph}
                    />
                ))}

            </div>
        </React.Fragment>
    );
}
