import React from 'react';
import { Route } from 'react-router-dom'

export default function PublicRoutes({component, ...options}) {
    return (
        <Route {...options} component={component} />
    );
}
