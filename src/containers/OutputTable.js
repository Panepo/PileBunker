import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import MdlTableClass from '../components/MdlTableClass'
import { tableHead, tableInd } from '../constants/ConstList'

class OutputTable extends Component {
	render() {
		const { output } = this.props
		
		return (
			<div>
				<MdlTableClass 
					tableId={'outputTable'}
					tableInd={tableInd}
					tableHead={tableHead}
					tableData={output}
					tableClass={"outputTable mdl-data-table mdl-js-data-table mdl-shadow--2dp"}
					/>
			</div>
		)
	}
}

OutputTable.propTypes = {
	output: PropTypes.array.isRequired,
}

const mapStateToProps = (state) => {
	return {
		output: state.reducerCalc.output,
	}
}

export default connect(
	mapStateToProps,
	{ }
)(OutputTable)
