export default function AudioReducer(state, { action, value }) {
    return {
        ...state,
        [action]: value
    };
}