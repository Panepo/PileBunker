import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import {
  modelOpen,
  typeChange,
  plainChange,
  maxChange,
  inputChange,
  flyChange,
  monsChange,
  cannonChange
} from '../actions'
import ToggleButton from '../components/ToggleButton'
import InputBoxValue from '../components/InputBoxValue'
import OutputTable from './OutputTable'
import {
  listType,
  listTypeS,
  listBut,
  listButS,
  listMelee
} from '../constants/ConstList'
import '../../css/Content.css'

class Content extends Component {
  generateType() {
    const { type, typeChange } = this.props
    let typeTemp = <label htmlFor="weaponType">武器種：</label>
    const typeOut = []
    typeOut.push(typeTemp)

    for (let i = 0; i < listType.length; i += 1) {
      typeTemp = (
        <ToggleButton
          key={'inputType' + i.toString()}
          display={type}
          title={listType[i]}
          onClickFunc={modelId => {
            typeChange(modelId)
          }}
          modelId={listTypeS[i]}
          Cactive={
            'type-button mdl-button mdl-js-button mdl-js-ripple-effect mdl-button--primary'
          }
          Cinactive={
            'type-button mdl-button mdl-js-button mdl-js-ripple-effect mdl-button--accent'
          }
        />
      )
      typeOut.push(typeTemp)
    }
    return typeOut
  }

  generateToggle() {
    const {
      plain,
      plainChange,
      fly,
      flyChange,
      mons,
      monsChange,
      cannon,
      cannonChange,
      type
    } = this.props
    let toggleTemp = <label htmlFor="plainType">地形適性：</label>
    const toggleOut = []
    toggleOut.push(toggleTemp)
    toggleTemp = (
      <ToggleButton
        key={'inputType plain'}
        display={plain}
        title={'地形適性あり'}
        onClickFunc={modelId => {
          plainChange(modelId)
        }}
        modelId={'plain'}
        Cactive={
          'mdl-button mdl-js-button mdl-js-ripple-effect mdl-button--primary'
        }
        Cinactive={
          'mdl-button mdl-js-button mdl-js-ripple-effect mdl-button--accent'
        }
      />
    )
    toggleOut.push(toggleTemp)

    toggleTemp = <label htmlFor="flyType">飛行兜：</label>
    toggleOut.push(toggleTemp)
    toggleTemp = (
      <ToggleButton
        key={'inputType fly'}
        display={fly}
        title={'飛行兜あり'}
        onClickFunc={modelId => {
          flyChange(modelId)
        }}
        modelId={'fly'}
        Cactive={
          'mdl-button mdl-js-button mdl-js-ripple-effect mdl-button--primary'
        }
        Cinactive={
          'mdl-button mdl-js-button mdl-js-ripple-effect mdl-button--accent'
        }
      />
    )
    toggleOut.push(toggleTemp)

    toggleTemp = <label htmlFor="flyType">妖怪：</label>
    toggleOut.push(toggleTemp)
    toggleTemp = (
      <ToggleButton
        key={'inputType mons'}
        display={mons}
        title={'妖怪あり'}
        onClickFunc={modelId => {
          monsChange(modelId)
        }}
        modelId={'mons'}
        Cactive={
          'mdl-button mdl-js-button mdl-js-ripple-effect mdl-button--primary'
        }
        Cinactive={
          'mdl-button mdl-js-button mdl-js-ripple-effect mdl-button--accent'
        }
      />
    )
    toggleOut.push(toggleTemp)

    if (type === 'cannon') {
      toggleTemp = <label htmlFor="cannonType">大砲直擊：</label>
      toggleOut.push(toggleTemp)
      toggleTemp = (
        <ToggleButton
          key={'inputType cannon'}
          display={cannon}
          title={'大砲直擊あり'}
          onClickFunc={modelId => {
            cannonChange(modelId)
          }}
          modelId={'cannon'}
          Cactive={
            'mdl-button mdl-js-button mdl-js-ripple-effect mdl-button--primary'
          }
          Cinactive={
            'mdl-button mdl-js-button mdl-js-ripple-effect mdl-button--accent'
          }
        />
      )
      toggleOut.push(toggleTemp)
    }
    return toggleOut
  }

