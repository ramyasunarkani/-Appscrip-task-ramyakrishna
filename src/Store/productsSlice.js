import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  allProducts: [], 
  slectedProducts: [], 
};

export const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setProducts: (state, action) => {
      state.allProducts = action.payload;
      state.slectedProducts = action.payload; 
    },
    selectProduct: (state, action) => {
      state.slectedProducts = action.payload;
    },
  },
});

export const { setProducts, selectProduct } = productsSlice.actions;

export default productsSlice.reducer;