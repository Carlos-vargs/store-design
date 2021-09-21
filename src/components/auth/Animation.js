import React from 'react';

export default function Animation() {
    return (
        <React.Fragment>
            <div className="sm:w-1/2 xl:w-3/5 h-full hidden md:flex flex-auto items-center justify-center p-10 overflow-hidden bg-purple-900 text-white bg-no-repeat bg-cover relative">
                <div className="absolute bg-gradient-to-b from-indigo-600 to-blue-500 opacity-75 inset-0 z-0"></div>
                <div className="w-full  max-w-md z-10">
                    <div className="sm:text-4xl xl:text-5xl font-bold leading-tight mb-6">Reference site about Lorem Ipsum..</div>
                    <div className="sm:text-sm xl:text-md text-gray-200 font-normal">
                        What is Lorem Ipsum Lorem Ipsum is simply dummy
                        text of the printing and typesetting industry Lorem Ipsum has been the industry's standard dummy text ever
                        since the 1500s when an unknown printer took a galley of type and scrambled it to make a type specimen book it
                        has?
                    </div>
                </div>
                <ul className="circles">
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
            </div>
        </React.Fragment>
    );
}