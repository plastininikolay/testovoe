import React from 'react';
import Cart from "./Cart";

const Header = () => {
    return (
        <header>
            <img src="shop.png" alt="" className={'logo'}/>
            <Cart/>
        </header>
    );
};

export default Header;
