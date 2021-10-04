import React from 'react';
import { Link, } from 'react-router-dom';
import BodyCard from './BodyCard';

export default function ProductCard({ title, description, price, image_url, image_alt, id, priceTwo, children }) {
    return (
        <React.Fragment>
            {id
                ? <Link to={`/product/${id}`}>
                    <BodyCard
                        title={title}
                        description={description}
                        price={price}
                        image_url={image_url}
                        image_alt={image_alt}
                        priceTwo={priceTwo}
                        children={children}
                    />
                </Link>
                : <BodyCard
                    title={title}
                    description={description}
                    price={price}
                    image_url={image_url}
                    image_alt={image_alt}
                    priceTwo={priceTwo}
                    children={children}
                />
            }
        </React.Fragment>
    );
}