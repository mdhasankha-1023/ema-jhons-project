import React from 'react';
import logo from '../../images/Logo.svg'
import './Header.css'
const Header = () => {
    return (
        <nav className='header'>
            <img src={logo} alt="Company-logo" /> 
            <div>
                <a href="/shop">shop</a>
                <a href="/order">order</a>
                <a href="/inventory">Inventory</a>
                <a href="/login">Login</a>
            </div>          
        </nav>
    );
};

export default Header;