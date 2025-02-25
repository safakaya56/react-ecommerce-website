import { createSlice } from '@reduxjs/toolkit';

const getBasketFromStorage = () => {
    if (localStorage.getItem("basket")) {
        return JSON.parse(localStorage.getItem("basket"))
    }
    return [];
}

const saveBasketToStorage = (basket) => {
    localStorage.setItem("basket", JSON.stringify(basket))
}


const basketSlice = createSlice({
    name: "basket",
    initialState: {
        products: getBasketFromStorage()
    },
    reducers: {
        addToBasket: (state, action) => {
            const findProduct = state.products && state.products.find((product) => product.id == action.payload.id)
            if (findProduct) {
                findProduct.count += action.payload.count;
            }
            else {
                state.products.push(action.payload);
            }

            saveBasketToStorage(state.products)
        },

        removeFromBasket: (state, action) => {
            state.products = state.products.filter((product) => product.id !== action.payload);
            saveBasketToStorage(state.products)
        },

        updateProductCount: (state, action) => {
            const findProduct = state.products && state.products.find((product) => product.id == action.payload.id)
            findProduct.count = action.payload.newCount;
            saveBasketToStorage(state.products)
        }
    }

})

export const { addToBasket, removeFromBasket, updateProductCount } = basketSlice.actions

export default basketSlice.reducer