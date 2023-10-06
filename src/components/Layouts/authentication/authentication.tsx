import React from "react"
import { Header } from "./header"
import { Footer } from "./footer"


type AuthenticationProps = {
  children: React.ReactNode
}

const Authentication = ({ children }: AuthenticationProps) =>{

  return (
    <>
      <Header />
      { children }
      <Footer />
    </>
  )
}


export default Authentication