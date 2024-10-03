import React, { createContext, useState } from 'react'


export const LoadingContext =createContext()

export default function LoadingContextProvider({children}) {

    const[loading,setLoading]=useState(false)
  return (
    <div>
        <LoadingContext.Provider value={{loading,setLoading}}>
            {children}
        </LoadingContext.Provider>
      
    </div>
  )
}
