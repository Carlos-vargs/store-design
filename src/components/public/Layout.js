import React from 'react';
import Header from './Header';
import Footer from './Footer';

export default function Layout({children, currentProduct}) {
    return (
        <React.Fragment>
            <Header currentProduct={currentProduct}  />
            {children}
            <Footer />
        </React.Fragment>
    );
}
