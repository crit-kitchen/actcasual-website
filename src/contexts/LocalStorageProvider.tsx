import React from "react"
/* eslint-disable @typescript-eslint/no-explicit-any */
import { createContext, useContext, useState } from "react"
import _ from "lodash/fp"

export enum LOCAL_STORAGE_KEYS {
  MASTER_VOLUME = "MASTER_VOLUME",
  MUSIC_VOLUME = "MUSIC_VOLUME",
  PROFANITY_FILTER_ENABLED = "PROFANITY_FILTER_ENABLED",
  PLAYER_NAME = "PLAYER_NAME",
  SHOULD_RESPAWN = "SHOULD_RESPAWN",
}

const initialState = _.flow(
  Object.values,
  _.map((value) => {
    const rawStoredItem = window.localStorage.getItem(value) || undefined
    return [value, rawStoredItem ? JSON.parse(rawStoredItem) : rawStoredItem]
  }),
  Object.fromEntries
)(LOCAL_STORAGE_KEYS)

type SetStoredValueProps = {
  (key: LOCAL_STORAGE_KEYS, value?: any): void
}

type LocalStorageContextState = {
  storedValues: boolean
  setStoredValue: SetStoredValueProps
  LOCAL_STORAGE_KEYS: typeof LOCAL_STORAGE_KEYS
}

export const LocalStorageContext: React.Context<LocalStorageContextState> =
  createContext({
    storedValues: initialState,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    setStoredValue: (_key, _value) =>
      console.error("Place a Provider In A Parent Node to get a Theme"),
    LOCAL_STORAGE_KEYS,
  })

export const useLocalStorageContext = (): LocalStorageContextState =>
  useContext(LocalStorageContext)

// This is built to mimic local storage
const LocalStorageProvider = ({ children }: { children: React.ReactNode }) => {
  const [storedValues, setStoredValues] = useState(initialState)

  const setStoredValue: SetStoredValueProps = (key, value) => {
    setStoredValues((currentValues: any) => {
      if (value) {
        const stringifiedValue = JSON.stringify(value)
        window.localStorage.setItem(key, stringifiedValue)
        return {
          ...currentValues,
          [key]: value,
        }
      } else {
        window.localStorage.removeItem(key)
        return {
          ...currentValues,
          [key]: undefined,
        }
      }
    })
  }

  return (
    <LocalStorageContext.Provider
      value={{ storedValues, setStoredValue, LOCAL_STORAGE_KEYS }}
    >
      {children}
    </LocalStorageContext.Provider>
  )
}
export default LocalStorageProvider
