import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { plainChange, flyChange, monsChange, cannonChange } from '../actions'
import ToggleButton from '../components/ToggleButton'

class MenuToggle extends Component {
  render() {
    const {
      plain,
      plainChange,
      fly,
      flyChange,
      mons,
      monsChange,
      cannon,
      cannonChange,
      type
    } = this.props
    let toggleTemp = (
      <label key={'inputType_toggle_label'} htmlFor="plainType">
        地形適性：
      </label>
    )
    const toggleOut = []
    toggleOut.push(toggleTemp)
    toggleTemp = (
      <ToggleButton
        key={'inputType plain'}
        modelKey={'inputType plain'}
        modelSwitch={plain}
        modelTitle={'地形適性あり'}
        propFunc={modelId => {
          plainChange(modelId)
        }}
        modelId={'plain'}
        modelClassActive={
          'mdl-button mdl-js-button mdl-js-ripple-effect mdl-button--primary'
        }
        modelClassInactive={
          'mdl-button mdl-js-button mdl-js-ripple-effect mdl-button--accent'
        }
      />
    )
    toggleOut.push(toggleTemp)

    toggleTemp = (
      <label key={'inputFly_toggle_label'} htmlFor="flyType">
        飛行兜：
      </label>
    )
    toggleOut.push(toggleTemp)
    toggleTemp = (
      <ToggleButton
        key={'inputType fly'}
        modelKey={'inputType fly'}
        modelSwitch={fly}
        modelTitle={'飛行兜あり'}
        propFunc={modelId => {
          flyChange(modelId)
        }}
        modelId={'fly'}
        modelClassActive={
          'mdl-button mdl-js-button mdl-js-ripple-effect mdl-button--primary'
        }
        modelClassInactive={
          'mdl-button mdl-js-button mdl-js-ripple-effect mdl-button--accent'
        }
      />
    )
    toggleOut.push(toggleTemp)

    toggleTemp = (
      <label key={'inputMons_toggle_label'} htmlFor="flyType">
        妖怪：
      </label>
    )
    toggleOut.push(toggleTemp)
    toggleTemp = (
      <ToggleButton
        key={'inputType mons'}
        modelKey={'inputType mons'}
        modelSwitch={mons}
        modelTitle={'妖怪あり'}
        propFunc={modelId => {
          monsChange(modelId)
        }}
        modelId={'mons'}
        modelClassActive={
          'mdl-button mdl-js-button mdl-js-ripple-effect mdl-button--primary'
        }
        modelClassInactive={
          'mdl-button mdl-js-button mdl-js-ripple-effect mdl-button--accent'
        }
      />
    )
    toggleOut.push(toggleTemp)

    if (type === 'cannon' || type === 'hammer') {
      toggleTemp = (
        <label key={'inputCannon_toggle_label'} htmlFor="cannonType">
          直擊：
        </label>
      )
      toggleOut.push(toggleTemp)
      toggleTemp = (
        <ToggleButton
          key={'inputType cannon'}
          modelKey={'inputType cannon'}
          modelSwitch={cannon}
          modelTitle={'直擊あり'}
          propFunc={modelId => {
            cannonChange(modelId)
          }}
          modelId={'cannon'}
          modelClassActive={
            'mdl-button mdl-js-button mdl-js-ripple-effect mdl-button--primary'
          }
          modelClassInactive={
            'mdl-button mdl-js-button mdl-js-ripple-effect mdl-button--accent'
          }
        />
      )
      toggleOut.push(toggleTemp)
    }
    return toggleOut
  }
}

MenuToggle.propTypes = {
  type: PropTypes.string.isRequired,
  plain: PropTypes.string.isRequired,
  cannon: PropTypes.string.isRequired,
  fly: PropTypes.string.isRequired,
  mons: PropTypes.string.isRequired,
  plainChange: PropTypes.func.isRequired,
  flyChange: PropTypes.func.isRequired,
  monsChange: PropTypes.func.isRequired,
  cannonChange: PropTypes.func.isRequired
}

const mapStateToProps = state => {
  return {
    type: state.reducerCalc.type,
    plain: state.reducerCalc.plain,
    cannon: state.reducerCalc.cannon,
    fly: state.reducerCalc.fly,
    mons: state.reducerCalc.mons
  }
}

const mapDispatchToProps = dispatch => {
  return {
    plainChange: bindActionCreators(plainChange, dispatch),
    flyChange: bindActionCreators(flyChange, dispatch),
    monsChange: bindActionCreators(monsChange, dispatch),
    cannonChange: bindActionCreators(cannonChange, dispatch)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MenuToggle)
