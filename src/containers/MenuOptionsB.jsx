import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { inputChange } from '../actions'
import InputBoxValue from '../components/InputBoxValue'

class MenuOptionsB extends Component {
  render() {
    const {
      skillAtkUp,
      skillDefDown,
      inputChange,
      skillAtkUpInt,
      skillDefDownInt
    } = this.props

    return (
      <div>
        <InputBoxValue
          modelKey={'button skillAtkUp'}
          modelClass={'text-input'}
          modelTitle={'攻擊力增加(%)'}
          modelId={'skillAtkUp'}
          propFunc={(modelId, modelValue) => {
            inputChange(modelId, modelValue)
          }}
          modelValue={skillAtkUp}
        />
        <InputBoxValue
          modelKey={'button skillAtkUpInt'}
          modelClass={'text-input'}
          modelTitle={'攻擊力增加'}
          modelId={'skillAtkUpInt'}
          propFunc={(modelId, modelValue) => {
            inputChange(modelId, modelValue)
          }}
          modelValue={skillAtkUpInt}
        />
        <InputBoxValue
          modelKey={'button skillDefDown'}
          modelClass={'text-input'}
          modelTitle={'兜防禦力減少(%)'}
          modelId={'skillDefDown'}
          propFunc={(modelId, modelValue) => {
            inputChange(modelId, modelValue)
          }}
          modelValue={skillDefDown}
        />
        <InputBoxValue
          modelKey={'button skillDefDownInt'}
          modelClass={'text-input'}
          modelTitle={'兜防禦力減少'}
          modelId={'skillDefDownInt'}
          propFunc={(modelId, modelValue) => {
            inputChange(modelId, modelValue)
          }}
          modelValue={skillDefDownInt}
        />
      </div>
    )
  }
}

MenuOptionsB.propTypes = {
  skillAtkUp: PropTypes.number.isRequired,
  skillDefDown: PropTypes.number.isRequired,
  skillAtkUpInt: PropTypes.number.isRequired,
  skillDefDownInt: PropTypes.number.isRequired,
  inputChange: PropTypes.func.isRequired
}

const mapStateToProps = state => {
  return {
    skillAtkUp: state.reducerCalc.skillAtkUp,
    skillDefDown: state.reducerCalc.skillDefDown,
    skillAtkUpInt: state.reducerCalc.skillAtkUpInt,
    skillDefDownInt: state.reducerCalc.skillDefDownInt
  }
}

const mapDispatchToProps = dispatch => {
  return {
    inputChange: bindActionCreators(inputChange, dispatch)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MenuOptionsB)
