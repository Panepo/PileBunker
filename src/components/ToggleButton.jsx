import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class ToggleButton extends Component {
  handlePropFunc = () => {
    const { propFunc, modelId } = this.props
    propFunc(modelId)
  }

  render() {
    const {
      modelSwitch,
      modelTitle,
      modelId,
      modelClassActive,
      modelClassInactive,
      modelKey
    } = this.props
    let handlePropFunc = this.handlePropFunc.bind(this)
    let bClassName =
      modelSwitch === modelId ? modelClassActive : modelClassInactive

    return (
      <button className={bClassName} onClick={handlePropFunc} key={modelKey}>
        {modelTitle}
      </button>
    )
  }
}

ToggleButton.propTypes = {
  modelKey: PropTypes.string,
  modelSwitch: PropTypes.string,
  modelTitle: PropTypes.string,
  modelId: PropTypes.string,
  modelClassActive: PropTypes.string,
  modelClassInactive: PropTypes.string,
  propFunc: PropTypes.func
}

ToggleButton.defaultProps = {
  modelKey: 'ToggleButton',
  modelSwitch: '0',
  modelTitle: 'ToggleButton',
  modelId: 'ToggleButton',
  modelClassActive:
    'type-button mdl-button mdl-js-button mdl-js-ripple-effect mdl-button--primary',
  modelClassInactive:
    'type-button mdl-button mdl-js-button mdl-js-ripple-effect mdl-button--accent'
}
