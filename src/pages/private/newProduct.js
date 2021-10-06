import { XCircleIcon } from '@heroicons/react/solid';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Redirect } from 'react-router';
import { Link } from 'react-router-dom'
import ButtonLog from '../../components/auth/ButtonLog';
import ProductForm from '../../components/private/ProductForm';
import ProductCard from '../../components/public/ProductCard';

export default function newProduct() {

    const user = JSON.parse(localStorage.getItem('user'))
    const getImg = JSON.parse(localStorage.getItem('productImg'))

    useEffect(() => {
        localStorage.setItem('productImg', JSON.stringify(''))
    }, []);

    const [state, setState] = useState({
        loading: false,
        error: null,
        form: {
            title: '',
            price: '',
            description: '',
            image: ''
        },
        redirect: false
    });


    const handleChange = e => {
        setState({
            form: {
                ...state.form,
                [e.target.name]: e.target.value
            }
        })

        if (e.target.name === 'image') {
            let file = e.target.files[0];
            let url = URL.createObjectURL(file)

            localStorage.setItem('productImg', JSON.stringify(url))

        }

    }


    const handleSubmit = async e => {

        setState({ ...state, loading: true, })

        e.preventDefault()

        localStorage.removeItem('productImg')

        const form = new FormData(e.target)

        try {

            let config = {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    'Authorization': `Bearer ${user.token}`,
                },
            }

            let res = await axios.post('http://localhost:8000/api/v1/products', form, config)

            console.log(res.data);

            setState({ loading: false, error: null, redirect: true })


        } catch (error) {

            setState({ ...state, loading: false, error: error, })

        }
    }

    if (state.redirect) {
        return <Redirect to="/products" />
    }

    return (
        <div className="py-28 flex items-start justify-center gap-12" >
            <ProductForm
                onChange={handleChange}
                onSubmit={handleSubmit}
                formValues={state.form}
            >
                <ButtonLog
                    text={'Publish'}
                    type={'submit'}
                    value={'Submit'}
                />
            </ProductForm>

            <ProductCard
                title={state.form.title || 'Title'}
                description={state.form.description || 'description'}
                price={state.form.price || 'price'}
                image_url={getImg}
                image_alt={state.form.title || 'add some description'}
            />

            <Link to='/products' title="Return to the previous page" onClick={() => {
                localStorage.removeItem('productImg')
                URL.revokeObjectURL(getImg)
                
            }} >
                <XCircleIcon className="w-9 h-9 text-red-500 hover:text-red-700 " />
            </Link>
        </div >
    )
}