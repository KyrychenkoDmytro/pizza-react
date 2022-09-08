import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    sortId: { name: 'Popularity', property: 'rating' },
    categoryId: 0,
    searchValue: '',
    currentPage: 1,
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
        },
        saveSearchValue: (state, action) => {
            state.searchValue = action.payload;
        },
        saveCurrentPage: (state, action) => {
            state.currentPage = action.payload;
        },
        saveUrlParams: (state, action) => {
            state.currentPage = Number(action.payload.currentPage);
            state.categoryId = Number(action.payload.categoryId);
            state.sortId = action.payload.sortId;
        }
    }
});


export const { saveSortId, saveCategoryId, saveSearchValue, saveCurrentPage, saveUrlParams } = sortingSlice.actions;

export default sortingSlice.reducer;