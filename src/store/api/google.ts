import { 
  createApi, 
  fetchBaseQuery } from "@reduxjs/toolkit/query/react"


export const googleApi = createApi({
  reducerPath: "googleApi",
  // Change baseurl from .env
  baseQuery: fetchBaseQuery({ baseUrl: "https://www.googleapis.com/oauth2/v1/" }),
  endpoints: builder => ({
    getGoogleProfile: builder.query<any, string>({
      query: accessToken => ({
        url: `userinfo?access_token=${ accessToken }`,
        headers: {
          Authorization: `Bearer ${ accessToken }`,
          Accept: "application/json"
        },
        method: "GET"
      })
    })
  })
})

export const { useLazyGetGoogleProfileQuery } = googleApi