  generateMax() {
    const { max, maxChange } = this.props
    let butTemp = <label htmlFor="maxType">巨大化：</label>
    const butOut = []
    butOut.push(butTemp)
    for (let i = 0; i < listBut.length; i += 1) {
      butTemp = (
        <ToggleButton
          key={'inputBut' + i.toString()}
          display={max}
          title={listBut[i]}
          onClickFunc={modelId => {
            maxChange(modelId)
          }}
          modelId={listButS[i]}
          Cactive={
            'mdl-button mdl-js-button mdl-js-ripple-effect mdl-button--primary'
          }
          Cinactive={
            'mdl-button mdl-js-button mdl-js-ripple-effect mdl-button--accent'
          }
        />
      )
      butOut.push(butTemp)
    }
    return butOut
  }

  generateCannonDirectHit() {
    const { type, skillCanDirUp, inputChange } = this.props
    if (type === 'cannon') {
      return (
        <InputBoxValue
          key={'button cannon'}
          classes={'text-input'}
          title={'砲撃直撃時の攻撃ボーナス上昇(%)'}
          modelId={'skillCanDirUp'}
          inputFunc={(modelId, modelValue) => {
            inputChange(modelId, modelValue)
          }}
          defaultValue={skillCanDirUp}
        />
      )
    }
    return null
  }

  generateMeleeIgnoreDef() {
    const { type, skillMelIgdef, inputChange } = this.props

    for (let i = 0; i < listMelee.length; i += 1) {
      if (type === listMelee[i]) {
        return (
          <InputBoxValue
            key={'button cannon'}
            classes={'text-input'}
            title={'近接攻撃が敵の防御を無視する(%)'}
            modelId={'skillMelIgdef'}
            inputFunc={(modelId, modelValue) => {
              inputChange(modelId, modelValue)
            }}
            defaultValue={skillMelIgdef}
          />
        )
      }
    }
  }

