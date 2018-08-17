import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { refChange, refSinChange } from '../actions'
import MdlTableClass from '../components/MdlTableClass'
import ToggleButton from '../components/ToggleButton'
import { tableHead, tableInd, listRef, listRefS } from '../constants/ConstList'
import './OutputTable.css'

class OutputTable extends Component {
  renderButton = () => {
    const { refChange } = this.props
    return listRef.reduce((output, data, i) => {
      output.push(
        <ToggleButton
          modelKey={'inputRef' + i.toString()}
          modelSwitch={listRefS[i]}
          modelTitle={data}
          propFunc={modelId => {
            refChange(modelId)
          }}
          modelId={listRefS[i]}
          modelClassActive={
            'mdl-button mdl-js-button mdl-js-ripple-effect mdl-button--primary'
          }
          modelClassInactive={
            'mdl-button mdl-js-button mdl-js-ripple-effect mdl-button--accent'
          }
        />
      )
      return output
    }, [])
  }

  render() {
    const { output, refSinChange } = this.props

    return (
      <div>
        <div className="refine-button">
          精煉設定：
          {this.renderButton()}
        </div>
        <div>
          <MdlTableClass
            tableId={'outputTable'}
            tableInd={tableInd}
            tableHead={tableHead}
            tableData={output}
            tableClass={
              'outputTable mdl-data-table mdl-js-data-table mdl-shadow--2dp'
            }
            tableFunction={modelId => {
              refSinChange(modelId)
            }}
          />
        </div>
      </div>
    )
  }
}

OutputTable.propTypes = {
  output: PropTypes.array.isRequired,
  refChange: PropTypes.func.isRequired,
  refSinChange: PropTypes.func.isRequired
}

const mapStateToProps = state => {
  return {
    output: state.reducerCalc.output
  }
}

const mapDispatchToProps = dispatch => {
  return {
    refChange: bindActionCreators(refChange, dispatch),
    refSinChange: bindActionCreators(refSinChange, dispatch)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(OutputTable)
