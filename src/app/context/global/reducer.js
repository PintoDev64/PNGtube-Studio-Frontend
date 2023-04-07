export default function GlobalReducer(state, { action, value }) {
    // Add dictionaries
    const dictionary = {
        color: {
            ...state,
            color: value
        },
        wallpaper: {
            ...state,
            wallpaper: value
        },
        type: {
            ...state,
            type: value
        },
        settings: {
            ...state,
            settings: value
        }
    }

    return dictionary[action];
}