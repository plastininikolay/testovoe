import React from 'react';
import Cart from "../cart/Cart";
import logo from '../resources/img/SHOP.png'
import './header.sass'

const Header = () => {
    return (
        <header>
            <img src={logo} alt="logo" className='logo'/>
            <Cart/>
        </header>
    );
};

export default Header;
