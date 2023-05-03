export default function GlobalReducer(state, { action, value }) {
    return {
        ...state,
        [action]: value
    };
}