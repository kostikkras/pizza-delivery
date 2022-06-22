import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    categoryId: 0,
    // currentPage: 1,
    sort: {
        name: 'популярности',
        sortProperty: 'rating',
    },
};

const filterSlice = createSlice({
    name: 'filters',
    initialState,
    reducers: {
        setCategiryId(state, action) {
            state.categoryId = action.payload;
        },
        setSort(state, action) {
            state.sort = action.payload;
        },
        // setCurrentPage(state, action) {
        //     state.currentPage = action.payload;
        // },
    },
});
//setCurrentPage
export const { setCategiryId, setSort } = filterSlice.actions;

export default filterSlice.reducer;
