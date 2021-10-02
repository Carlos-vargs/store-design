import React, { Fragment } from 'react';
import Input from '../auth/Input';
import TextTarea from '../private/TextTarea'
import InputFile from './InputFile';

export default function ProductForm({ onSubmit, formValues, onChange, children }) {
    return (
        <Fragment>
            <form onSubmit={onSubmit} className="mt-8 space-y-6">
                <Input
                    title={'Title'}
                    name={'title'}
                    type={'text'}
                    placeholder={'product title'}
                    value={formValues.title}
                    onChange={onChange}
                />
                <Input
                    title={'Price'}
                    placeholder={'price '}
                    name={'price'}
                    type={'number'}
                    value={formValues.price}
                    onChange={onChange}
                />
                <TextTarea
                    nameValue={'description'}
                    rowsValue={3}
                    placeholderValue={'Product description'}
                    title={'Description'}
                    value={formValues.description}
                    onChange={onChange}
                />
                <InputFile
                    title={'Product photo'}
                    onChange={onChange}
                    value={formValues.image}
                    name={'image'}
                    type={'file'}
                    
                />
                <div>
                    {children}
                </div>
            </form>
        </Fragment>
    );
}