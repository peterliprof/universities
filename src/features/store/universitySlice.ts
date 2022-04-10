import {
    createSlice, createSelector,
    createAsyncThunk,
} from '@reduxjs/toolkit';

import { RootState } from '../../app/store';
import { UniversitiesState } from '../../app/types';
import { getUniversities } from './universitiesAPI';
import { url as urlSource } from '../../app/data';

const initialState: UniversitiesState = {

    universities: [],
    status: ''
};

export const fetchUniversities = createAsyncThunk('universities/fetchUniversities', async (country: string) => {

    const url: string = urlSource + country;
    const response = await fetch(url);

    return response.json();

})

export const universitiesSlice = createSlice({
    name: 'universities',
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {

        builder.addCase(fetchUniversities.fulfilled, (state, action) => {

            state.universities = getUniversities(action.payload);
            state.status = 'idle';

        }).addCase(fetchUniversities.pending, (state, action) => {
            state.status = 'pending';
        })
    }
});

const selectSelf = (state: RootState) => state
export const selectUniversities = createSelector(selectSelf, (state: RootState) => state.universities);
export const selectStatus = createSelector(selectSelf, (state: RootState) => state.status);


export default universitiesSlice.reducer;