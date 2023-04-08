import Types from "../templates/Types"

const SettingsContent = {
    Apareance: [
        {
            Id: 1,
            Component: Types,
            Data: {
                text: 'Estilo/Tipo de fondo',
                definition: 'Determinara entre usar una imagen o color solido de fondo',
                selects: {
                    f: 'Color Solido',
                    l: 'Imagen/Gif'
                }
            }
        }
    ]
}

export default SettingsContent;