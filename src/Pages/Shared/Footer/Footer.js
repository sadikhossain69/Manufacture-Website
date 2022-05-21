import React from 'react';
import {BsFacebook, BsTwitter, BsLinkedin, BsInstagram} from 'react-icons/bs'

const Footer = () => {

    const date = new Date().getFullYear()

    return (
        <footer className="footer footer-center p-10 bg-base-200 text-base-content rounded">
            <div className="grid grid-flow-col gap-4">
                <p className="link link-hover">About us</p>
                <p className="link link-hover">Contact</p>
                <p className="link link-hover">Jobs</p>
                <p className="link link-hover">Press kit</p>
            </div>
            <div>
                <div className="grid grid-flow-col gap-4">
                    <button><BsFacebook className='text-2xl'/></button>
                    <button><BsInstagram className='text-2xl'/></button>
                    <button><BsLinkedin className='text-2xl'/></button>
                    <button><BsTwitter className='text-2xl'/></button>
                </div>
            </div>
            <div>
                <p>Copyright © {date} - All right reserved by Manufacture Website Ltd</p>
            </div>
        </footer>
    );
};

export default Footer;