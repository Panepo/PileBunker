import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { inputChange } from '../actions'
import InputBoxValue from '../components/InputBoxValue'

class MenuOptionsA extends Component {
  render() {
    const { atk, def, skillSpdUpF, skillSpdUpB, inputChange } = this.props

    return (
      <div>
        <InputBoxValue
          modelKey={'button atk'}
          modelClass={'text-input'}
          modelTitle={'城娘素身攻擊力'}
          modelId={'atk'}
          propFunc={(modelId, modelValue) => {
            inputChange(modelId, modelValue)
          }}
          modelValue={atk}
        />
        <InputBoxValue
          modelKey={'button def'}
          modelClass={'text-input'}
          modelTitle={'兜防禦力'}
          modelId={'def'}
          propFunc={(modelId, modelValue) => {
            inputChange(modelId, modelValue)
          }}
          modelValue={def}
        />
        <InputBoxValue
          modelKey={'button skillSpdUpF'}
          modelClass={'text-input'}
          modelTitle={'攻撃速度上昇(%)'}
          modelId={'skillSpdUpF'}
          propFunc={(modelId, modelValue) => {
            inputChange(modelId, modelValue)
          }}
          modelValue={skillSpdUpF}
        />
        <InputBoxValue
          modelKey={'button skillSpdUpB'}
          modelClass={'text-input'}
          modelTitle={'攻撃後の隙短縮(%)'}
          modelId={'skillSpdUpB'}
          propFunc={(modelId, modelValue) => {
            inputChange(modelId, modelValue)
          }}
          modelValue={skillSpdUpB}
        />
      </div>
    )
  }
}

MenuOptionsA.propTypes = {
  atk: PropTypes.number.isRequired,
  def: PropTypes.number.isRequired,
  skillSpdUpF: PropTypes.number.isRequired,
  skillSpdUpB: PropTypes.number.isRequired,
  inputChange: PropTypes.func.isRequired
}

const mapStateToProps = state => {
  return {
    atk: state.reducerCalc.atk,
    def: state.reducerCalc.def,
    skillSpdUpF: state.reducerCalc.skillSpdUpF,
    skillSpdUpB: state.reducerCalc.skillSpdUpB
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
)(MenuOptionsA)
