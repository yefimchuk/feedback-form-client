import { createSelector } from "reselect";

export const selectCreateMessage = createSelector(
  (state: any) => state,
  (state) => state.createMessage.isPosting
);
