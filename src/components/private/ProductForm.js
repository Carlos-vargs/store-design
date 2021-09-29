import React, { Fragment } from 'react';
import Input from '../auth/Input';

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

                {/* changes this elements to a component for react  */}
                <label className="block text-sm font-medium text-gray-700">
                    <span>description</span>
                    <div className="mt-1">
                        <textarea
                            name="description"
                            rows={3}
                            className="p-2  shadow-sm focus:ring-1 focus:ring-blue-300	 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md"
                            placeholder="product description"
                            defaultValue={''}
                        />
                    </div>
                </label>


                <label className="block text-sm font-medium text-gray-700">
                    <span>product photo</span>
                    <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                        <div className="space-y-1 text-center">

                            <div className="flex text-sm text-gray-600">
                                <label
                                    className="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
                                >
                                    <span>Upload a file</span>
                                    <input name="image" type="file" className="sr-only" />
                                </label>
                                <p className="pl-1">or drag and drop</p>
                            </div>
                            <p className="text-xs text-gray-500">PNG, JPG, GIF up to 10MB</p>
                        </div>
                    </div>
                </label>
                <div className="flex items-center justify-between">
                </div>
                <div>
                    {children}
                </div>
            </form>
        </Fragment>
    );
}