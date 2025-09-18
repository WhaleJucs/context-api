import { createContext, useReducer } from "react";

export const TitleColorContext = createContext()

export const titleColorReducer = (state, action) => {
    // switch
}

export const TitleColorContextProvider = ({children}) => {

    const [state, dispatch] = useReducer(titleColorReducer, { color: "blue" })

    console.log("Title Color Context: ", state)

    return <TitleColorContext.Provider value={{ ...state }}>{children}</TitleColorContext.Provider>
}