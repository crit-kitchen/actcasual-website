
import { useGodotContext } from "../src/contexts/GodotProvider"
import _ from "lodash/fp"
import { useEffect } from "react"
import { useLocalStorageContext } from "./contexts/LocalStorageProvider"
import { MainPage } from "./pages/MainPage"

const App = () => {
  const [{ /*isVisible,*/ GODOT_ACTIONS }, dispatchGodot] = useGodotContext()
  
  const {
    storedValues,
    LOCAL_STORAGE_KEYS,
    setStoredValue: setLocalStorage,
  } = useLocalStorageContext()


  // have a hidden button that godot can toggle to open & close
  const disableVisibility = () => {
    dispatchGodot({ type: GODOT_ACTIONS.DISABLE_VISIBILITY })
  }
  const enableVisibility = () => {
    dispatchGodot({ type: GODOT_ACTIONS.ENABLE_VISIBILITY })
  }

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
