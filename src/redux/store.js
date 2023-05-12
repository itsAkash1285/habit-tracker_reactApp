import { configureStore } from "@reduxjs/toolkit";
import habitReducer from './features/habitSlice';
const store = configureStore({
  reducer: {
    habits: habitReducer,
  },
});
export default store;