import React, {Component} from 'react';

class Root extends Component {

    get spaceForm() {
        if (this.props.display.createSpaceEnabled) {
            return (
                <div>fancy space form</div>
            )
        }
    }

    render() {
        console.log(this.props)
        return (
            <div>
                {this.props.spaces.map((space) => space.name)}
                {this.spaceForm}
                <button onClick={this.props.createSpaces}>CreateSpace</button>
            </div>
        )
    }
}

export default Root
