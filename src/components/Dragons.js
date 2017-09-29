import React, { Component } from 'react'

class Dragons extends Component {
    handleChange(e) {
      this.props.addDragon(e.target.value)
    }

    render() {
        return <label>
            Dragons
            <input type="text" onChange={this.handleChange.bind(this)}/>
        </label>
    }
}

export default Dragons