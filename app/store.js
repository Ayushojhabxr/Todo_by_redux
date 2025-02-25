import { configureStore } from "@reduxjs/toolkit";
import reducer from "../features/Todo/todoSlice";
export const store = configureStore({
  reducer: reducer

  
});