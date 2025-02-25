import React from 'react';
import "../css/advert.css";
import { MdOutlineHealthAndSafety } from "react-icons/md";
import { FaBolt } from "react-icons/fa";
import { FaTags } from "react-icons/fa";
function Advert() {
    return (
        <div className='mainContainerAdvert d-none d-md-flex mt-3'>
            <img src="/img/home.jpg" alt="" className="img-fluid w-100 " style={{ height: '400px' }} />
            <div className="cards px-3">
                <div className="card">
                    <div className="card-body">
                        <MdOutlineHealthAndSafety className='Aicon' />
                        <h5 className="card-title ps-3">SAFE</h5>
                    </div>
                </div>
                <div className="card">
                    <div className="card-body">
                        <FaBolt className='Aicon' />
                        <h5 className="card-title">QUİCK</h5>
                    </div>
                </div>
                <div className="card">
                    <div className="card-body">
                        <FaTags className='Aicon' />
                        <h5 className="card-title">DİSCOUNT</h5>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Advert;
