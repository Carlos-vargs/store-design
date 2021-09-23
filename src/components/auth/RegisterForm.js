import React from 'react';
import Input from './Input';
import LinkForms from './LinkForms';

export default function RegisterForm({ onChange, onSubmit, formValues, children }) {

    return (
        <React.Fragment>
            <form onSubmit={onSubmit} className="mt-8 space-y-6">
                <Input
                    title={'First Name'}
                    name={'first_name'}
                    type={'text'}
                    placeholder={'First Name'}
                    autocomplete={'name'}
                    value={formValues.first_name}
                    onChange={onChange}
                />
                <Input
                    title={'Last Name'}
                    name={'last_name'}
                    type={'text'}
                    placeholder={'Last Name'}
                    autocomplete={'family-name'}
                    value={formValues.last_name}
                    onChange={onChange}
                />
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
                <Input
                    title={'Password Confirmation'}
                    name={'password_confirmation'}
                    type={'password'}
                    autocomplete={'new-password'}
                    placeholder={'Confirm your password'}
                    value={formValues.password_confirmation}
                    onChange={onChange}
                />
                <div className="flex items-center justify-between">
                </div>
                <div>
                    {children}
                </div>
                <LinkForms
                    title={'Do you already have an account?'}
                    title_url={'Sign up'}
                    url={'/login'}
                />
            </form>
        </React.Fragment>
    );
}
