import { useAppSelector } from "./core/store/store"
import { StartProjectPage } from "./modules/startProject/page/StartProjectPage"
import { TranslateSectionPage } from "./modules/translateSection/page/TranslateSectionPage"


function App() {
  const { existData } = useAppSelector(state => state.currentProject)

  return (
    <div className="App min-h-screen bg-[#1F1F1F]">
      {
        existData ? <TranslateSectionPage />
        : <StartProjectPage />
      }
      
      {/* <input type="file" onChange={onLoadExcludeData}/> */}
      {/* Hello World */}
    </div>
  )
}

export default App