import React, { Component } from 'react'
import PropTypes from 'prop-types'
import * as parameters from '../constants/ConstParameters'

export default class InputBoxValue extends Component {
  constructor(props, context) {
    super(props, context)
    this.state = {
      text: this.props.modelValue
    }
    this.handleInput = this.handleInput.bind(this)
  }

  componentWillReceiveProps = nextProps => {
    this.setState({
      text: nextProps.modelValue
    })
  }

  handleInput = event => {
    const { propFunc } = this.props
    const modelId = event.target.id
    let modelValue = parseInt(event.target.value, 10)

    if (isNaN(modelValue)) {
      modelValue = 0
    } else if (
      modelId === 'skillSpdUpF' &&
      modelValue > parameters.maxskillSpdUpF
    ) {
      modelValue = parameters.maxskillSpdUpF
    } else if (
      modelId === 'skillSpdUpB' &&
      modelValue > parameters.maxskillSpdUpB
    ) {
      modelValue = parameters.maxskillSpdUpB
    }

    this.setState({ text: modelValue })
    propFunc(modelId, modelValue)
  }

  render() {
    const { modelTitle, modelId, modelClass } = this.props

    return (
      <div
        className={
          modelClass +
          ' mdl-textfield mdl-js-textfield mdl-textfield--floating-label'
        }
        key={modelId}>
        <input
          className="mdl-textfield__input"
          type="text"
          pattern="-?[0-9]*(\.[0-9]+)?"
          id={modelId}
          onChange={this.handleInput}
          value={this.state.text}
        />
        <label className="mdl-textfield__label" htmlFor={modelId}>
          {modelTitle}
        </label>
        <span className="mdl-textfield__error">数値が正しくありません</span>
      </div>
    )
  }
}

InputBoxValue.propTypes = {
  modelClass: PropTypes.string,
  modelTitle: PropTypes.string,
  modelId: PropTypes.string,
  modelValue: PropTypes.number,
  propFunc: PropTypes.func
}

InputBoxValue.defaultProps = {
  modelClass: 'InputBoxValue',
  modelTitle: 'InputBoxValue',
  modelId: 'InputBoxValue',
  modelValue: 0
}
