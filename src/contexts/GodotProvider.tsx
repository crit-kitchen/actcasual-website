import React from "react"
import { createContext, useContext, useReducer } from "react"

export enum GODOT_ACTIONS {
  ENABLE_VISIBILITY = "ENABLE_VISIBILITY",
  DISABLE_VISIBILITY = "DISABLE_VISIBILITY",
}

interface GodotContextState {
  isVisible: boolean
  GODOT_ACTIONS: typeof GODOT_ACTIONS
}

const initialState: GodotContextState = {
  isVisible: false,
  GODOT_ACTIONS,
}

interface Action {
  type: string
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  payload?: any
}

type ContextProps = [GodotContextState, React.Dispatch<Action>]

export const GodotContext = createContext<ContextProps>([
  initialState,
  () => console.error("Place a Provider In A Parent Node to get a Theme"),
])

export const useGodotContext = (): ContextProps => useContext(GodotContext)

const reducer = (state: GodotContextState, action: Action) => {
  switch (action.type) {
    case GODOT_ACTIONS.ENABLE_VISIBILITY:
      return { ...state, isVisible: true }
    case GODOT_ACTIONS.DISABLE_VISIBILITY:
      return { ...state, isVisible: false }
    default:
      console.error("The Reducer can't handle these inputs:", state, action)
      return state
  }
}

const GodotProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(reducer, initialState)
  return (
    <GodotContext.Provider value={[{ ...state, GODOT_ACTIONS }, dispatch]}>
      {children}
    </GodotContext.Provider>
  )
}
export default GodotProvider
