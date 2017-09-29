import React, {Component} from 'react';
import logo from '../assets/logo.svg';
import './App.css';
import KhaleesiMode from './KhaleesiMode'
import DragonFire from './DragonFire'
import Dragons from './Dragons'

class App extends Component {
    render() {
        return (
            <div className="App">
                <div className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h2>Welcome to React</h2>
                </div>
                <div style={{padding: '50px'}}>

                    <KhaleesiMode setKhaleesiMode={this.props.setKhaleesiMode}
                               {...this.props.khaleesiMode}/>

                    <DragonFire setDragonFire={this.props.setDragonFire}
                                {...this.props.dragonFire}/>

                    <Dragons addDragon={this.props.addDragon} {...this.props.dragons}/>
                </div>

                <div>
                    <p>Khaleesi: {this.props.khaleesiMode.value}</p>
                    <p>Dragons: {this.props.dragons.value.length}</p>
                    <p>Dragon Fire: {this.props.dragonFire.value}</p>
                </div>
            </div>
        );
    }
}

export default App;
