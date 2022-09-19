import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type SortIdState = {
    name: string;
    property: 'rating' | 'price' | 'title' | '-rating' | '-price' | '-title';
}

export type UrlParams = {
    sortId: SortIdState;
    categoryId: number;
    currentPage: number;
}

interface HomeSliceState {
    sortId: SortIdState,
    categoryId: number;
    searchValue: string;
    currentPage: number;
    isSearch: boolean;
}

const initialState: HomeSliceState = {
    sortId: { name: 'Popular(DESC)', property: 'rating' },
    categoryId: 0,
    searchValue: '',
    currentPage: 1,
    isSearch: false,
}

export const homeSlice = createSlice({
    name: 'home',
    initialState,
    reducers: {
        saveSortId: (state, action: PayloadAction<SortIdState>) => {
            state.sortId = action.payload;
        },
        saveCategoryId: (state, action: PayloadAction<number>) => {
            state.categoryId = action.payload;
        },
        saveSearchValue: (state, action: PayloadAction<string>) => {
            state.searchValue = action.payload;
        },
        saveCurrentPage: (state, action: PayloadAction<number>) => {
            state.currentPage = action.payload;
        },
        saveUrlParams: (state, action: PayloadAction<UrlParams>) => {
            state.currentPage = Number(action.payload.currentPage);
            state.categoryId = Number(action.payload.categoryId);
            state.sortId = action.payload.sortId;
        },
        isSearchUrl:(state,action : PayloadAction<boolean>) => {
            state.isSearch = action.payload;
        }
    },
});


export const { saveSortId, saveCategoryId, saveSearchValue, saveCurrentPage, saveUrlParams, isSearchUrl } = homeSlice.actions;

export default homeSlice.reducer;