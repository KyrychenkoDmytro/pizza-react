import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from '../../axios';

export const fetchPizza = createAsyncThunk(
    'pizza/fetchPizzaStatus',
    async (params) => {
        const {sortBy, selectedСategory, search, page } = params;
        const { data } = await axios.get(sortBy + selectedСategory + search + page);
        return data;
    },
)

const initialState = {
    items: [],
    status: 'loading', // loading | success | error
}

export const pizzaSlice = createSlice({
    name: 'pizza',
    initialState,
    reducers: {
    },
    extraReducers: {
        [fetchPizza.pending]: (state) => {
            state.status = 'loading';
            state.items = [];
        },
        [fetchPizza.fulfilled]: (state, action) => {
            state.status = 'success';
            state.items = action.payload;
        },
        [fetchPizza.rejected]: (state) => {
            state.status = 'error';
            state.items = [];
        },
    }
});

export default pizzaSlice.reducer;