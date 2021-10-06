import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRightIcon, } from '@heroicons/react/outline';
import ProductCard from '../../components/public/ProductCard';
import CardService from '../../components/public/Home/CardService';
import CardCollection from '../../components/public/Home/CardCollection';
import Layout from '../../components/public/Layout';
import '../styles/app.css'
import axios from 'axios';
import NoProductsFound from '../../components/public/NoProductsFound';

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
            icon: '<svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="tshirt" class="svg-inline--fa fa-tshirt fa-w-20" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path fill="currentColor" d="M631.2 96.5L436.5 0C416.4 27.8 371.9 47.2 320 47.2S223.6 27.8 203.5 0L8.8 96.5c-7.9 4-11.1 13.6-7.2 21.5l57.2 114.5c4 7.9 13.6 11.1 21.5 7.2l56.6-27.7c10.6-5.2 23 2.5 23 14.4V480c0 17.7 14.3 32 32 32h256c17.7 0 32-14.3 32-32V226.3c0-11.8 12.4-19.6 23-14.4l56.6 27.7c7.9 4 17.5.8 21.5-7.2L638.3 118c4-7.9.8-17.6-7.1-21.5z"></path></svg>',
            size: 'w-10 h-10',
            title: "free returns",
            paragraph: " Not what you expected? Place it back in the parcel and attach the pre-paid postage stamp.",
        },
        {
            id: "1083ab9f-e5c2-459f-92c3-5a0b417f2d38",
            icon: '<svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="calendar-alt" class="svg-inline--fa fa-calendar-alt fa-w-14" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M148 288h-40c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12zm108-12v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm96 0v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm-96 96v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm-96 0v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm192 0v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm96-260v352c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V112c0-26.5 21.5-48 48-48h48V12c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v52h128V12c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v52h48c26.5 0 48 21.5 48 48zm-48 346V160H48v298c0 3.3 2.7 6 6 6h340c3.3 0 6-2.7 6-6z"></path></svg>',
            size: 'w-8 h-8',
            title: "same day delivery",
            paragraph: "We offer a delivery service that has neverbeen done before. Checkout today and receive your products within hours.",
        },
        {
            id: "2c6757ee-7614-43c1-8a0d-e80731c532a1",
            icon: '<svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="gift" class="svg-inline--fa fa-gift fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M32 448c0 17.7 14.3 32 32 32h160V320H32v128zm256 32h160c17.7 0 32-14.3 32-32V320H288v160zm192-320h-42.1c6.2-12.1 10.1-25.5 10.1-40 0-48.5-39.5-88-88-88-41.6 0-68.5 21.3-103 68.3-34.5-47-61.4-68.3-103-68.3-48.5 0-88 39.5-88 88 0 14.5 3.8 27.9 10.1 40H32c-17.7 0-32 14.3-32 32v80c0 8.8 7.2 16 16 16h480c8.8 0 16-7.2 16-16v-80c0-17.7-14.3-32-32-32zm-326.1 0c-22.1 0-40-17.9-40-40s17.9-40 40-40c19.9 0 34.6 3.3 86.1 80h-86.1zm206.1 0h-86.1c51.4-76.5 65.7-80 86.1-80 22.1 0 40 17.9 40 40s-17.9 40-40 40z"></path></svg>',
            size: 'w-8 h-8',
            title: "all year discount",
            paragraph: 'Looking for a deal? You can use the code "ALLYEAR" at checkout and get money off all year round.',
        },
        {
            id: "2c6757ee-7614-3344rd-8a0d-2324fdvthbxc",
            icon: '<svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="globe-americas" class="svg-inline--fa fa-globe-americas fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512"><path fill="currentColor" d="M248 8C111.03 8 0 119.03 0 256s111.03 248 248 248 248-111.03 248-248S384.97 8 248 8zm82.29 357.6c-3.9 3.88-7.99 7.95-11.31 11.28-2.99 3-5.1 6.7-6.17 10.71-1.51 5.66-2.73 11.38-4.77 16.87l-17.39 46.85c-13.76 3-28 4.69-42.65 4.69v-27.38c1.69-12.62-7.64-36.26-22.63-51.25-6-6-9.37-14.14-9.37-22.63v-32.01c0-11.64-6.27-22.34-16.46-27.97-14.37-7.95-34.81-19.06-48.81-26.11-11.48-5.78-22.1-13.14-31.65-21.75l-.8-.72a114.792 114.792 0 0 1-18.06-20.74c-9.38-13.77-24.66-36.42-34.59-51.14 20.47-45.5 57.36-82.04 103.2-101.89l24.01 12.01C203.48 89.74 216 82.01 216 70.11v-11.3c7.99-1.29 16.12-2.11 24.39-2.42l28.3 28.3c6.25 6.25 6.25 16.38 0 22.63L264 112l-10.34 10.34c-3.12 3.12-3.12 8.19 0 11.31l4.69 4.69c3.12 3.12 3.12 8.19 0 11.31l-8 8a8.008 8.008 0 0 1-5.66 2.34h-8.99c-2.08 0-4.08.81-5.58 2.27l-9.92 9.65a8.008 8.008 0 0 0-1.58 9.31l15.59 31.19c2.66 5.32-1.21 11.58-7.15 11.58h-5.64c-1.93 0-3.79-.7-5.24-1.96l-9.28-8.06a16.017 16.017 0 0 0-15.55-3.1l-31.17 10.39a11.95 11.95 0 0 0-8.17 11.34c0 4.53 2.56 8.66 6.61 10.69l11.08 5.54c9.41 4.71 19.79 7.16 30.31 7.16s22.59 27.29 32 32h66.75c8.49 0 16.62 3.37 22.63 9.37l13.69 13.69a30.503 30.503 0 0 1 8.93 21.57 46.536 46.536 0 0 1-13.72 32.98zM417 274.25c-5.79-1.45-10.84-5-14.15-9.97l-17.98-26.97a23.97 23.97 0 0 1 0-26.62l19.59-29.38c2.32-3.47 5.5-6.29 9.24-8.15l12.98-6.49C440.2 193.59 448 223.87 448 256c0 8.67-.74 17.16-1.82 25.54L417 274.25z"></path></svg>',
            size: 'w-10 h-10',
            title: "for the planet",
            paragraph: "We've pledged 1% of sales to the preservation and restoration of the natural environment.",
        },
    ],
}

