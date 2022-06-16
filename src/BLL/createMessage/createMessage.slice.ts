import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import feedbackServiceInstance from "../../DAL/feedbackService";
import {CreateMessageBodyTypes} from "../../types/serviceTypes";

export const createMessageThunk: any = createAsyncThunk(
        'createMessage/createMessageThunk',
        async (data: CreateMessageBodyTypes, {rejectWithValue}) => {
            try {
                return async () => await feedbackServiceInstance.createMessage(data)
            } catch (err) {
                return rejectWithValue(err)
            }
        }
    )
;

export const createMessage = createSlice({
    name: 'createMessage',
    initialState: {
        isPosting: true,
        errors: []
    },
    reducers: {},
    extraReducers: {
        [createMessageThunk.pending]: (state) => {
            state.isPosting = true;
        },
        [createMessageThunk.fulfilled]: (state) => {
            state.isPosting = false;
        },
        [createMessageThunk.rejected]: (state, action) => {
            state.errors = action.payload.data
            state.isPosting = false;
        },
    },
});

export default createMessage.reducer;