import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { maxChange } from '../actions'
import ToggleButton from '../components/ToggleButton'
import { listBut, listButS } from '../constants/ConstList'

class MenuMax extends Component {
  render() {
    const { max, maxChange } = this.props
    const maxTemp = (
      <label key={'inputBut_label'} htmlFor="maxType">
        巨大化：
      </label>
    )
    return listBut.reduce(
      (output, data, i) => {
        output.push(
          <ToggleButton
            key={'inputBut' + i.toString()}
            modelKey={'inputBut' + i.toString()}
            modelSwitch={max}
            modelTitle={data}
            propFunc={modelId => {
              maxChange(modelId)
            }}
            modelId={listButS[i]}
            modelClassActive={
              'mdl-button mdl-js-button mdl-js-ripple-effect mdl-button--primary'
            }
            modelClassInactive={
              'mdl-button mdl-js-button mdl-js-ripple-effect mdl-button--accent'
            }
          />
        )
        return output
      },
      [maxTemp]
    )
  }
}

MenuMax.propTypes = {
  max: PropTypes.string.isRequired,
  maxChange: PropTypes.func.isRequired
}

const mapStateToProps = state => {
  return {
    max: state.reducerCalc.max
  }
}

const mapDispatchToProps = dispatch => {
  return {
    maxChange: bindActionCreators(maxChange, dispatch)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MenuMax)
