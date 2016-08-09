import React, { Component, PropTypes } from 'react'

export default class SelectableTable extends Component {
	componentDidUpdate() {
		componentHandler.upgradeDom()
	}
	
	handleChange(event) {
		var trId = event.target.id + "tr"
		if ( event.target.checked ) {
			document.getElementById(trId).style.backgroundColor = '#f5f5f5'
		} else {
			document.getElementById(trId).style.backgroundColor = "transparent"
		}
	}
	
	generateTableHead() {
		const { tableHead, tableId } = this.props
		
		var theadOut
		var theadTemp
		var theadTempOut = []
		for (var i=0; i<tableHead.length; i++){
			theadTemp = (
				<th id={tableId + " th" + i.toString()} key={tableId + " th" + i.toString()} >
					{tableHead[i]}
				</th>
			)
			theadTempOut.push(theadTemp)
		}
		theadOut = (
			<thead>
				<tr>
					{theadTempOut}
				</tr>
			</thead>
		)
		
		return theadOut
	}
	
	generateTableBody() {
		const { tableData, tableId } = this.props
		
		var tbodyOut
		var tbodyTemp
		var tbodyTempOut = []
		for (var i=0; i<tableData.length; i++) {
			var tdTemp
			var tdTempOut = []
			for (var j=0; j<=tableData[i].length; j++) {
				if ( j === 0 ) {
					tdTemp = (
						<label className="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect" htmlFor={tableId + " td" + i.toString() + j.toString()}>
							<input type="checkbox" id={tableId + " td" + i.toString() + j.toString()} className="mdl-checkbox__input" onChange={this.handleChange.bind(this)} />
						</label>
					)
				} else {
					tdTemp = (
						<td key={tableId + " td" + i.toString() + j.toString()} >
							tableData[i][j-1]
						</td>
					)
					tdTempOut.push(tdTemp)
				}
			}
			tbodyTemp = (
				<tr key={tableId + " th" + i.toString()} id={tableId + " th" + i.toString()} >
					{tdTempOut}
				</tr>
			)
			tbodyTempOut.push(tbodyTemp)
		}
		tbodyOut = <tbody>{tbodyTempOut}</tbody>
		
		return tbodyOut
	}
	
	render() {
		const { tableClass, tableId } = this.props
		
		return (
			<table className={tableClass} id={tableId}>
				{this.generateTableHead()}
				{this.generateTableBody()}
			</table>
		)
	}
}

SelectableTable.propTypes = {
	tableHead: PropTypes.array,
	tableData: PropTypes.array,
	tableClass: PropTypes.string,
}
