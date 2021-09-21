import React from 'react';

export default function SocialNetworks({ icon, color, url, border }) {
    return (
        <a target="_blank" href={url} className={`${color} ${border} w-11 h-11 items-center justify-center inline-flex rounded-2xl font-bold text-lg hover:shadow-lg cursor-pointer transition ease-in duration-300`}>
            <span className='flex iteems-center justify-center w-6 h-6' >
                {icon}
            </span>
        </a>

    );
}

