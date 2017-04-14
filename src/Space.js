import React, {Component} from 'react';

export default class Space extends Component {
    constructor(props) {
        super(props)
        this.handler = this.handler.bind(this)
    }

    handler(amount) {
        return () => {this.props.actions.increment(amount)}
    }


    render() {
        return (
            <div className="App">
                <p id="space">{this.props.store.space}</p>
                <button onClick={this.handler(2)}>Two</button>
            </div>
        )
    }
}