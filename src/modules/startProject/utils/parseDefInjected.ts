import { DefInjected } from "../../../core/types/defInjected";

// Transforma el string inicial al tipo de dato DefInjected
// Ejemplo de defInjected: ApparelLayerDef: VFEC_OuterShell.label 'on top'
export const parseDefInjected = (str: string, index: number, array: string[] ): DefInjected => {
    const type = str.match(/[A-Za-z0-9]+/)![0];
    const name = str.match(/: [A-Za-z0-9._\-]+/)![0].slice(2);
    const text = str.match(/[\'\"].+[\'\"]/)![0].slice(1, -1);
    const base = name.match( /[a-zA-Z0-9_]+/ )![0];

    // Seccion para obtener isFirstBase y isFirstType
    let isFirstBase = true;
    let isFirstType = true;
    const isFirstItem = index === 0;

    // Verifica si no es el primer item
    if (index !== 0) {
        // Obtiene datos de lastItem1
        const lastItem = array[index-1];
        const lastItemType = lastItem.match(/[A-Za-z0-9]+/)![0];
        const lastItemName = lastItem.match(/: [A-Za-z0-9._\-]+/)![0].slice(2);

        const lastItemBase = lastItemName.match( /[a-zA-Z0-9_]+/ )![0];

        isFirstBase = base !== lastItemBase;
        isFirstType = type !== lastItemType;
    }

    return {
        original: text,
        name,
        text,
        type,
        base,
        isFirstBase,
        isFirstType,
        isFirstItem,
    }
}