import React, { useEffect, useState } from 'react'
import "../css/header.css"
import { BiCategory } from "react-icons/bi";
import { CiShoppingBasket } from "react-icons/ci";
import Dropdown from '@mui/joy/Dropdown';
import IconButton from '@mui/joy/IconButton';
import Menu from '@mui/joy/Menu';
import MenuButton from '@mui/joy/MenuButton';
import MenuItem from '@mui/joy/MenuItem';
import MoreVert from '@mui/icons-material/MoreVert';
import Badge from '@mui/material/Badge';
import { useDispatch, useSelector } from 'react-redux';
import { handleClick } from '../redux/features/clickSlice';
import { useNavigate } from 'react-router-dom';


function Header() {

    const navigate = useNavigate();
    const dispatch = useDispatch()
    const products = useSelector((store) => store.basket.products)
    const [basketCounter, setBasketCounter] = useState(0);

    const handleNavigate = () => {
        navigate('/basket');
    }

    useEffect(() => {
        const count = products.reduce((total, item) => total + item.count, 0);
        setBasketCounter(Number(count));
    }, [products]);

    return (
        <div className='header container-fluid py-4'>
            <div className="left">
                <div className="brand">
                    <img className='logo' src="/img/logo.png" alt="" onClick={() => navigate("/")} style={{ cursor: "pointer" }} />
                </div>
                <div className="title pe-3" onClick={() => navigate("/")} style={{ cursor: "pointer" }}>
                    <h1>eCommerce</h1>
                </div>
                <div className="categories d-none d-md-flex">
                    <BiCategory className='icon' style={{ cursor: "pointer" }} onClick={() => dispatch(handleClick())} />
                    <span className='pt-1 ps-1' style={{ color: 'gold' }}>Categories</span>
                </div>
            </div>

            <div className="right">
                <div className="search d-none d-md-flex">
                    <input className='searchbar'
                        placeholder='Search'
                        type="text" />
                </div>
                <div className="basket d-none d-md-flex">
                    <Badge badgeContent={basketCounter} color='success' style={{ cursor: "pointer" }}>
                        <CiShoppingBasket className='icon' onClick={handleNavigate} />
                    </Badge>

                </div>
                <div className='d-flex d-md-none'>
                    <Dropdown style={{ cursor: "pointer" }}>
                        <MenuButton
                            slots={{ root: IconButton }}
                            slotProps={{
                                root: {
                                    variant: 'text',
                                    style: { color: 'gold' },
                                },
                            }}
                        >
                            <MoreVert />
                        </MenuButton>
                        <Menu style={{ backgroundColor: '#1E3A8A', border: '1px solid gold' }}>
                            <MenuItem style={{ backgroundColor: '#1E3A8A', color: 'gold', fontSize: "18px" }} onClick={handleNavigate}>Basket</MenuItem>
                            <MenuItem style={{ backgroundColor: '#1E3A8A', color: 'gold', fontSize: "18px" }} onClick={() => dispatch(handleClick())} >Categories</MenuItem>
                        </Menu>
                    </Dropdown>
                </div>
            </div>
        </div>
    )
}

export default Header