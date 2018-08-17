import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { typeChange } from '../actions'
import ToggleButton from '../components/ToggleButton'
import { listType, listTypeS } from '../constants/ConstList'

class MenuType extends Component {
  render() {
    const { type, typeChange } = this.props
    const typeTemp = <label htmlFor="weaponType">武器種：</label>

    return listType.reduce(
      (output, data, i) => {
        output.push(
          <ToggleButton
            modelKey={'inputType' + i.toString()}
            modelSwitch={type}
            modelTitle={data}
            propFunc={modelId => {
              typeChange(modelId)
            }}
            modelId={listTypeS[i]}
            modelClassActive={
              'type-button mdl-button mdl-js-button mdl-js-ripple-effect mdl-button--primary'
            }
            modelClassInactive={
              'type-button mdl-button mdl-js-button mdl-js-ripple-effect mdl-button--accent'
            }
          />
        )
        return output
      },
      [typeTemp]
    )
  }
}

MenuType.propTypes = {
  type: PropTypes.string.isRequired,
  typeChange: PropTypes.func.isRequired
}

const mapStateToProps = state => {
  return {
    type: state.reducerCalc.type
  }
}

const mapDispatchToProps = dispatch => {
  return {
    typeChange: bindActionCreators(typeChange, dispatch)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MenuType)
