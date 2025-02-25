import { configureStore } from '@reduxjs/toolkit'
import productReducer from "../redux/features/productSlice"
import clickReducer from "../redux/features/clickSlice"
import basketReducer from "../redux/features/basketSlice"


export default configureStore({
    reducer: {
        product: productReducer,
        click: clickReducer,
        basket: basketReducer,

    },
})