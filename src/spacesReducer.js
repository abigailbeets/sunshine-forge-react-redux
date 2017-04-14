import Space from './Space'
import App from './App'

const spaces = (state = [], action) => {
    if (!action || !action.type) {
        return state
    }

    let newState = state
    let space, app
    switch (action.type) {
        case 'SPACE_CREATED':
            // space = new Space(action.id, action.name, action.memory, action.disk)
            // newState.push(space)
            return {
                ...newState,
                createSpaceEnabled: true
            }
            break

        case 'SPACE_UPDATED':
            space = newState.find((rightSpace) => rightSpace.id === Number(action.id))
            space.name = action.name;
            space.memoryQuotaMB = action.memoryQuotaMB;
            space.diskQuotaMB = action.diskQuotaMB;
            break

        case 'SPACE_DELETED':
            newState = newState.filter((space) => space.id !== action.id)
            break

        case 'APP_CREATED':
            space = newState.find((space) => space.id === action.id)
            app = new App(action.id, action.spaceId, action.appName, action.appMemory, action.appDisk)
            space.apps.push(app)
    }

    return newState
}

export default spaces