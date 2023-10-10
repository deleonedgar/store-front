import {
  CaseReducer,
  PayloadAction } from "@reduxjs/toolkit"
import { 
  CustomerProfile, 
  CustomerState } from "../slices/customer"


type CustomerReducer<Action> = CaseReducer<CustomerState, PayloadAction<Action>>

export const setCustomerProfileReducer: CustomerReducer<CustomerProfile> = ( state, action ) =>{
  state.profile = action.payload
}