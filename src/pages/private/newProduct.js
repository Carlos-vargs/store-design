import axios from 'axios';
import React, { useState } from 'react';
import { Redirect } from 'react-router';
import ButtonLog from '../../components/auth/ButtonLog';
import ProductForm from '../../components/private/ProductForm';
// import getCookie from '../../components/auth/helpers/getCookie';

export default function newProduct() {

    const user = JSON.parse(localStorage.getItem('user'))

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
    }

    // fetch('http://localhost:8000/sanctum/csrf-cookie')
    
    const handleSubmit = async e => {

        setState({ ...state, loading: true, })

        e.preventDefault()

        const form = new FormData(e.target)

        try {

            let config = {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    'Authorization':`Bearer ${user.token}`,
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
        <div className="flex items-center justify-center" >
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
        </div >
    )
}