import React from 'react';
import { Link } from 'react-router-dom';
import Input from './Input';

export default function RegisterForm({ onChange, onSubmit, formValues, children }) {

    console.log(formValues['first_name']);

    return (
        <React.Fragment>
            <form onSubmit={onSubmit}  className="mt-8 space-y-6">                
                <Input
                    title={'First Name'}
                    name={'first_name'}
                    type={'text'}
                    placeholder={'First Name'}
                    autocomplete={'name'}
                    value={formValues['first_name']}
                    onChange={onChange}
                />
                <Input
                    title={'Last Name'}
                    name={'last_name'}
                    type={'text'}
                    placeholder={'Last Name'}
                    autocomplete={'family-name'}
                    value={formValues['last_name']}
                    onChange={onChange}
                />
                <Input
                    title={'Email'}
                    name={'email'}
                    type={'email'}
                    placeholder={'user@gmail.com'}
                    autocomplete={'email'}
                    value={formValues['email']}
                    onChange={onChange}
                />
                <Input
                    title={'Password'}
                    name={'password'}
                    type={'password'}
                    placeholder={'Enter your password'}
                    autocomplete={'current-password'}
                    value={formValues['password']}
                    onChange={onChange}
                />
                <Input
                    title={'Password Confirmation'}
                    name={'password_confirmation'}
                    type={'password'}
                    autocomplete={'new-password'}
                    placeholder={'Confirm your password'}
                    value={formValues['password_confirmation']}
                    onChange={onChange}
                />
                <div className="flex items-center justify-between">
                </div>
                <div>
                    {children}
                </div>
                <span className="flex flex-col items-center justify-center mt-10 text-center text-md text-gray-500">
                    <span>Do you already have an account?</span>
                    <Link to="/login" className="text-indigo-400 hover:text-blue-500 no-underline hover:underline cursor-pointer transition ease-in duration-300">Sign up</Link>
                </span>
            </form>
        </React.Fragment>
    );
}
