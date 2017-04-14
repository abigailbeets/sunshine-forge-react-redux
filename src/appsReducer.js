import App from './App'

const apps = (state = [], action) => {
    if (!action || !action.type) {
        return state
    }

    let newState = state
    let app
    switch (action.type) {
        case 'APP_CREATED':
            app = new App(action.id, action.appId, action.appName, action.spaceId)
            newState.push(app)
    }
    return newState

}

export default apps