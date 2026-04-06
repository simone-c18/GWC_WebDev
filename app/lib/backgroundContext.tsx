"use client"
import React, { createContext, useContext, useState, ReactNode } from "react"
import {Circle} from "./Circle"


type BackgroundContextType = {
  circles: Circle[]
  setCircles: React.Dispatch<React.SetStateAction<Circle[]>>
}

const BackgroundContext = createContext<BackgroundContextType | undefined>(undefined)

export function BackgroundProvider({ children }: {children: ReactNode}) {
  const [circles, setCircles] = useState<Circle[]>([])

  return (
    <BackgroundContext.Provider value={{ circles, setCircles }}>
      {children}
    </BackgroundContext.Provider>
  )
}

export function useBackground() {
  const context = useContext(BackgroundContext);

  if (!context) {
    throw new Error("useBackground must be used within a BackgroundProvider");
  }

  return context;
}