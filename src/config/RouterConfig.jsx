import React from 'react'
import { Routes, Route } from "react-router-dom";
import ProductDetails from '../components/ProductDetails';
import Home from '../pages/Home';
import Basket from '../pages/Basket';

function RouterConfig() {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/product-details/:id' element={<ProductDetails />} />
            <Route path='/basket' element={<Basket />} />
        </Routes>
    )
}

export default RouterConfig