export const currentState = (state) => {
    return state.status
}

export const currentToken = (state) => {
    return state.token
}

export const userName = (state) => {
    return state.user?.username
}

export const role = (state) => {
    return state.user?.role
}