import { CartProduct } from "@/types/ProductType";
import { configureStore, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { useDispatch, useSelector, useStore } from "react-redux";




const initialCartState : Array<CartProduct> = [

]

const initialAnimState :{ animation: string} = {
  animation: ""
};

const animationSlice = createSlice({
  name: "Anim",
  initialState: initialAnimState,
  reducers: {
    setAnimation: (state, action: PayloadAction<string>) => {
      state.animation = action.payload;
    },
    stopAnimation: (state) => {
      state.animation = "";
    }
  }
});

const cartSlice = createSlice({
  name: 'Cart',
  initialState: initialCartState,
  reducers: {
    addProduct: (state, action: PayloadAction<CartProduct>) => {
      console.log(action.payload)
      state.push(action.payload);
      return state;
    },
    removeProduct: (state, action: PayloadAction<number>) => {
      state.splice(action.payload, 1);
      return state;
    },
    clearProducts: (state) => {
      state = [];
      return state;
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


export const {clearProducts, addProduct, removeProduct} = cartSlice.actions;
export const {stopAnimation, setAnimation} = animationSlice.actions;

export type AppStore = ReturnType<typeof makeStore>
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']
export const useAppDispatch = useDispatch.withTypes<AppDispatch>()
export const useAppSelector = useSelector.withTypes<RootState>()
export const useAppStore = useStore.withTypes<AppStore>()