import { Product } from "@/types/ProductType";
import { configureStore, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { useDispatch, useSelector, useStore } from "react-redux";

export interface cartState {
[Key: string] : {
  title: string,
  image: string,
  amount: number,
}
}

const initialCartState : cartState = {

}
const cartSlice = createSlice({
  name: 'Cart',
  initialState: initialCartState,
  reducers: {
    addAProduct: (state, action: PayloadAction<Product>) => {
      if(state[action.payload.id]) {
        state[action.payload.id].amount += 1;
      }
      if(!state[action.payload.id]) {
        state[action.payload.id] = {
          title: action.payload.title,
          image: action.payload.image,
          amount: 1
        }
      }
    },
    clearProucts: (state) => {
      state = {};
    }
  },
})
export const makeStore = () => {
  return configureStore({
    reducer:{
      cart: cartSlice.reducer
    }
  })
}


export const {clearProucts} = cartSlice.actions;

export type AppStore = ReturnType<typeof makeStore>
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']
export const useAppDispatch = useDispatch.withTypes<AppDispatch>()
export const useAppSelector = useSelector.withTypes<RootState>()
export const useAppStore = useStore.withTypes<AppStore>()