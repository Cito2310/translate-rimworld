import { useAppSelector } from "./core/store/store"
import { StartProjectPage } from "./modules/startProject/page/StartProjectPage"
import { TranslateSectionPage } from "./modules/translateSection/page/TranslateSectionPage"
import { useInitApp } from "./shared/hooks/useInitApp"


function App() {
  const { existData } = useAppSelector(state => state.currentProject)
  useInitApp()

  return (
    <div className="App min-h-screen bg-[#1F1F1F]">
      {
        existData ? <TranslateSectionPage />
        : <StartProjectPage />
      }
    </div>
  )
}

export default App