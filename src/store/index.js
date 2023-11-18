import { configureStore } from '@reduxjs/toolkit';
import cards from '../Components/cards/cardsSlise';
import cart from '../Components/cart/cartSlise';

const store = configureStore({
    reducer: {cards,cart},
    middleware: getDefaultMiddleware => getDefaultMiddleware(), 
    devTools: process.env.NODE_ENV !== 'production',
})

export default store;