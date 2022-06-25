import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import feedbackServiceInstance from "../../DAL/feedbackService";

export const fetchMessages: any = createAsyncThunk(
        'allMessages/fetchMessages',
        async ({}, {rejectWithValue}) => {
            try {
                return await feedbackServiceInstance.fetchMessages()
            } catch (err) {
                return rejectWithValue(err)
            }
        }
    )
;

export const allMessages = createSlice({
    name: 'allMessage',
    initialState: {
        dataMessages: [],
        isLoading: true,
        errors: []
    },
    reducers: {},
    extraReducers: {
        [fetchMessages.pending]: (state) => {
            state.isLoading = true;
        },
        [fetchMessages.fulfilled]: (state, action) => {
            state.dataMessages = action.payload.data

            state.isLoading = false;
        },
        [fetchMessages.rejected]: (state, action) => {

            state.errors = action.payload
            state.isLoading = false;
        },
    },
});

export default allMessages.reducer;