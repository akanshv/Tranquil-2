import { createSlice } from "@reduxjs/toolkit";
import Axios from 'axios';
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";








// const user = useSelector((state) => state.auth.user);
const initialState = {
  cart: [],
  items: [],
  totalQuantity: 0,
  totalPrice: 0,
};

export const fetchProductData = (token) => async (dispatch) => {
    try {
      const response = await Axios.get(
        `${import.meta.env.VITE_BASE_URL}/products/getproducts`
        ,
        {headers: { 
            Authorization: token
         }},
      );
      console.log(response.data);
      dispatch(setProductData(response.data.products));
    } catch (error) {
      console.error("Error fetching product data:", error);
    }
};

export const fetchCartData = (userid,token) => async (dispatch) => {
  // const user = useSelector((state) => state.auth.user);
  try { 
    console.log(userid,token);
    const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/products/getcart`,{userId:userid},{
      headers: {
          authorization: token
      }
  })
    console.log(response.data)
    dispatch(setCartDataAction(response.data.products))
  } catch(e){
    console.log(e);
  }
}

// Define a regular action to set product data
const setProductData = (data) => ({
    type: "cart/setProductData",
    payload: data,
});

const setCartDataAction = (data) => ({
  type: "cart/setCartData",
  payload: data,
});

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      let find = state.cart.findIndex((item) => item.id === action.payload.id);
      if (find >= 0) {
        state.cart[find].quantity += 1;
      } else {
        state.cart.push(action.payload);
      }
    },

    getCartTotal: (state) => {
      let { totalQuantity, totalPrice } = state.cart.reduce(
        (cartTotal, cartItem) => {
          const { cutprice, quantity } = cartItem;
          const itemTotal = cutprice * quantity;
          cartTotal.totalPrice += itemTotal;
          cartTotal.totalQuantity += quantity;
          return cartTotal;
        },
        {
          totalPrice: 0,
          totalQuantity: 0,
        }
      );
      state.totalPrice = parseInt(totalPrice.toFixed(2));
      state.totalQuantity = totalQuantity;
    },

    // removeItem: (state, action) => {
    //   state.cart = state.cart.filter((item) => item.id !== action.payload);
    // },
    removeFromCart: (state, action) => {
      state.cart = state.cart.filter((item) => item.id !== action.payload.productId);
    },
    
    increaseItemQuantity: (state, action) => {
      state.cart = state.cart.map((item) => {
        if (item._id === action.payload) {
          return { ...item, quantity: item.quantity + 1 };
        }
        return item;
      });
    },

    decreaseItemQuantity: (state, action) => {
      state.cart = state.cart.map((item) => {
        if (item.id === action.payload) {
          return { ...item, quantity: item.quantity - 1 };
        }
        return item;
      });
    },

    setProductData: (state, action) => {
        state.items = action.payload;
    },
    
    setCartData: (state, action) => {
      state.cart = action.payload
      state.totalQuantity = 0;
      state.totalPrice = 0;
      for(let i = 0; i<action.payload.length; i++){
        state.totalQuantity += action.payload[i].count;
        state.totalPrice += (action.payload[i].count) * (action.payload[i].productId.Cutprice);
      }
      state.totalPrice = parseInt(state.totalPrice.toFixed(2));
    }
  },
});

export const {
  addToCart,
  getCartTotal,
  removeFromCart,
  increaseItemQuantity,
  decreaseItemQuantity,
  setCartData
} = cartSlice.actions;

export default cartSlice.reducer;
