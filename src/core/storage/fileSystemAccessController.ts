type Extension = "json"

const extensions = {
    json: {type: "application/json", ext: ".json", description: "Archivo JSON"}
}

export const fileSystemAccessController = {
    async save(parameters: {
        nameFile: string;
        data: any;
        extension: Extension;
    }) {
        const { data, extension, nameFile } = parameters;
        const { description, ext, type } = extensions[extension];

        // @ts-ignore
        const handle = await window.showSaveFilePicker({
            suggestedName: `${nameFile}${ext}`,
            types: [{ description, accept: { [type]: [ext] } }],
          });

        const writable = await handle.createWritable();

        await writable.write(JSON.stringify(data));
        await writable.close();     
    },
    
    async get(parameters: {
        extension: Extension;
        multiple?: boolean
    }) {
        const { extension, multiple } = parameters;
        const { description, ext, type } = extensions[extension];

        // @ts-ignore
        const [fileHandle] = await window.showOpenFilePicker({
            types: [{ description, accept: { [type]: [ext] } }],
            multiple
          });
          
        const file = await fileHandle.getFile();
        const contents = await file.text();
        
        return JSON.parse(contents)
    },
}