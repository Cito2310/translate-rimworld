import { DataToCompare } from '../../../core/types/dataToCompare';
import { DataTranslate } from '../../../core/types/dataTranslate';
import { parseDefInjected } from './parseDefInjected';
import { parseKeyed } from './parseKeyed';

export const compareDataTranslateAndParse = (
    { exclude, translate }: {translate: DataToCompare, exclude: DataToCompare}
): DataTranslate => {

    // Compara los datos de los defInjected
    const defInjectedCompare = translate.defInjected.reduce((prev, curr) => {
        if ( exclude.defInjected.find((value => value === curr)) ) return prev;
        
        return [...prev, curr]
    }, [] as string[])
    

    // Compara los datos de los keyed
    const keyedCompare = translate.keyed.reduce((prev, curr) => {
        if ( exclude.keyed.find((value => value === curr)) ) return prev;

        return [...prev, curr]
    }, [] as string[])

    
    return {
        defInjected: defInjectedCompare.map( parseDefInjected ),
        keyed: keyedCompare.map( parseKeyed ),
    }
}