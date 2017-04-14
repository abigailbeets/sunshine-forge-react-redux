const display = (state = {}, action) => {
    if (!action || !action.type) {
        return state
    }

    let newState = state
    switch (action.type) {
        case 'SHOW_FORM':
            debugger
            return {
                createSpaceEnabled: true
            }
    }
    return newState

}

export default display