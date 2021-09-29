import React from 'react';
import Input from './Input';
import LinkForms from './LinkForms';

export default function LoginForm({ onChange, onSubmit, formValues, children }) {

    return (
        <React.Fragment>
            <form onSubmit={onSubmit} className="mt-8 space-y-6">
                <Input
                    title={'Email'}
                    name={'email'}
                    type={'email'}
                    placeholder={'user@gmail.com'}
                    autocomplete={'email'}
                    value={formValues.email}
                    onChange={onChange}
                />
                <Input
                    title={'Password'}
                    name={'password'}
                    type={'password'}
                    placeholder={'Enter your password'}
                    autocomplete={'current-password'}
                    value={formValues.password}
                    onChange={onChange}
                />
                <div className="flex items-center justify-between">
                </div>
                <div>
                    {children}
                </div>
                <LinkForms
                    title={'You do not have an account?'}
                    title_url={'create account'}
                    url={'/register'}
                />
            </form>
        </React.Fragment>
    );
}
