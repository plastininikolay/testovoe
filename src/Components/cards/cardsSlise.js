import { createSlice, createAsyncThunk, createEntityAdapter} from "@reduxjs/toolkit";
import { useHttp } from "../../hooks/http.hook";

const cardsAdapter = createEntityAdapter();

const initialState = cardsAdapter.getInitialState({
    cardsLoadingStatus: 'idle',
    categories: []
});

export const fetchCards = createAsyncThunk(
    'cards/fetchCards',
    () => {
        const {request} = useHttp();
        return request(`https://fakestoreapi.com/products`);
    }
);

export const fetchCategories = createAsyncThunk(
    'cards/fetchCategories',
    () => {
        const {request} = useHttp();
        return request('https://fakestoreapi.com/products/categories');
    }
)

const cardsSlice = createSlice({
    name: 'cards',
    initialState,
    extraReducers: (builder) => {
        builder
            .addCase(fetchCards.pending, state => {state.cardsLoadingStatus = 'loading'})
            .addCase(fetchCards.fulfilled, (state, action) => {
                state.cardsLoadingStatus = 'idle';
                cardsAdapter.setAll(state, action.payload);
            })
            .addCase(fetchCards.rejected, state => {state.cardsLoadingStatus ='error'})
            .addCase(fetchCategories.pending, state => {state.cardsLoadingStatus = 'loading'})
            .addCase(fetchCategories.fulfilled, (state,actions) => {state.categories = actions.payload})
            .addCase(fetchCategories.rejected, state => {state.cardsLoadingStatus ='error'})
        }
})
const {actions, reducer} = cardsSlice;

export const {selectAll} = cardsAdapter.getSelectors(state => state.cards)

export default reducer;

export const {cardsCreated} = actions;