import { configureStore} from "@reduxjs/toolkit";
import characterReducer from "./characterSlice";

export const store = configureStore({
   reducer: {
      character: characterReducer
   }
});

// Tipamos el hook useSelector y useDispatch
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;