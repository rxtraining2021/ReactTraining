import React from 'react';
import './navbar.scss';

export default function Navbar() {
    return (
        <nav className="navbar">
            <img src={process.env.PUBLIC_URL + 'Images/Tours_1.png'} alt="Tours" border="0" height='100px' width='100px' />
            <ul className="nav-links">
                <li>
                    <a href="/" className="nav-link">home</a>
                </li>
                <li>
                    <a href="/" className="nav-link">about</a>
                </li>   
                <li>
                    <a href="/" className="nav-link active">tours</a>
                </li>
            </ul>
        </nav>
    )
}