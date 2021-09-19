import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../app/Logo';

const navigation = {
    products: [
        {
            id: 'bf34c024-7d1f-4fc2-bcbf-75accf979b5a',
            name: 'bags',
            url: '#',
        },
        {
            id: 'ccb7ba06-d995-4344-b624-6a864ed2e940',
            name: 'tees',
            url: '#',

        },
        {
            id: '45850b6f-7d49-4692-8d0d-09e3236024a9',
            name: 'objects',
            url: '#',
        },
        {
            id: 'd8097ec0-ddb1-4aca-bf11-ec225658160a',
            name: 'home goods',
            url: '#',
        },
        {
            id: 'c3a51a69-3ae9-437e-8f77-5b94c7edf0ca',
            name: 'accessories',
            url: '#',
        },
    ],
    company: [
        {
            id: '74789abc-bc6a-4e54-a4d6-fffb9e4d040a',
            info: 'Who we are',
            url: '#',
        },
        {
            id: '3e4e1889-ff29-4796-9c58-7dc64d393875',
            info: 'Sustainability',
            url: '#',
        },
        {
            id: '9a855070-dd19-4be5-8e37-34937cfc1925',
            info: 'Press',
            url: '#',
        },
        {
            id: '38c435ce-d13f-4f0d-8a0e-a4871ab9e8fe',
            info: 'Careers',
            url: '#',
        },
        {
            id: '03956286-e8a9-41f2-8af6-8384e19bfdc2',
            info: 'Terms&Conditions',
            url: '#',
        },
        {
            id: '34f06559-bdae-46f4-8287-af01266e8247',
            info: 'Privacy',
            url: '#',
        },
    ],
    customer: [
        {
            id: '681119a8-0b45-42ba-9a0b-5ecb20c70186',
            service: 'Contact',
            url: '#',
        },
        {
            id: '5b97afa8-da38-468c-996e-e1b570cee069',
            service: 'Shipping',
            url: '#',
        },
        {
            id: '656484ae-862d-4199-bcfd-f5620a25228c',
            service: 'Returns',
            url: '#',
        },
        {
            id: '5c298cee-cf12-41d7-857c-5da0eaa7af77',
            service: 'Warranty',
            url: '#',
        },
        {
            id: 'f3374a48-e9a8-4693-a65a-b8b1af3b43ae',
            service: 'Secure Payments',
            url: '#',
        },
        {
            id: 'a25a439c-3aef-4d2f-a328-e1d4f953ea7e',
            service: 'FAQ',
            url: '#',
        },
        {
            id: '616505e8-58ba-4ecf-a828-4458cd2d2beb',
            service: 'Find a store',
            url: '#',
        },
    ],

};

export default function Footer() {
    return (
        <footer className="bg-gray-50 w-full px-10 flex flex-col justify-center" >
            <div className="border-t py-20 border-b flex justify-between cursor-pointer" >
                <div className="flex items-start text-gray-400 gap-20" >
                    <Logo />
                    <ul className="flex flex-col gap-6 capitalize" >
                        <li className="text-gray-700">products</li>
                        {navigation.products.map((product) => (
                            <li key={product.id} >
                                <Link to={product.url}>
                                    {product.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                    <ul className="flex flex-col gap-6" >
                        <li className=" capitalize text-gray-700" >company</li>
                        {navigation.company.map((data) => (
                            <li key={data.id} >
                                <Link to={data.url}>
                                    {data.info}
                                </Link>
                            </li>
                        ))}
                    </ul>
                    <ul className="flex flex-col gap-6" >
                        <li className="text-gray-700" >Customer Service</li>
                        {navigation.customer.map((data) => (
                            <li key={data.id} >
                                <Link to={data.url}>
                                    {data.service}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="flex flex-col items-start gap-4" >
                    <span className="text-gray-700" >Sign up for our newsletter</span>
                    <span className="text-gray-400" >The latest deals and savings, sent to your inbox weekly.</span>
                    <div className="flex gap-4 h-9" >
                        <input type="text" className="border rounded-lg focus:outline-none focus:ring focus:border-blue-300 px-2" />
                        <button className="rounded-lg bg-blue bg-blue-600 px-3 text-white" >Sign up</button>
                    </div>
                </div>
            </div>
            <div className="w-full bg-gray-50 flex items-center justify-center text-gray-400 py-6" >
                2021 Workflow, Inc. All rights reserved.
            </div>
        </footer>
    );
}
