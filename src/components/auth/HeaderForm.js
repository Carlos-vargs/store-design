import React from 'react';

export default function HeaderForm({ title, subtitle }) {
    return (
        <React.Fragment>
            <div className="text-center">
                <h2 className="mt-6 text-3xl font-bold text-gray-900">
                    {title}
                </h2>
                <span className="mt-2 text-sm text-gray-500">{subtitle}</span>
            </div>
        </React.Fragment>
    );
}
