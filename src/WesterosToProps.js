import StateToProps from './StateToProps'

class WesterosToProps extends StateToProps {
    static dragonFireProps(state) {
        const defaultProps = super.dragonFireProps(state)
        return {...defaultProps, disabled: (state.dragons.length % 2 === 1)}
    }
}

export default WesterosToProps