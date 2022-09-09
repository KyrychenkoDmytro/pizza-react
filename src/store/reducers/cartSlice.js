import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    allPizzas: [],
    totalPrice: 0,
    totalCount: 0,
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addPizzaToCart: (state, action) => {
            const findPizza = state.allPizzas.find((obj) => obj.id === action.payload.id);
            if (findPizza) {
                findPizza.count++;
            } else {
                state.allPizzas.push({
                    ...action.payload,
                    count: 1,
                });
            }
            state.totalPrice = state.allPizzas.reduce((sum, item) => {
                return item.count * item.price + sum;
            }, 0);

            state.totalCount = state.allPizzas.reduce((sum, item) => item.count + sum, 0);
        },
        minusPizzaFromCart: (state, action) => {
            const findPizza = state.allPizzas.find((obj) => obj.id === action.payload);

            if (findPizza.count === 1) {
                state.allPizzas = state.allPizzas.filter((item) => item.id !== findPizza.id);
            } else {
                findPizza.count--;
            }

            state.totalPrice = state.allPizzas.reduce((sum, item) => {
                return item.count * item.price + sum;
            }, 0);

            state.totalCount = state.allPizzas.reduce((sum, item) => item.count + sum, 0);
        },
        removePizzaFromCart: (state, action) => {
            state.allPizzas = state.allPizzas.filter((item) => item.id !== action.payload);

            state.totalPrice = state.allPizzas.reduce((sum, item) => {
                return item.count * item.price + sum;
            }, 0);

            state.totalCount = state.allPizzas.reduce((sum, item) => item.count + sum, 0);
        },
        clearAllCart: (state) => {
            state.allPizzas = [];

            state.totalPrice = state.allPizzas.reduce((sum, item) => {
                return item.count * item.price + sum;
            }, 0);

            state.totalCount = state.allPizzas.reduce((sum, item) => item.count + sum, 0);
        }
    }
});


export const { addPizzaToCart, minusPizzaFromCart, removePizzaFromCart, clearAllCart } = cartSlice.actions;

export default cartSlice.reducer;