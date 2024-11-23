import { Product } from "@/types/ProductType";
import { configureStore, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { useDispatch, useSelector, useStore } from "react-redux";

export interface cartState {
  products: Array<Product>
} 

const initialCartState : cartState = {
 products: [] 
}
const cartSlice = createSlice({
  name: 'Cart',
  initialState: initialCartState,
  reducers: {
    setProducts: (state, action: PayloadAction<Array<Product>>) => {
      state.products = action.payload;
    }
  },
})
export const makeStore = () => {
  return configureStore({
    reducer:{
      cartReducer: cartSlice.reducer
    }
  })
}


export const {setProducts} = cartSlice.actions;

export type AppStore = ReturnType<typeof makeStore>
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']
export const useAppDispatch = useDispatch.withTypes<AppDispatch>()
export const useAppSelector = useSelector.withTypes<RootState>()
export const useAppStore = useStore.withTypes<AppStore>()