  render() {
    const {
      level,
      AtkParm,
      com,
      skillDamUp,
      skillRecDamUp,
      struAtk
    } = this.props
    const {
      atk,
      def,
      skillAtkUp,
      skillDefDown,
      skillSpdUpF,
      skillSpdUpB,
      inputChange,
      skillAtkUpInt,
      skillDefDownInt
    } = this.props
    const { modelOpen } = this.props
    return (
      <main className="demo-main mdl-layout__content">
        <div className="demo-container mdl-grid">
          <div className="mdl-cell mdl-cell--2-col mdl-cell--hide-tablet mdl-cell--hide-phone" />
          <div className="content demo-content mdl-color--white mdl-shadow--4dp mdl-color-text--grey-800 mdl-cell mdl-cell--8-col">
            <div>{this.generateType()}</div>
            <div>
              <ToggleButton
                key={'button char'}
                display={'1'}
                title={'城娘選擇'}
                onClickFunc={modelId => {
                  modelOpen(modelId)
                }}
                modelId={'1'}
                Cactive={
                  'mdl-button mdl-js-button mdl-js-ripple-effect mdl-button--primary'
                }
                Cinactive={
                  'mdl-button mdl-js-button mdl-js-ripple-effect mdl-button--accent'
                }
              />
            </div>
            <div>
              <InputBoxValue
                key={'button level'}
                classes={'text-input'}
                title={'城娘等級'}
                modelId={'level'}
                inputFunc={(modelId, modelValue) => {
                  inputChange(modelId, modelValue)
                }}
                defaultValue={level}
              />
              <InputBoxValue
                key={'button AtkParm'}
                classes={'text-input'}
                title={'攻擊成長係數(%)'}
                modelId={'AtkParm'}
                inputFunc={(modelId, modelValue) => {
                  inputChange(modelId, modelValue)
                }}
                defaultValue={AtkParm}
              />
              <InputBoxValue
                key={'button com'}
                classes={'text-input'}
                title={'絆'}
                modelId={'com'}
                inputFunc={(modelId, modelValue) => {
                  inputChange(modelId, modelValue)
                }}
                defaultValue={com}
              />
              <InputBoxValue
                key={'button struAtk'}
                classes={'text-input'}
                title={'設施攻擊'}
                modelId={'struAtk'}
                inputFunc={(modelId, modelValue) => {
                  inputChange(modelId, modelValue)
                }}
                defaultValue={struAtk}
              />
            </div>
            <div>{this.generateToggle()}</div>
            <div>{this.generateMax()}</div>
            <div>
              <InputBoxValue
                key={'button atk'}
                classes={'text-input'}
                title={'城娘素身攻擊力'}
                modelId={'atk'}
                inputFunc={(modelId, modelValue) => {
                  inputChange(modelId, modelValue)
                }}
                defaultValue={atk}
              />
              <InputBoxValue
                key={'button def'}
                classes={'text-input'}
                title={'兜防禦力'}
                modelId={'def'}
                inputFunc={(modelId, modelValue) => {
                  inputChange(modelId, modelValue)
                }}
                defaultValue={def}
              />
              <InputBoxValue
                key={'button skillSpdUpF'}
                classes={'text-input'}
                title={'攻撃速度上昇(%)'}
                modelId={'skillSpdUpF'}
                inputFunc={(modelId, modelValue) => {
                  inputChange(modelId, modelValue)
                }}
                defaultValue={skillSpdUpF}
              />
              <InputBoxValue
                key={'button skillSpdUpB'}
                classes={'text-input'}
                title={'攻撃後の隙短縮(%)'}
                modelId={'skillSpdUpB'}
                inputFunc={(modelId, modelValue) => {
                  inputChange(modelId, modelValue)
                }}
                defaultValue={skillSpdUpB}
              />
            </div>
            <div>
              <InputBoxValue
                key={'button skillAtkUp'}
                classes={'text-input'}
                title={'攻擊力增加(%)'}
                modelId={'skillAtkUp'}
                inputFunc={(modelId, modelValue) => {
                  inputChange(modelId, modelValue)
                }}
                defaultValue={skillAtkUp}
              />
              <InputBoxValue
                key={'button skillAtkUpInt'}
                classes={'text-input'}
                title={'攻擊力增加'}
                modelId={'skillAtkUpInt'}
                inputFunc={(modelId, modelValue) => {
                  inputChange(modelId, modelValue)
                }}
                defaultValue={skillAtkUpInt}
              />
              <InputBoxValue
                key={'button skillDefDown'}
                classes={'text-input'}
                title={'兜防禦力減少(%)'}
                modelId={'skillDefDown'}
                inputFunc={(modelId, modelValue) => {
                  inputChange(modelId, modelValue)
                }}
                defaultValue={skillDefDown}
              />
              <InputBoxValue
                key={'button skillDefDownInt'}
                classes={'text-input'}
                title={'兜防禦力減少'}
                modelId={'skillDefDownInt'}
                inputFunc={(modelId, modelValue) => {
                  inputChange(modelId, modelValue)
                }}
                defaultValue={skillDefDownInt}
              />
            </div>
            <div>
              <InputBoxValue
                key={'button skillDamUp'}
                classes={'text-input'}
                title={'与えるダメージが上昇(%)'}
                modelId={'skillDamUp'}
                inputFunc={(modelId, modelValue) => {
                  inputChange(modelId, modelValue)
                }}
                defaultValue={skillDamUp}
              />
              <InputBoxValue
                key={'button skillRecDamUp'}
                classes={'text-input'}
                title={'兜の被ダメージが上昇(%)'}
                modelId={'skillRecDamUp'}
                inputFunc={(modelId, modelValue) => {
                  inputChange(modelId, modelValue)
                }}
                defaultValue={skillRecDamUp}
              />
              {this.generateCannonDirectHit()}
              {this.generateMeleeIgnoreDef()}
            </div>
            <OutputTable />
          </div>
        </div>
      </main>
    )
  }
}

