import { DefInjected } from "./defInjected"
import { Keyed } from "./keyed"

export interface DataApp {
    currentProject: {
        defInjected: DefInjected[]
        keyed: Keyed[]
        name: string
        lastSave: Date
        
    }
}