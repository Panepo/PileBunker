import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { refChange, refSinChange } from '../actions'
import MdlTableClass from '../components/MdlTableClass'
import ToggleButton from '../components/ToggleButton'
import { tableHead, tableInd, listRef, listRefS } from '../constants/ConstList'

class OutputTable extends Component {
	render() {
		const { output, refChange, refSinChange } = this.props
		
		var butTemp
		var butOut = []
		for (var i=0; i<listRef.length; i++){
			butTemp = (
				<ToggleButton
					key={"inputRef" + i.toString()}
					display={listRefS[i]}
					title={listRef[i]}
					onClickFunc={(modelId) => refChange(modelId)}
					modelId={listRefS[i]}
					Cactive={"mdl-button mdl-js-button mdl-js-ripple-effect mdl-button--primary"}
					Cinactive={"mdl-button mdl-js-button mdl-js-ripple-effect mdl-button--accent"}
					/>
			)
			butOut.push(butTemp)
		}
		
		return (
			<div>
				<div className="refine-button">
					精煉設定：
					{butOut}
				</div>
				<div>
					<MdlTableClass 
						tableId={'outputTable'}
						tableInd={tableInd}
						tableHead={tableHead}
						tableData={output}
						tableClass={"outputTable mdl-data-table mdl-js-data-table mdl-shadow--2dp"}
						tableFunction={(modelId) => refSinChange(modelId)}
						/>
				</div>
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

const mapDispatchToProps = (dispatch) => {
	return {
		refChange: bindActionCreators(refChange, dispatch),
		refSinChange: bindActionCreators(refSinChange, dispatch),
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(OutputTable)
