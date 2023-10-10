import { createSlice } from "@reduxjs/toolkit"
import { RootState } from ".."
import { setCustomerProfileReducer } from "../reducers/customer"


export type CustomerProfile = {
  emailOrPhone: string | number,
  firstname: string,
  lastname: string
}

export type CustomerState = {
  profile: CustomerProfile,
}

const initialState: CustomerState = {
  profile: {
    emailOrPhone: "",
    firstname: "",
    lastname: ""
  },
}

export const customerSlice = createSlice({
  name: "customer",
  initialState,
  reducers: {
    setCustomerProfile: setCustomerProfileReducer,
  }
})

export const { setCustomerProfile } = customerSlice.actions
export const selectCustomerState = ( state: RootState ) => state.customer 


export default customerSlice.reducer