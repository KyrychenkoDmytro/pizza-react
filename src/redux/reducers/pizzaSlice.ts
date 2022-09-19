import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from '../../axios';
import { PizzaBlockProps } from '../../Containers/Home/PizzaBlock/PizzaBlock';

export const fetchPizza = createAsyncThunk(
    'pizza/fetchPizzaStatus',
    async (params: Record<string, string>) => {
        const { sortBy, order, selectedСategory, search, page } = params;
        const { data } = await axios.get<PizzaBlockProps[]>(sortBy + order + selectedСategory + search + page);
        return data;
    },
)

export enum Status {
    LOADING = 'loading',
    SUCCESS = 'success',
    ERROR = 'error',
}

interface PizzaSliceState {
    items: PizzaBlockProps[];
    status: Status;
}

const initialState: PizzaSliceState = {
    items: [],
    status: Status.LOADING, // loading | success | error
}

export const pizzaSlice = createSlice({
    name: 'pizza',
    initialState,
    reducers: {
    },
    extraReducers: (builder) => {
        builder.addCase(fetchPizza.pending, (state) => {
            state.status = Status.LOADING;
            state.items = [];
        })
        builder.addCase(fetchPizza.fulfilled, (state, action) => {
            state.status = Status.SUCCESS;
            state.items = action.payload;
        })
        builder.addCase(fetchPizza.rejected, (state) => {
            state.status = Status.ERROR;
            state.items = [];
        })
    }
});

export default pizzaSlice.reducer;