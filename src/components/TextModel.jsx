import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class TextModel extends Component {
  render() {
    const { displayText, displaySwitch, modelClose } = this.props

    if (displaySwitch === true) {
      const textOutput = displayText.reduce((output, data) => {
        textOutput.push(<div>{data}</div>)
        return output
      }, [])

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
  displayText: PropTypes.array,
  displaySwitch: PropTypes.bool,
  modelClose: PropTypes.func
}

TextModel.defaultProps = {
  displayText: [],
  displaySwitch: false
}
