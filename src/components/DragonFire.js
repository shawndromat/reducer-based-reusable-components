import React, { Component } from 'react'

class DragonFire extends Component {
    onChange(e){
        this.props.setDragonFire(e.target.value)
    }

    hiddenStyle() {
        console.log(this.props)
        return {display: (this.props.hidden ? 'none' : 'inline-block')}
    }

    render() {
        return <label style={this.hiddenStyle()}>
            Dragon Fire
            <input type="text" value={this.props.dragonFire}
                   onChange={this.onChange.bind(this)}
                   disabled={this.props.disabled}/>
        </label>
    }
}

export default DragonFire;
