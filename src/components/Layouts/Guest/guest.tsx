import React from "react"
import { Footer } from "./footer"
import { Header } from "./header"


type GuestProps = { children: React.ReactNode }

function Guest({ children }: GuestProps) {

    return (
        <div>
            <Header />
            { children }
            <Footer />
        </div>
    )
}

export default Guest