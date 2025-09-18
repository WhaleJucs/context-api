import { createContext, useReducer } from "react";

export const TitleColorContext = createContext()

export const titleColorReducer = (state, action) => {
    switch(action.type) {
        case 'RED':
            return { ...state, color: 'red' }
        case 'PURPLE':
            return { ...state, color: 'purple' }
        default:
            return state
    }
}

export const TitleColorContextProvider = ({children}) => {

    const [state, dispatch] = useReducer(titleColorReducer, { color: "blue" })

    console.log("Title Color Context: ", state)

    return <TitleColorContext.Provider value={{ ...state, dispatch }}>{children}</TitleColorContext.Provider>
}