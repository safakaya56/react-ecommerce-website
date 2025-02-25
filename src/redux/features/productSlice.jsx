import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from "axios"

export const getAllProducts = createAsyncThunk("getAllProducts", async () => {
    const res = await axios.get("https://fakestoreapi.com/products")
    return res.data;

})

export const productSlice = createSlice({
    name: "product",
    initialState: {
        products: [],
        loading: false
    },
    reducers: {

    },
    extraReducers: (builder) => {
        builder.addCase(getAllProducts.pending, (state, action) => {
            state.loading = true;
        })
        builder.addCase(getAllProducts.fulfilled, (state, action) => {
            state.products = action.payload;
            state.loading = false;
        })

    }
})

export const { } = productSlice.actions

export default productSlice.reducer