import React, { Component, PropTypes } from 'react'

export default class TextModel extends Component {
  render() {
    const { input, display, modelClose } = this.props
    let textTemp
    const textOutput = []

    if (display === true) {
      for (let i = 0; i < input.length; i += 1) {
        textTemp = <div>{input[i]}</div>
        textOutput.push(textTemp)
      }

      return (
        <div className="modal">
          <button
            className="close mdl-button mdl-js-button mdl-button--fab mdl-js-ripple-effect"
            onClick={modelClose}>
            <div className="material-icons">clear</div>
          </button>
          <div className="modal-content">{textOutput}</div>
        </div>
      )
    }
    return null
  }
}

TextModel.propTypes = {
  input: PropTypes.array,
  display: PropTypes.bool,
  modelClose: PropTypes.func
}

TextModel.defaultProps = {
  input: [],
  display: false
}
