
import { MainPage } from "./pages/MainPage"
import { LinksPage } from "./pages/LinksPage"

const App = () => {
  const isLinks = window.location.pathname === '/links'
  return isLinks ? <LinksPage /> : <MainPage />
}

export default App
