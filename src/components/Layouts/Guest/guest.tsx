import React from "react"
import { Footer } from "../../../components/layouts/Guest/footer"
import { Header } from "../../../components/layouts/Guest/header"


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