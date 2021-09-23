import React, { useState } from 'react';
import RegisterForm from '../../components/auth/RegisterForm';
import ButtonLog from '../../components/auth/ButtonLog'
import Animation from '../../components/auth/Animation';
import ContainerHeader from '../../components/auth/ContainerHeader';


export default function Register() {

    const [state, setState] = useState({
        loading: false,
        error: null,
        form: {
            first_name: "",
            last_name: "",
            email: "",
            password: "",
            password_confirmation: "",
        }
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

        e.preventDefault()

        try {

            let config = {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'X-CSRF-TOKEN': ('meta[name="csrf-token"]').attr('content')
                },
                body: state.form,
            }

            let res = await fetch('http://localhost:8000/api/register', config)
            let json = await res.json()

            console.log(json);

            setState({ loading: false })

        } catch (error) {
            setState({ loading: false, error: error })
        }
    }


    return (
        <React.Fragment>
            <div className="relative min-h-screen flex ">
                <div className="flex flex-col sm:flex-row items-center md:items-start sm:justify-center md:justify-start flex-auto min-w-0 bg-white">
                    <Animation />
                    <div className="md:flex md:items-center md:justify-center w-full sm:w-auto md:h-full w-2/5 xl:w-2/5 p-8  md:p-10 lg:p-14 sm:rounded-lg md:rounded-none bg-white">
                        <div className="max-w-md w-full space-y-8">
                            <ContainerHeader />
                            <RegisterForm
                                onChange={handleChange}
                                onSubmit={handleSubmit}
                                formValues={state.form}
                            >
                                <ButtonLog
                                    text={'create account'}
                                    type={'submit'}
                                    value={'Submit'}
                                />
                            </RegisterForm>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}
