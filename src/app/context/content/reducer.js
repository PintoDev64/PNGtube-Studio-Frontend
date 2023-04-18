export default function ModelReducer(state, { action, value }) {
    // Add dictionaries
    const dictionary = {
        select: {
            ...state,
            value
        }
    }

    return dictionary[action];
}