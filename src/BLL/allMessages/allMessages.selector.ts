import { createSelector } from "reselect";

export const selectAllMessages = createSelector(
  (state: any) => state,
  (state) => state.allMessages
);