export default function Home() {

    const productsInTheBag = JSON.parse(localStorage.getItem('bag'))


    const [data, setData] = useState({
        loading: true,
        error: null,
        products: [],
    });


    useEffect(() => {
        fetchProducts()
    }, [])

    if (!productsInTheBag) {
        localStorage.setItem('bag', JSON.stringify([]))
    }

    async function fetchProducts() {
        setData({
            loading: true,
            error: null,
            products: [],
        })
        try {
            const response = await axios.get('http://localhost:8000/api/v1/products')

            setData({
                loading: false,
                error: null,
                products: response.data.data,
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

    // change the cheapest for the most sold in the store
    const cheapest = data.products.sort((a, b) => a.price - b.price).slice(0, 4)

    return (
        <Layout>
            <div className="border-t">
                <div className="bg-white w-full">
                    <div className="storeImage w-full object-cover	bg-fixed bg-no-repeat flex-col flex items-center" >
                        <h1 className="text-white font-bold	capitalize text-6xl mt-20" >mid-season sale</h1>
                        <Link to="/products" className="bg-blue-700 w-40 rounded-md mt-4 p-2.5 flex justify-center items-center text-center text-white" >shop collection</Link>
                        <div className="flex items-center justify-center gap-10 mt-10 text-white" >
                            {nav.categories.map(card => (
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
                {
                    data.products.length !== 0
                        ? <div className="flex items-center justify-center gap-12 mt-6" >
                            {cheapest.map(card => (
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
                        : <NoProductsFound />

                }
            </div>
            <div className="bg-gray-50 border-t px-10 flex items-center py-28 gap-12" >

                {nav.service.map(card => (
                    <CardService
                        key={card.id}
                        icon={card.icon}
                        title={card.title}
                        paragraph={card.paragraph}
                        size={card.size}
                    />
                ))}

            </div>
        </Layout>
    );
}
