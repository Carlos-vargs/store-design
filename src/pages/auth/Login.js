import React, { Fragment, useState } from 'react';
import LoginForm from '../../components/auth/LoginForm';
import ButtonLog from '../../components/auth/ButtonLog'
import Animation from '../../components/auth/Animation';
import ContainerHeader from '../../components/auth/ContainerHeader';
import { Redirect } from 'react-router';
import axios from 'axios';


export default function Login() {


    const [state, setState] = useState({
        loading: false,
        error: null,
        form: {
            email: "",
            password: "",
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

    const handleSubmit = async e => {

        setState({ ...state, loading: true, })

        e.preventDefault()

        try {

            let config = {
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                    // 'X-XSRF-TOKEN': getCookie('XSRF-TOKEN'),
                },
            }

            let res = await axios.post('http://localhost:8000/api/login', state.form, config)

            localStorage.setItem('user', JSON.stringify(res.data))

            setState({ loading: false, error: null, redirect: true })


        } catch (error) {

            setState({ ...state, loading: false, error: error.response.data.message, redirect: false })

        }
    }

    if (state.redirect) {
        return <Redirect to="/" />
    }

    return (
        <Fragment>
            <div className="relative min-h-screen flex ">
                <div className="flex flex-col sm:flex-row items-center md:items-start sm:justify-center md:justify-start flex-auto min-w-0 bg-white">
                    <Animation />
                    <div className="md:flex md:items-center md:justify-center w-full sm:w-auto md:h-full w-2/5 xl:w-2/5 p-8  md:p-10 lg:p-14 sm:rounded-lg md:rounded-none bg-white">
                        <div className="max-w-md w-full space-y-8">
                            <ContainerHeader register={false} />
                            <LoginForm
                                onChange={handleChange}
                                onSubmit={handleSubmit}
                                formValues={state.form}
                                errors={state.error}
                            >
                                <ButtonLog
                                    text={'sign up'}
                                    type={'submit'}
                                    value={'Submit'}
                                />
                            </LoginForm>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
}
