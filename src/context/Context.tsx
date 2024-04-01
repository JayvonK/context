'use client'

import { createContext, useContext, useState } from "react"

// Creating Context
// Wrapping our app
// export our Custom Hook

// First lets define our context

interface IContextValue {
    pageTwoName: string,
    setPageTwoName: (pageTwoName: string) => void
}

// {} as IContextValue is just giving placeholder values

export const Context = createContext<IContextValue>({} as IContextValue);

// The functional component to pass the provided context to our children
// Letting our app know we can use pagetwo name and functoin
export const AppWrapper = ({ children, }: Readonly<{ children: React.ReactNode; }>) => {

    const [pageTwoName, setPageTwoName] = useState<string>("")

    return (
        <Context.Provider value={{pageTwoName, setPageTwoName}}>
            {children}
        </Context.Provider>
    )

}

// Our function that gives us access to our context values
export const useAppContext = () => {
    return useContext(Context)
}