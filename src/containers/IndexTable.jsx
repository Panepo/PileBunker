import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import MenuType from './MenuType'

import { modelClose, charSelect, plainSelect, raritySelect } from '../actions'
import ToggleButton from '../components/ToggleButton'
import MdlTableClass from '../components/MdlTableClass'
import {
  tableCharHead,
  tableCharInd,
  listPlain,
  listPlainS,
  listRarityS,
  listRarityQ
} from '../constants/ConstList'
import './IndexTable.css'

class IndexTable extends Component {
  componentDidUpdate = () => {
    window.componentHandler.upgradeDom()
  }

  renderPlain = () => {
    const { plainStatus, plainSelect } = this.props
    const plainTemp = <label htmlFor="indexPlain">屬性：</label>
    return listPlain.reduce(
      (output, data, i) => {
        output.push(
          <ToggleButton
            key={'indexPlain' + i.toString()}
            modelKey={'indexPlain' + i.toString()}
            modelSwitch={(plainStatus & listPlainS[i]).toString()}
            modelTitle={data}
            propFunc={modelId => {
              plainSelect(modelId)
            }}
            modelId={listPlainS[i].toString()}
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
      [plainTemp]
    )
  }

  renderRarity = () => {
    const { rarityStatus, raritySelect } = this.props
    const rarityTemp = <label htmlFor="indexPlain">稀有度：</label>
    return listRarityQ.reduce(
      (output, data, i) => {
        output.push(
          <ToggleButton
            key={'indexPlain' + i.toString()}
            modelKey={'indexPlain' + i.toString()}
            modelSwitch={(rarityStatus & listRarityS[i]).toString()}
            modelTitle={data}
            propFunc={modelId => {
              raritySelect(modelId)
            }}
            modelId={listRarityS[i].toString()}
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
      [rarityTemp]
    )
  }

  render() {
    const { modelStatus, modelClose, outputChar, charSelect } = this.props

    if (modelStatus === '1') {
      return (
        <div className="modal">
          <button
            className="modal-close mdl-button mdl-js-button mdl-button--fab mdl-js-ripple-effect"
            onClick={modelClose}>
            <div className="material-icons">clear</div>
          </button>
          <div className="modal-content mdl-color--white mdl-color-text--grey-800 ">
            <div className="char-type-button">
              <MenuType />
            </div>
            <div className="char-rarity-button">{this.renderRarity()}</div>
            <div className="char-plain-button">{this.renderPlain()}</div>
            <div>
              <MdlTableClass
                tableId={'charTable'}
                tableInd={tableCharInd}
                tableHead={tableCharHead}
                tableData={outputChar}
                tableClass={
                  'charTable mdl-data-table mdl-js-data-table mdl-shadow--2dp'
                }
                tableFunction={modelId => {
                  charSelect(modelId)
                }}
              />
            </div>
          </div>
        </div>
      )
    }
    return null
  }
}

IndexTable.propTypes = {
  charSelect: PropTypes.func.isRequired,
  outputChar: PropTypes.array.isRequired,
  modelStatus: PropTypes.string.isRequired,
  modelClose: PropTypes.func.isRequired,
  plainStatus: PropTypes.number.isRequired,
  plainSelect: PropTypes.func.isRequired,
  rarityStatus: PropTypes.number.isRequired,
  raritySelect: PropTypes.func.isRequired
}

const mapStateToProps = state => {
  return {
    modelStatus: state.reducerLayout.modelStatus,
    outputChar: state.reducerCalc.outputChar,
    plainStatus: state.reducerCalc.plainStatus,
    rarityStatus: state.reducerCalc.rarityStatus
  }
}

const mapDispatchToProps = dispatch => {
  return {
    charSelect: bindActionCreators(charSelect, dispatch),
    modelClose: bindActionCreators(modelClose, dispatch),
    plainSelect: bindActionCreators(plainSelect, dispatch),
    raritySelect: bindActionCreators(raritySelect, dispatch)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(IndexTable)
