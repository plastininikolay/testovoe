import React from 'react';

const Cart = () => {
    return (
        <div className='cart'>
            <div className="price">312$</div>
            <div className="divider"></div>
            <div className="count">
                <img src="cart.svg" alt="cart"/>
                2
            </div>
        </div>
    );
};

export default Cart;
