import React from 'react'
import "../css/footer.css"
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

function Footer() {
    return (
        <div className='container-fluid mainContainerFooter'>
            <div className='pages mt-2'>
                <h5>HOME</h5>
                <h5>CATEGORİES</h5>
                <h5>BASKET</h5>
                <h5>ABOUT US</h5>
            </div>
            <hr className="divider" />
            <div className='description'>
                <p className='text-center'>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt eos deserunt,
                    quidem harum eveniet consequatur ad! Iste illum temporibus voluptatem ipsum ea
                    veniam vero illo molestiae, alias facilis aliquid officia libero quia nemo ullam
                    perferendis ratione suscipit nihil quo optio odit! Ad eligendi temporibus harum consectetur illum numquam eum vero?
                </p>
                <div className='links mt-5'>
                    <FaFacebook className='linkIcon' />
                    <FaTwitter className='linkIcon' />
                    <FaInstagramSquare className='linkIcon' />
                    <FaLinkedin className='linkIcon' />
                </div>
            </div>
            <div className='copy mt-4 text-body-secondary' style={{fontSize:"20px"}}>
                <p>© 2025 Copyright: Muhammet Safa Kaya </p>
            </div>
        </div>
    )
}

export default Footer