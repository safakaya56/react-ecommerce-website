import { createSlice } from '@reduxjs/toolkit'


export const clickSlice = createSlice({
    name: "click",
    initialState: {
        click: false
    },
    reducers: {
        handleClick: (state) => {
            state.click = !state.click;
            console.log(state.click);
        }
    },

})

export const { handleClick } = clickSlice.actions

export default clickSlice.reducer