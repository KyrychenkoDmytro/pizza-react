import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import type { CartItemProps } from '../../../src/Containers/Cart/CartNotEmpty/CartItem/CartItem';

const totalPriceAndTotalCount = (state: CartSliceState) => {
    state.totalPrice = state.allPizzas.reduce((sum, item) => {
        return item.count * item.price + sum;
    }, 0);

    state.totalCount = state.allPizzas.reduce((sum, item) => item.count + sum, 0);
}

interface CartSliceState {
    allPizzas: CartItemProps[];
    totalPrice: number;
    totalCount: number;
}

const initialState: CartSliceState = {
    allPizzas: [],
    totalPrice: 0,
    totalCount: 0,
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {

        addPizzaToCart: (state, action: PayloadAction<CartItemProps>) => {
            const findPizza = state.allPizzas.find((obj) => obj.id === action.payload.id);
            if (findPizza) {
                findPizza.count++;
            } else {
                state.allPizzas.push({
                    ...action.payload,
                    count: 1,
                });
            }
            totalPriceAndTotalCount(state);
        },

        minusPizzaFromCart: (state, action: PayloadAction<string>) => {
            const findPizza = state.allPizzas.find((obj) => obj.id === action.payload);

            if (findPizza?.count === 1) {
                state.allPizzas = state.allPizzas.filter((item) => item.id !== findPizza.id);
            } else {
                if (findPizza) {
                    findPizza.count--;
                }
            }
            totalPriceAndTotalCount(state);
        },

        removePizzaFromCart: (state, action: PayloadAction<string>) => {
            state.allPizzas = state.allPizzas.filter((item) => item.id !== action.payload);

            totalPriceAndTotalCount(state);
        },

        clearAllCart: (state) => {
            state.allPizzas = [];

            totalPriceAndTotalCount(state);
        },

        addPizzasToLocalStorage: (state, action: PayloadAction<CartItemProps[]>) => {
            state.allPizzas = action.payload;

            totalPriceAndTotalCount(state);
        }
    }
});


export const { addPizzaToCart, minusPizzaFromCart, removePizzaFromCart, clearAllCart, addPizzasToLocalStorage } = cartSlice.actions;

export default cartSlice.reducer;