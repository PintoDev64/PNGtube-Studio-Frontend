export default function GlobalReducer(state, { action, value }) {
    // Add dictionaries
    const dictionary = {
        color: () => {
            return {
                ...state,
                color: value
            }
        },
        wallpaper: () => {
            return {
                ...state,
                wallpaper: value
            }
        },
        type: () => {
            return {
                ...state,
                type: value
            }
        },
    }

    dictionary[action]();
}