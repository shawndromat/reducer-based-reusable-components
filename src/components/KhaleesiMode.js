import React, { Component } from 'react'

export default class KhaleesiMode extends Component {
    onChange(e) {
        this.props.setKhaleesiMode(e.target.value)
    }

    render() {
        return <label>
            Khaleesi Mode
            <input type="text" onChange={this.onChange.bind(this)}
                   disabled={this.props.disabled}/>
        </label>
    }
}