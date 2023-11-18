import React from 'react';
import cartImg from '../resources/img/cart.svg'
import './cart.sass'
import { useSelector } from 'react-redux';

const Cart = () => {

    const {price, counter} = useSelector(state => state.cart)
    return (
        <div className='cart'>
            <div className="price">{price}$</div>
            <div className="divider"></div>
            <div className="count">
                <img src={cartImg} alt="cart"/>
                {Math.floor(counter)}
            </div>
        </div>
    );
};

export default Cart;
