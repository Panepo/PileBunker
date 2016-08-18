import React, { Component, PropTypes } from 'react'

export default class MdlTableClass extends Component {
	constructor(props, context) {
		super(props, context)
		this.state = {
			tableBody: this.props.tableData,
			sortKey: 'dps',
			sortDir: 1,
		}
	}
	
	componentDidUpdate() {
		componentHandler.upgradeDom()
	}
	
	componentWillReceiveProps(nextProps) {
		const { sortDir, sortKey } = this.state
		var tempData = nextProps.tableData
		
		if ( sortDir ) {
			tempData.sort(function(a, b){return b[sortKey] - a[sortKey]})
		} else {
			tempData.sort(function(a, b){return a[sortKey] - b[sortKey]})
		}

		this.setState({
			tableBody: tempData,
			sortKey: sortKey,
			sortDir: sortDir,
		})
	}
	
	handleChange(event) {
		var trId = event.target.id + "tr"
		if ( event.target.checked ) {
			document.getElementById(trId).style.backgroundColor = '#f5f5f5'
		} else {
			document.getElementById(trId).style.backgroundColor = "transparent"
		}
	}
	
	handleSort(event) {
		const { sortDir, sortKey, tableBody } = this.state
		var newKey = event.target.id
		var tempData = tableBody
		var newDir = sortDir
		
		if ( newKey === sortKey ) {
			if ( sortDir ) {
				newDir = 0
			} else {
				newDir = 1
			}
		}
		
		if ( newDir ) {
			tempData.sort(function(a, b){return b[newKey] - a[newKey]})
		} else {
			tempData.sort(function(a, b){return a[newKey] - b[newKey]})
		}
		
		this.setState({
			tableBody: tempData,
			sortKey: newKey,
			sortDir: newDir,
		})
	}
	
	generateTableHead() {
		const { tableHead, tableId, tableInd } = this.props
		const { sortDir, sortKey } = this.state
		
		var theadOut
		var theadTemp
		var theadTempOut = []
		var theadClass = ''
		for (var i=0; i<tableHead.length; i++){
			if ( tableInd[i] === sortKey ) {
				if ( sortDir === 1 ) {
					theadClass = 'theadOver'
				} else {
					theadClass = 'theadUnder'
				}
			} else {
				theadClass = ''
			}
			
			theadTemp = (
				<th className={theadClass} id={tableInd[i]} key={tableId + " th" + i.toString()} onClick={this.handleSort.bind(this)}>
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
		const { tableData, tableId, tableInd, tableFunction } = this.props
		const { tableBody } = this.state
		
		var tbodyOut
		var tbodyTemp
		var tbodyTempOut = []
		for (var i=0; i<tableBody.length; i++) {
			var tdTemp
			var tdTempOut = []
			for (var j=0; j<tableInd.length; j++) {
				if ( j === 0 ) {
					tdTemp = (
						<td key={tableId + " td" + i.toString() + j.toString()} >
							<label className="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect" htmlFor={tableId + i.toString()}>
								<input type="checkbox" id={tableId + i.toString()} className="mdl-checkbox__input" onChange={this.handleChange.bind(this)} />
							</label>
						</td>
					)
					tdTempOut.push(tdTemp)
				} else {
					tdTemp = (
						<td key={tableId + " td" + i.toString() + j.toString()} onClick={tableFunction.bind(null, tableBody[i].name)}>
							{tableBody[i][tableInd[j]]}
						</td>
					)
					tdTempOut.push(tdTemp)
				}
			}
			tbodyTemp = (
				<tr key={tableId + " th" + i.toString()} id={tableId + i.toString() + "tr"}>
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

MdlTableClass.propTypes = {
	tableId: PropTypes.string,
	tableInd: PropTypes.array,
	tableHead: PropTypes.array,
	tableData: PropTypes.array,
	tableClass: PropTypes.string,
	tableFunction: PropTypes.func,
}
