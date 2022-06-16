import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';

export const fetchMessages: any = createAsyncThunk(
        'allMessages/fetchMessages',
        async (data, {rejectWithValue}) => {
            try {

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
            state.dataMessages = action.payload
            state.isLoading = false;
        },
        [fetchMessages.rejected]: (state, action) => {
            state.errors = action.payload.data
            state.isLoading = false;
        },
    },
});

export default allMessages.reducer;