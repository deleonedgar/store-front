import { configureStore } from "@reduxjs/toolkit";
import customerReducer from "./slices/customer"
import { setupListeners } from "@reduxjs/toolkit/query"
import { customerApi } from "./api/customer";
import { googleApi } from "./api/google";


export const store = configureStore({
  reducer: {
    customer: customerReducer,
    [customerApi.reducerPath]: customerApi.reducer,
    [googleApi.reducerPath]: googleApi.reducer
  },
  middleware: ( getDefaultMiddleware ) => getDefaultMiddleware().concat(
    customerApi.middleware, 
    googleApi.middleware
  )
})

setupListeners(store.dispatch)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch