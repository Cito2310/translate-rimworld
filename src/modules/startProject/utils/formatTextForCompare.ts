import { DataTranslate } from "../../../core/types/dataTranslate";
import { parseDefInjected } from "./parseDefInjected";
import { parseKeyed } from "./parseKeyed";

export const formatTextForCompare = (text:string): DataTranslate => {
    // 1. Primero divide todo el texto en sus lineas, que están partidas por "\r\n"
    const splitText = text.split("\r\n");

    // 2. Reduce que se encarga de unificar las lineas según los segmentos del texto
    // Obteniendo los textos de defInjected y keyed, además del resto de segmentos irrelevantes
    const textInArray = splitText.reduce<string[][]>((prev, curr) => { 
        // Cada segmento comienza con un "=" que forma parte del titulo
        // Por lo que verifica si la linea actual lo posee
        // Si lo posee significa que comenzo un nuevo segmento
        if ( curr[0] === "=" ) return [...prev, [curr]];
    
        // Verifica que la linea que esta leyendo no esta vacia
        if (curr.length) prev[prev.length-1]?.push( curr );
    
        return prev;
    }, []);

    // 3. Extrae los dos segmentos relevantes el defInjected y el keyed
    // El slice(1) elimina la primera linea del array, que es solamente el titulo del segmento
    const defInjectedRaw = textInArray[3].slice(1);
    const keyedRaw = textInArray[2].slice(1);

    // 4. Formatear las lineas de keyed y defInjected al formato establecido
    const keyed = keyedRaw.map( parseKeyed)
    const defInjected = defInjectedRaw.map( parseDefInjected )

    return {
        keyed,
        defInjected
    };
}