class StateToProps {
    static toProps(state) {
        return {
            khaleesiMode: this.khaleesiModeProps(state),
            dragonFire: this.dragonFireProps(state),
            dragons: this.dragonsProps(state)
        }
    }

    static khaleesiModeProps(state) {
        return this.notDisabled(state.khaleesiMode)
    }

    static dragonFireProps(state) {
        return {
            value: state.dragonFire,
            hidden: state.khaleesiMode === 'ruling'
        }
    }

    static dragonsProps(state) {
        return this.notDisabled(state.dragons)
    }

    static notDisabled(propValue) {
        return {value: propValue, disabled: false}
    }
}

export default StateToProps