import React from 'react';
import HeaderForm from './HeaderForm';
import NetworksOption from './NetworksOption';

export default function ContainerHeader({ register }) {
    return (
        <React.Fragment>
            {
                register
                    ? <HeaderForm
                        title={'Create your account'}
                        subtitle={'Fill the form & Sign up'}
                    />
                    : <HeaderForm
                        title={'Login in to your account'}
                        subtitle={'Fill the form & Log in'}
                    />
            }
            <NetworksOption />
            <div className="flex items-center justify-center space-x-2">
                <span className="h-px w-16 bg-gray-200"></span>
                <span className="text-gray-300 font-normal">or continue with</span>
                <span className="h-px w-16 bg-gray-200"></span>
            </div>
        </React.Fragment>

    );
}
