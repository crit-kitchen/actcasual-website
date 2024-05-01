
import _ from "lodash/fp"
import { useEffect } from "react"
import { useLocalStorageContext } from "./contexts/LocalStorageProvider"
import { MainPage } from "./pages/MainPage"

const App = () => {
  
  const {
    storedValues,
    LOCAL_STORAGE_KEYS,
    setStoredValue: setLocalStorage,
  } = useLocalStorageContext()

  useEffect(()=>{
    setLocalStorage(LOCAL_STORAGE_KEYS.SHOULD_RESPAWN, false)
    setLocalStorage(LOCAL_STORAGE_KEYS.PLAYER_NAME, null)
  }, [])

  return (
    <>
      
      <MainPage />

    </>
  )
}

export default App
