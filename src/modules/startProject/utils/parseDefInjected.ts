import { DefInjected } from "../../../core/types/defInjected";

// Transforma el string inicial al tipo de dato DefInjected
// Ejemplo de defInjected: ApparelLayerDef: VFEC_OuterShell.label 'on top'
export const parseDefInjected = (str: string ): DefInjected => {
    const type = str.match(/[A-Za-z0-9]+/)![0];
    const name = str.match(/: [A-Za-z0-9._\-]+/)![0].slice(2);
    const text = str.match(/[\'\"].+[\'\"]/)![0].slice(1, -1);

    return {
        original: text,
        name,
        text,
        type
    }
}