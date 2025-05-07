export interface DefInjected {
    name: string;
    type: string;
    text: string;
    original: string;
    isFirstType: boolean;
    isFirstBase: boolean;
    isFirstItem: boolean;
    base: string;
    isComplete?: boolean;
}