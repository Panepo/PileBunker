import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { inputChange } from '../actions'
import InputBoxValue from '../components/InputBoxValue'

class MenuOptionsB extends Component {
  renderCannonDirectHit = () => {
    const { type, skillCanDirUp, inputChange } = this.props
    if (type === 'cannon') {
      return (
        <InputBoxValue
          modelKey={'button cannon'}
          modelClass={'text-input'}
          modelTitle={'砲撃直撃時の攻撃ボーナス上昇(%)'}
          modelId={'skillCanDirUp'}
          propFunc={(modelId, modelValue) => {
            inputChange(modelId, modelValue)
          }}
          modelValue={skillCanDirUp}
        />
      )
    }
    return null
  }

  render() {
    const { inputChange, skillDamUp, skillRecDamUp, skillMelIgdef } = this.props

    return (
      <div>
        <InputBoxValue
          modelKey={'button skillDamUp'}
          modelClass={'text-input'}
          modelTitle={'与えるダメージが上昇(%)'}
          modelId={'skillDamUp'}
          propFunc={(modelId, modelValue) => {
            inputChange(modelId, modelValue)
          }}
          modelValue={skillDamUp}
        />
        <InputBoxValue
          modelKey={'button skillRecDamUp'}
          modelClass={'text-input'}
          modelTitle={'兜の被ダメージが上昇(%)'}
          modelId={'skillRecDamUp'}
          propFunc={(modelId, modelValue) => {
            inputChange(modelId, modelValue)
          }}
          modelValue={skillRecDamUp}
        />
        <InputBoxValue
          modelKey={'button cannon'}
          modelClass={'text-input'}
          modelTitle={'敵の防御を無視する(%)'}
          modelId={'skillMelIgdef'}
          propFunc={(modelId, modelValue) => {
            inputChange(modelId, modelValue)
          }}
          modelValue={skillMelIgdef}
        />
        {this.renderCannonDirectHit()}
      </div>
    )
  }
}

MenuOptionsB.propTypes = {
  type: PropTypes.string.isRequired,
  skillDamUp: PropTypes.number.isRequired,
  skillRecDamUp: PropTypes.number.isRequired,
  skillCanDirUp: PropTypes.number.isRequired,
  skillMelIgdef: PropTypes.number.isRequired,
  inputChange: PropTypes.func.isRequired
}

const mapStateToProps = state => {
  return {
    type: state.reducerCalc.type,
    skillDamUp: state.reducerCalc.skillDamUp,
    skillRecDamUp: state.reducerCalc.skillRecDamUp,
    skillCanDirUp: state.reducerCalc.skillCanDirUp,
    skillMelIgdef: state.reducerCalc.skillMelIgdef
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
