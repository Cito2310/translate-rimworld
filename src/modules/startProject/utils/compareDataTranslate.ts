import { DataTranslate } from '../../../core/types/dataTranslate';
import { DefInjected } from '../../../core/types/defInjected';
import { Keyed } from '../../../core/types/keyed';

export const compareDataTranslate = (
    { exclude, translate }: {translate: DataTranslate, exclude: DataTranslate}
): DataTranslate => {

    // Compara los datos de los defInjected
    const defInjectedCompare = translate.defInjected.reduce((prev, curr) => {
        if ( exclude.defInjected.find((value => value.text === curr.text)) ) return prev;
        
        return [...prev, curr]
    }, [] as DefInjected[])
    
    
    // Compara los datos de los keyed
    const keyedCompare = translate.keyed.reduce((prev, curr) => {
        if ( exclude.keyed.find((value => value.text === curr.text)) ) return prev;

        return [...prev, curr]
    }, [] as Keyed[])

    
    return {
        defInjected: defInjectedCompare,
        keyed: keyedCompare,
    }
}