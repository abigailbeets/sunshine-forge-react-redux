import {createStore} from 'redux'
import reducers from './reducers'
import React from 'react'
import ReactDOM from 'react-dom'
import {Provider, connect} from 'react-redux'
import Root from './Root'
import {SPACE_CREATED, SPACE_UPDATED} from './actionTypes'

function mapStateToProps(state) {
    return {
        ...state
    }
}

function mapDispatchToProps(dispatch) {
    return {
        createSpaces: ()=>{dispatch({type: 'SHOW_FORM'})}
    }
}

window.onload = () => {
    fetch("http://localhost:8080/spaces")
        .then(response => response.json())
        .then(spaces => {
            const store = createStore(reducers, {spaces: spaces, display: {createSpaceEnabled: false}})

            const ConnectedRoot = connect(mapStateToProps, mapDispatchToProps)(Root)

            ReactDOM.render(
                <Provider store={store}>
                    <ConnectedRoot />
                </Provider>,
                document.getElementById('root')
            )
        })
}