import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { modelClose, typeChange, charSelect } from '../actions'
import ToggleButton from '../components/ToggleButton'
import MdlTableClass from '../components/MdlTableClass'
import { tableCharHead, tableCharInd, listType, listTypeS } from '../constants/ConstList'

class IndexTable extends Component {
	generateType() {
		const { type, typeChange } = this.props
		let typeTemp = (<label htmlFor="weaponType">武器種：</label>)
		const typeOut = []
		typeOut.push(typeTemp)

		for (let i = 0; i < listType.length; i += 1) {
			typeTemp = (
				<ToggleButton
					key={'indexType' + i.toString()}
					display={type}
					title={listType[i]}
					onClickFunc={(modelId) => {typeChange(modelId)}}
					modelId={listTypeS[i]}
					Cactive={'type-button mdl-button mdl-js-button mdl-js-ripple-effect mdl-button--primary'}
					Cinactive={'type-button mdl-button mdl-js-button mdl-js-ripple-effect mdl-button--accent'}
				/>
			)
			typeOut.push(typeTemp)
		}
		return typeOut
	}

	render() {
		const { modelStatus, modelClose, outputChar, charSelect } = this.props

		if (modelStatus === '1') {
			return (
				<div className="modal">
					<button className="close mdl-button mdl-js-button mdl-button--fab mdl-js-ripple-effect" onClick={modelClose} >
						<div className="material-icons">clear</div>
					</button>
					<div className="index-content modal-content mdl-color--white mdl-color-text--grey-800 ">
						<div className="char-type-button">
							{this.generateType()}
						</div>
						<div>
							<MdlTableClass
								tableId={'charTable'}
								tableInd={tableCharInd}
								tableHead={tableCharHead}
								tableData={outputChar}
								tableClass={'charTable mdl-data-table mdl-js-data-table mdl-shadow--2dp'}
								tableFunction={(modelId) => {charSelect(modelId)}}
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
	type: PropTypes.string.isRequired,
	typeChange: PropTypes.func.isRequired,
	charSelect: PropTypes.func.isRequired,
	outputChar: PropTypes.array.isRequired,
	modelStatus: PropTypes.string.isRequired,
	modelClose: PropTypes.func.isRequired
}

const mapStateToProps = function mapStateToProps(state) {
	return {
		type: state.reducerCalc.type,
		modelStatus: state.reducerCalc.modelStatus,
		outputChar: state.reducerCalc.outputChar
	}
}

const mapDispatchToProps = function mapDispatchToProps(dispatch) {
	return {
		typeChange: bindActionCreators(typeChange, dispatch),
		charSelect: bindActionCreators(charSelect, dispatch),
		modelClose: bindActionCreators(modelClose, dispatch)
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(IndexTable)
