import { createSlice, createEntityAdapter } from '@reduxjs/toolkit'

const cartAdapter = createEntityAdapter();

const initialState = cartAdapter.getInitialState({
    price: 0,
    counter: 0
});

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        cartCreated: (state, action) => {
            cartAdapter.addOne(state, action.payload)
            state.counter+=1;
            state.price+=action.payload.price;
        },
        cartDeleted: (state, action) => {cartAdapter.removeMany(state, action.payload)}
    }
})

const {actions, reducer} = cartSlice;

export default reducer;

export const {selectAll} = cartAdapter.getSelectors(state => state.cart);

export const {
    cartCreated,
    cartDeleted
} = actions;

