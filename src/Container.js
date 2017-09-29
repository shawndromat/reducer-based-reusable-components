import {connect} from 'react-redux'
import {setKhaleesiMode, addDragon, setDragonFire} from "./actions";
import App from './components/App'
import WesterosToProps from './WesterosToProps'


const mapStateToProps = state => {
    return WesterosToProps.toProps(state)
}

const mapDispatchToProps = (dispatch) => {
    return {
        setKhaleesiMode: khaleesiMode => {
            dispatch(setKhaleesiMode(khaleesiMode))
        },
        addDragon: dragon => {
            dispatch(addDragon(dragon))
        },
        setDragonFire: dragonFire => {
            dispatch(setDragonFire(dragonFire))
        }
    }
}

const Container = connect(
    mapStateToProps,
    mapDispatchToProps
)(App)

export default Container
/**
 * state:
 {
     khaleesiMode: "Limit",
     dragonFire: null,
     dragons: []
 }

 props:
 {
     khaleesiMode: {
         value: "Limit",
         disabled: false
     },
     dragonFire: {
         value: null,
         disabled: false
     },
     dragons: {
         value: [],
         disabled: false
     }
 }
 **/