Content.propTypes = {
  level: PropTypes.number.isRequired,
  // HPParm: PropTypes.number.isRequired,
  AtkParm: PropTypes.number.isRequired,
  // DefParm: PropTypes.number.isRequired,
  com: PropTypes.number.isRequired,
  type: PropTypes.string.isRequired,
  plain: PropTypes.string.isRequired,
  cannon: PropTypes.string.isRequired,
  fly: PropTypes.string.isRequired,
  mons: PropTypes.string.isRequired,
  max: PropTypes.string.isRequired,
  atk: PropTypes.number.isRequired,
  def: PropTypes.number.isRequired,
  skillAtkUp: PropTypes.number.isRequired,
  skillDefDown: PropTypes.number.isRequired,
  skillAtkUpInt: PropTypes.number.isRequired,
  skillDefDownInt: PropTypes.number.isRequired,
  skillSpdUpF: PropTypes.number.isRequired,
  skillSpdUpB: PropTypes.number.isRequired,
  skillDamUp: PropTypes.number.isRequired,
  skillRecDamUp: PropTypes.number.isRequired,
  struAtk: PropTypes.number.isRequired,
  skillCanDirUp: PropTypes.number.isRequired,
  skillMelIgdef: PropTypes.number.isRequired,
  typeChange: PropTypes.func.isRequired,
  plainChange: PropTypes.func.isRequired,
  maxChange: PropTypes.func.isRequired,
  inputChange: PropTypes.func.isRequired,
  flyChange: PropTypes.func.isRequired,
  monsChange: PropTypes.func.isRequired,
  cannonChange: PropTypes.func.isRequired,
  modelOpen: PropTypes.func.isRequired
  // modelClose: PropTypes.func.isRequired
}

const mapStateToProps = function mapStateToProps(state) {
  return {
    level: state.reducerCalc.level,
    // HPParm: state.reducerCalc.HPParm,
    AtkParm: state.reducerCalc.AtkParm,
    // DefParm: state.reducerCalc.DefParm,
    com: state.reducerCalc.com,
    type: state.reducerCalc.type,
    plain: state.reducerCalc.plain,
    cannon: state.reducerCalc.cannon,
    fly: state.reducerCalc.fly,
    mons: state.reducerCalc.mons,
    max: state.reducerCalc.max,
    atk: state.reducerCalc.atk,
    def: state.reducerCalc.def,
    skillAtkUp: state.reducerCalc.skillAtkUp,
    skillDefDown: state.reducerCalc.skillDefDown,
    skillDamUp: state.reducerCalc.skillDamUp,
    skillRecDamUp: state.reducerCalc.skillRecDamUp,
    struAtk: state.reducerCalc.struAtk,
    skillCanDirUp: state.reducerCalc.skillCanDirUp,
    skillMelIgdef: state.reducerCalc.skillMelIgdef,
    skillAtkUpInt: state.reducerCalc.skillAtkUpInt,
    skillDefDownInt: state.reducerCalc.skillDefDownInt,
    skillSpdUpF: state.reducerCalc.skillSpdUpF,
    skillSpdUpB: state.reducerCalc.skillSpdUpB,
    output: state.reducerCalc.output
  }
}

const mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    typeChange: bindActionCreators(typeChange, dispatch),
    plainChange: bindActionCreators(plainChange, dispatch),
    flyChange: bindActionCreators(flyChange, dispatch),
    monsChange: bindActionCreators(monsChange, dispatch),
    maxChange: bindActionCreators(maxChange, dispatch),
    inputChange: bindActionCreators(inputChange, dispatch),
    cannonChange: bindActionCreators(cannonChange, dispatch),
    modelOpen: bindActionCreators(modelOpen, dispatch)
    // modelClose: bindActionCreators(modelClose, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Content)
