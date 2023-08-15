import {configureStore} from "@reduxjs/toolkit";
import counterSlice from "@/app/slices/CounterSlice";

export default configureStore({
    reducer: {
        counter: counterSlice
    }
})