import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
  cartTotalQuantity: 0,
  cartTotalAmount: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      const existingIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );
      if (existingIndex >= 0) {
        state.cartItems[existingIndex].cartQuantity += 1;
      } else {
        const tempProduct = { ...action.payload, cartQuantity: 1 };
        state.cartItems.push(tempProduct);
      }
      // Recalculate total quantity and amount
      state.cartTotalQuantity = state.cartItems.reduce((total, item) => total + item.cartQuantity, 0);
      state.cartTotalAmount = state.cartItems.reduce((total, item) => total + item.price * item.cartQuantity, 0);
    },
      removeFromCart(state, action) {
        const nextToCart = state.cartItems.filter(
          (item) => item.id !== action.payload.id
        );
        state.cartItems = nextToCart;
  
       
      },
      decreseCartQuantity(state, action) {
        const itemIndex = state.cartItems.findIndex(
          (cartItem) => cartItem.id === action.payload.id
        );
        if (state.cartItems[itemIndex].cartQuantity > 1) {
          state.cartItems[itemIndex].cartQuantity -= 1;
          
        } else if (state.cartItems[itemIndex].cartQuantity === 1) {
          const nextCartItem = state.cartItems.filter(
            (cartItem) => cartItem.id !== action.payload.id
          );
          state.cartItems = nextCartItem;
        }
      },
      calculateTotalAmount(state) {
        const totalAmount = state.cartItems.reduce((total, item) => {
          return total + item.price * item.cartQuantity;
        }, 0);
        state.cartTotalAmount = totalAmount;
      },
  },
  
});

export const { addToCart ,removeFromCart ,decreseCartQuantity ,calculateTotalAmount} = cartSlice.actions;
export default cartSlice.reducer;
