import React, { Component, PropTypes } from 'react'

export default class MdlTableClass extends Component {
  constructor(props, context) {
    super(props, context)

    const tempData = this.props.tableData
    tempData.sort((a, b) => b.dps - a.dps)

    this.state = {
      tableBody: tempData,
      sortKey: 'dps',
      sortDir: 1
    }
  }

  componentWillReceiveProps(nextProps) {
    const { sortDir, sortKey } = this.state
    const tempData = nextProps.tableData

    if (sortDir) {
      tempData.sort((a, b) => b[sortKey] - a[sortKey])
    } else {
      tempData.sort((a, b) => a[sortKey] - b[sortKey])
    }

    this.setState({
      tableBody: tempData
    })
  }

  componentDidUpdate() {
    componentHandler.upgradeDom()
  }

  handleChange(event) {
    const trId = event.target.id + 'tr'
    if (event.target.checked) {
      document.getElementById(trId).style.backgroundColor = '#f5f5f5'
    } else {
      document.getElementById(trId).style.backgroundColor = 'transparent'
    }
  }

  handleSort(event) {
    const { sortDir, sortKey, tableBody } = this.state
    const newKey = event.target.id
    const tempData = tableBody
    let newDir = sortDir

    if (newKey === sortKey) {
      if (sortDir) {
        newDir = 0
      } else {
        newDir = 1
      }
    }

    if (newDir) {
      tempData.sort((a, b) => b[newKey] - a[newKey])
    } else {
      tempData.sort((a, b) => a[newKey] - b[newKey])
    }

    this.setState({
      tableBody: tempData,
      sortKey: newKey,
      sortDir: newDir
    })
  }

  generateTableHead() {
    const { tableHead, tableId, tableInd } = this.props
    const { sortDir, sortKey } = this.state

    let theadTemp
    const theadTempOut = []
    let theadClass = ''
    for (let i = 0; i < tableHead.length; i += 1) {
      if (tableInd[i] === sortKey) {
        if (sortDir === 1) {
          theadClass = 'theadOver'
        } else {
          theadClass = 'theadUnder'
        }
      } else {
        theadClass = ''
      }

      theadTemp = (
        <th
          className={theadClass}
          id={tableInd[i]}
          key={tableId + ' th' + i.toString()}
          onClick={this.handleSort.bind(this)}
        >
          {tableHead[i]}
        </th>
      )
      theadTempOut.push(theadTemp)
    }
    const theadOut = (
      <thead>
        <tr>{theadTempOut}</tr>
      </thead>
    )

    return theadOut
  }

  generateTableBody() {
    const { tableId, tableInd, tableFunction } = this.props
    const { tableBody } = this.state

    let tbodyTemp
    const tbodyTempOut = []
    let tdTemp
    let tdTempOut = []

    for (let i = 0; i < tableBody.length; i += 1) {
      tdTempOut = []
      for (let j = 0; j < tableInd.length; j += 1) {
        if (j === 0) {
          tdTemp = (
            <td key={tableId + ' td' + i.toString() + j.toString()}>
              <label
                className="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect"
                htmlFor={tableId + i.toString()}
              >
                <input
                  type="checkbox"
                  id={tableId + i.toString()}
                  className="mdl-checkbox__input"
                  onChange={this.handleChange.bind(this)}
                />
              </label>
            </td>
          )
          tdTempOut.push(tdTemp)
        } else {
          tdTemp = (
            <td
              key={tableId + ' td' + i.toString() + j.toString()}
              onClick={tableFunction.bind(null, tableBody[i].name)}
            >
              {tableBody[i][tableInd[j]]}
            </td>
          )
          tdTempOut.push(tdTemp)
        }
      }
      tbodyTemp = (
        <tr
          key={tableId + ' th' + i.toString()}
          id={tableId + i.toString() + 'tr'}
        >
          {tdTempOut}
        </tr>
      )
      tbodyTempOut.push(tbodyTemp)
    }
    const tbodyOut = <tbody>{tbodyTempOut}</tbody>

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
  tableFunction: PropTypes.func
}

MdlTableClass.defaultProps = {
  tableId: 'tableId',
  tableClass: 'tableClass'
}
