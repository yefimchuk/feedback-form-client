import { createSelector } from "reselect";
import {createMessage} from "./createMessage.slice";


export const selectCreateMessage = createSelector(
    (state: any) => state,
    (state) => state.createMessage.isPosting
);