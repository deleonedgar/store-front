import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"


export const customerApi = createApi({
  reducerPath: "customerApi",
  // Change baseurl from .env
  baseQuery: fetchBaseQuery({ baseUrl: "/" }),
  endpoints: builder => ({
    getCustomerProfile: builder.query<any, string>({
      query: name => `/customer/${ name }`
    })
  })
})

export const { useGetCustomerProfileQuery } = customerApi