import { createSlice } from "@reduxjs/toolkit";

const initialState = []

export const favouriteSlice = createSlice({
    name: 'articles',
    initialState,
    reducers: {
        getAllArticles: (state, { payload: articles }) => {
            state.push(articles)
        }
    }
});

export const { action, reducer } = favouriteSlice