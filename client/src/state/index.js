import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    isCartOpen: (false),
    isLoginOpen: (false),
    cart: [],
    items: [],
}

export const cartSliced = createSlice({
    name: "cart",
    initialState,
    reducers: {
        setItems: (state, action) => {
            state.items = action.payload;
        },


        addToCart: (state, action) => {
           
            state.cart = [...state.cart, action.payload.item]
        },


        removeFromCart: (state, action) => {
            state.cart = state.cart.filter((item) => item.id !== action.payload.id);
        },

        increaseCount: (state, action) => {
            state.cart = state.cart.map((item) => {
                if (item.id === action.payload.id) {
                    item.count++;
                }
                return item;
            });
        },

        decreaseCount: (state, action) => {
            state.card = state.cart.map((item) => {
                if (item.id === action.payload.id && item.count > 1) {
                    item.count--;
                }
                return item;
            });
        },

        setIsCartOpen: (state) => {
            state.isCartOpen = !state.isCartOpen;

        },

        setIsLoginOpen: (state) => {
            state.isLoginOpen = !state.isLoginOpen;

        }
    }
});

export const {
    setItems,
    addToCart,
    removeFromCart,
    increaseCount,
    decreaseCount,
    setIsCartOpen,
    setIsLoginOpen,
} = cartSliced.actions;

export default cartSliced.reducer;