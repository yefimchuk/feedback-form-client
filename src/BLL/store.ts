import { configureStore } from "@reduxjs/toolkit";
import { createMessage } from "./createMessage/createMessage.slice";
import { allMessages, fetchMessages } from "./allMessages/allMessages.slice";

export const store = configureStore({
  reducer: {
    createMessage: createMessage.reducer,
    allMessages: allMessages.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export default store;
