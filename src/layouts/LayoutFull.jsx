import React from "react"
import { Footer } from "../components"

export const LayoutFull = ({ children }) => {
  return (
    <>
      <header>
      </header>
      {children}
      <Footer />
    </>
  )
}
