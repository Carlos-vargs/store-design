import React from 'react';
import Header from './Header';
import Footer from './Footer';

export default function Layout({children}) {
    return (
        <React.Fragment>
            <Header />
            {children}
            <Footer />
        </React.Fragment>
    );
}
