import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import feedbackServiceInstance from "../../DAL/feedbackService";
import { CreateMessageBodyTypes } from "../../types/serviceTypes";

export const createMessageThunk: any = createAsyncThunk(
  "createMessage/createMessageThunk",
  async (values: CreateMessageBodyTypes, { rejectWithValue }) => {
    try {
      return await feedbackServiceInstance.createMessage(values);
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);

export const createMessage = createSlice({
  name: "createMessage",
  initialState: {
    isPosting: true,
    errors: [],
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
      state.errors = action.payload.data;
      state.isPosting = false;
    },
  },
});

export default createMessage.reducer;
