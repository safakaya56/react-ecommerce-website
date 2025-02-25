import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import { GrSubtractCircle } from "react-icons/gr";
import { GrAddCircle } from "react-icons/gr";
import "../css/details.css"
import { addToBasket } from '../redux/features/basketSlice';

function ProductDetails() {

    const [count, setCount] = useState(0);
    const { id } = useParams();
    const products = useSelector((store) => store.product.products);
    const [product, setProduct] = useState(null);
    const dispatch = useDispatch();

    const handleAddBasket = () => {
        const payload = {
            id: product.id,
            title: product.title,
            price: product.price,
            image: product.image,
            count
        }

        dispatch(addToBasket(payload))
    }


    useEffect(() => {

        if (products.length > 0) {
            const foundProduct = products.find((product) => product.id == id);
            setProduct(foundProduct);
        }
    }, [id, products]);

    const increment = () => {
        setCount(count + 1)
    }
    const discrement = () => {
        if (count != 0) {
            setCount(count - 1)
        }
        else {
            setCount(0)
        }

    }


    return (

        product &&
        <div className='mainContainerDetails'>
            <div className="img">
                <img className='imgProduct' src={product.image} alt="" />
            </div>

            <div className="info">
                <h2 className="title">{product.title} </h2>
                <div className="price">{product.price}$ </div>
                <div className="rate bg-outline">

                    <Stack spacing={1}>
                        <Rating name="half-rating-read" defaultValue={product.rating.rate} precision={0.5} readOnly />
                    </Stack>
                    Rating: {product.rating.rate}
                </div>
                <div className="description">{product.description} </div>
                <div className="buy">
                    <GrSubtractCircle className='iconCount' onClick={discrement} />
                    <span>{count}</span>
                    <GrAddCircle className='iconCount' onClick={increment} />
                    <button onClick={handleAddBasket} className='btn button ms-4'>Add To Basket</button>
                </div>
            </div>

        </div>
    );
}

export default ProductDetails;
