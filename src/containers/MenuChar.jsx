import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { inputChange } from '../actions'
import InputBoxValue from '../components/InputBoxValue'

class MenuChar extends Component {
  render() {
    const { level, AtkParm, com, struAtk } = this.props
    const { inputChange } = this.props

    return (
      <div>
        <InputBoxValue
          modelKey={'button level'}
          modelClass={'text-input'}
          modelTitle={'城娘等級'}
          modelId={'level'}
          propFunc={(modelId, modelValue) => {
            inputChange(modelId, modelValue)
          }}
          modelValue={level}
        />
        <InputBoxValue
          modelKey={'button AtkParm'}
          modelClass={'text-input'}
          modelTitle={'攻擊成長係數(%)'}
          modelId={'AtkParm'}
          propFunc={(modelId, modelValue) => {
            inputChange(modelId, modelValue)
          }}
          modelValue={AtkParm}
        />
        <InputBoxValue
          modelKey={'button com'}
          modelClass={'text-input'}
          modelTitle={'絆'}
          modelId={'com'}
          propFunc={(modelId, modelValue) => {
            inputChange(modelId, modelValue)
          }}
          modelValue={com}
        />
        <InputBoxValue
          modelKey={'button struAtk'}
          modelClass={'text-input'}
          modelTitle={'設施攻擊'}
          modelId={'struAtk'}
          propFunc={(modelId, modelValue) => {
            inputChange(modelId, modelValue)
          }}
          modelValue={struAtk}
        />
      </div>
    )
  }
}

MenuChar.propTypes = {
  level: PropTypes.number.isRequired,
  AtkParm: PropTypes.number.isRequired,
  com: PropTypes.number.isRequired,
  struAtk: PropTypes.number.isRequired,
  inputChange: PropTypes.func.isRequired
}

const mapStateToProps = state => {
  return {
    level: state.reducerCalc.level,
    AtkParm: state.reducerCalc.AtkParm,
    com: state.reducerCalc.com,
    struAtk: state.reducerCalc.struAtk
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
)(MenuChar)
