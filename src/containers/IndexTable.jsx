import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { modelOpen, modelClose } from '../actions'
import MdlTableClass from '../components/MdlTableClass'
import { tableCharHead, tableCharInd } from '../constants/ConstList'

class IndexTable extends Component {
	render() {
		const { modelStatus, modelOpen, modelClose, outputChar } = this.props

		if (modelStatus === '1') {
			return (
				<div className="modal">
					<button className="close mdl-button mdl-js-button mdl-button--fab mdl-js-ripple-effect" onClick={modelClose} >
						<div className="material-icons">clear</div>
					</button>
					<div className="modal-content">
						<MdlTableClass
							tableId={'charTable'}
							tableInd={tableCharInd}
							tableHead={tableCharHead}
							tableData={outputChar}
							tableClass={'charTable mdl-data-table mdl-js-data-table mdl-shadow--2dp'}
							tableFunction={(modelId) => {modelOpen(modelId)}}
						/>
					</div>
				</div>
			)
		}
		return null
	}
}

IndexTable.propTypes = {
	outputChar: PropTypes.array.isRequired,
	modelStatus: PropTypes.string.isRequired,
	modelOpen: PropTypes.func.isRequired,
	modelClose: PropTypes.func.isRequired
}

const mapStateToProps = function mapStateToProps(state) {
	return {
		modelStatus: state.reducerPage.modelStatus,
		outputChar: state.reducerCalc.outputChar
	}
}

const mapDispatchToProps = function mapDispatchToProps(dispatch) {
	return {
		modelOpen: bindActionCreators(modelOpen, dispatch),
		modelClose: bindActionCreators(modelClose, dispatch)
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(IndexTable)
