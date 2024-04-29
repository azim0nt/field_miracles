function globalReducer(state, payload) {
    switch (payload.type) {
        case "ChangeIsPlaying":
            return {...state, isPlaying: payload.isPlaying};
        default:
            return state
    }
}

export {
    globalReducer
}