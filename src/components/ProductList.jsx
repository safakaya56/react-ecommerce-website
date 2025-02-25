import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllProducts } from '../redux/features/productSlice';
import "../css/productList.css"
import Product from './Product';

function ProductList() {

    const dispatch = useDispatch();
    const products = useSelector((store) => (store.product.products))

    useEffect(() => {
        dispatch(getAllProducts())
    }, [])

    return (

        <div className="mainContainer pb-5 ">
            <div className="row row-cols-2 row-cols-md-3 row-cols-lg-4 g-3 mt-5">
                {
                    products.map((item, index) => (
                        <Product key={index} product={item} />
                    ))
                }
            </div>

        </div>

    )
}

export default ProductList