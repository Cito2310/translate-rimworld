import { Keyed } from "../../../core/types/keyed"

// Transforma el string inicial al tipo de dato Keyed
// Ejemplo de keyed: VFEA.AbilityStatsPower 'Power' (English file: Abilities.xml:7)
export const parseKeyed = (str: string, index: number, array: string[] ): Keyed => {
    const name = str.match(/[a-zA-Z0-9_.]+/)![0]
    const text = str.match(/[\'\"].+[\'\"]/)![0].slice(1,-1)

    return {
        original: text,
        name,
        text,
        isFirstItem: index === 0,
    }
}