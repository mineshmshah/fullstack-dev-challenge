import React, { createContext, useReducer, FC } from 'react'
import { initialState } from './initialState'
import { reducer } from './reducer'
import {
    UpdateDetailsTypeInterface,
    ValidateDetailsTypeInterface,
    NextPageTypeInterface,
    StateInterface,
    AppProps,
    PreviousPageTypeInterface,
    ToggleModeInterface,
    ToggleCompoundingFrequencyInterface,
    UpdateCalculationsTypeInterface,
    UpdateInterestRateInterface,
    UpdateDataInterface,
    GoToPageInterface,
} from './store.interface'

/* istanbul ignore next */
export type DispatchType =
    | UpdateDetailsTypeInterface
    | UpdateCalculationsTypeInterface
    | UpdateDataInterface
    | ValidateDetailsTypeInterface
    | NextPageTypeInterface
    | ToggleModeInterface
    | ToggleCompoundingFrequencyInterface
    | PreviousPageTypeInterface
    | UpdateInterestRateInterface
    | GoToPageInterface

/* istanbul ignore next */
const AppContext = createContext<{
    state: StateInterface
    dispatch: React.Dispatch<DispatchType>
}>({
    state: initialState,
    dispatch: () => null,
})

const AppProvider: FC<AppProps> = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState)
    return <AppContext.Provider value={{ state, dispatch }}>{children}</AppContext.Provider>
}

export { AppContext, AppProvider }
