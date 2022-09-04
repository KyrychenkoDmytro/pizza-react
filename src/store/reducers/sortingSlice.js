import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    sortId: { name: 'Popularity', property: 'rating' },
    categoryId: 0,
}

export const sortingSlice = createSlice({
    name: 'sorting',
    initialState,
    reducers: {
        saveSortId: (state, action) => {
            state.sortId = action.payload;
        },
        saveCategoryId: (state, action) => {
            state.categoryId = action.payload;
        }
    }
});


export const {saveSortId, saveCategoryId} = sortingSlice.actions;

export default sortingSlice.reducer;