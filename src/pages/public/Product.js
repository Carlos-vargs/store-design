import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
// import ProductCard from '../components/ProductCard';
import { HeartIcon } from '@heroicons/react/solid'
import '../styles/app.css'
import Layout from '../../components/public/Layout';
import axios from 'axios';
import ProductCard from '../../components/public/ProductCard';
import NoProductsFound from '../../components/public/NoProductsFound';

export default function Product() {

    let oldBag = JSON.parse(localStorage.getItem('bag'))

    if (!oldBag) {
        localStorage.setItem('bag', JSON.stringify([]))
    }

    const { id } = useParams()

    const [data, setData] = useState({
        loading: true,
        error: null,
        product: [],
        products: []
    });


    useEffect(() => {
        fetchProduct(id)
    }, [id])

    async function fetchProduct(paramsId) {
        setData({
            loading: true,
            error: null,
            product: [],
            products: [],
        })
        try {
            const response = await axios.get(`http://localhost:8000/api/v1/products/${paramsId}`)
            const responseProducts = await axios.get('http://localhost:8000/api/v1/products')

            setData({
                loading: false,
                error: null,
                product: response.data.data,
                products: responseProducts.data.data
            })

        } catch (error) {
            setData({
                loading: false,
                error: error,
            })
        }

    }

    function reload() { window.location.reload(true) }


    function setItemToLocalStorage(newProduct) {

        oldBag.forEach((e) => {
            if (e.id === newProduct.id) {
                console.log('the same product twice');
            }
        });

        localStorage.setItem('bag', JSON.stringify([...oldBag, { product: newProduct, count: 1 }]))


        reload()
    }

    if (data.error) {
        return (`Error: ${data.error.message}`)
    }
    //chnage cheapest products fot the best-selling products
    const cheapest = data.products.sort((a, b) => a.price - b.price).slice(0, 4)

    return (
        <Layout>
            <div className="px-10 w-full" >
                <div className="border-t border-b pt-16 grid grid-cols-2 gap-8" >
                    <div className="flex flex-col justify-start">
                        <div className="flex flex-col w-full object-cover h-4/6 justify-items-start border rounded-lg overflow-hidden" style={{ minHeight: '320px', maxHeight: '800px' }}>
                            <img className="w-full h-full object-cover" src={data.product.image_url} alt={data.product.image_alt} />
                        </div>
                    </div>
                    <div className="flex flex-col" >
                        <div className="flex flex-col gap-4 justify-between	" style={{ minHeight: '320px' }}>
                            <h1 className="capitalize text-4xl font-extrabold" >{data.product.title}</h1>
                            <h2 className="text-3xl">${data.product.price}</h2>
                            <span>rate</span>
                            <p className="text-lg text-gray-500	" >{data.product.description}</p>
                            <div className="flex items-center gap-4 mt-6 cursor-pointer " >
                                <button className="bg-blue-600 px-5 py-3 text-white rounded-lg w-2/4 text-center" onClick={() => setItemToLocalStorage(data.product)} >Add to bag</button>
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
                        {
                            data.products.length !== 0
                                ? <div className="flex items-center justify-center gap-12 mt-6" >
                                    {cheapest.map(card => (
                                        <ProductCard
                                            key={card.id}
                                            id={card.id}
                                            title={card.title}
                                            description={card.description}
                                            priceTwo={card.price}
                                            image_url={card.image_url}
                                            image_alt={card.image_alt}
                                        >
                                            <span className="flex items-center justify-center  w-full bg-gray-100 rounded-lg py-2">View</span>
                                        </ProductCard>
                                    ))}
                                </div>
                                : <NoProductsFound />
                        }

                    </div>
                </div>
            </div>
        </Layout >
    );
}