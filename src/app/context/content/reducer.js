export default function ModelReducer(state, { action, value }) {
    return {
        ...state,
        [action]: value
    };
}