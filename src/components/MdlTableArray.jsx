import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class MdlTableArray extends Component {
  constructor(props, context) {
    super(props, context)
    this.state = {
      tableBody: this.props.tableData,
      sortKey: 'dps',
      sortDir: 1
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSort = this.handleSort.bind(this)
    this.handlePropFunc = this.handlePropFunc.bind(this)
  }

  componentDidUpdate = () => {
    window.componentHandler.upgradeDom()
  }

  componentWillReceiveProps = nextProps => {
    const { sortDir, sortKey } = this.state
    var tempData = nextProps.tableData

    if (sortDir) {
      tempData.sort(function(a, b) {
        return b[sortKey] - a[sortKey]
      })
    } else {
      tempData.sort(function(a, b) {
        return a[sortKey] - b[sortKey]
      })
    }

    this.setState({
      tableBody: tempData,
      sortKey: sortKey,
      sortDir: sortDir
    })
  }

  handleChange = event => {
    var trId = event.target.id + 'tr'
    if (event.target.checked) {
      document.getElementById(trId).style.backgroundColor = '#f5f5f5'
    } else {
      document.getElementById(trId).style.backgroundColor = 'transparent'
    }
  }

  handlePropFunc = input => {
    this.props.tableFunction(input)
  }

  handleSort = event => {
    const { sortDir, sortKey, tableBody } = this.state
    var newKey = event.target.id
    var tempData = tableBody
    var newDir = sortDir

    if (newKey === sortKey) {
      if (sortDir) {
        newDir = 0
      } else {
        newDir = 1
      }
    }

    if (newDir) {
      tempData.sort(function(a, b) {
        return b[newKey] - a[newKey]
      })
    } else {
      tempData.sort(function(a, b) {
        return a[newKey] - b[newKey]
      })
    }

    this.setState({
      tableBody: tempData,
      sortKey: newKey,
      sortDir: newDir
    })
  }

  renderTableHead = () => {
    const { tableHead, tableId, tableInd } = this.props
    const { sortDir, sortKey } = this.state

    const theadTempOut = tableHead.reduce((output, data, i) => {
      let theadClass = ''
      if (tableInd[i] === sortKey) {
        if (sortDir === 1) {
          theadClass = 'theadOver'
        } else {
          theadClass = 'theadUnder'
        }
      }

      output.push(
        <th
          className={theadClass}
          id={tableInd[i]}
          key={tableId + ' th' + i.toString()}
          onClick={this.handleSort}>
          {data}
        </th>
      )
      return output
    }, [])

    return (
      <thead>
        <tr>{theadTempOut}</tr>
      </thead>
    )
  }

  renderTableBody = () => {
    const { tableId, tableInd } = this.props
    const { tableBody } = this.state

    var tbodyOut
    var tbodyTemp
    var tbodyTempOut = []
    for (var i = 0; i < tableBody.length; i++) {
      var tdTemp
      var tdTempOut = []
      for (var j = 0; j < tableInd.length; j++) {
        if (j === 0) {
          tdTemp = (
            <td key={tableId + ' td' + i.toString() + j.toString()}>
              <label
                className="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect"
                htmlFor={tableId + i.toString()}>
                <input
                  type="checkbox"
                  id={tableId + i.toString()}
                  className="mdl-checkbox__input"
                  onChange={this.handleChange}
                />
              </label>
            </td>
          )
          tdTempOut.push(tdTemp)
        } else {
          tdTemp = (
            <td
              key={tableId + ' td' + i.toString() + j.toString()}
              onClick={() => {
                this.handlePropFunc(tableBody[i].name)
              }}>
              {tableBody[i][tableInd[j]]}
            </td>
          )
          tdTempOut.push(tdTemp)
        }
      }
      tbodyTemp = (
        <tr
          key={tableId + ' th' + i.toString()}
          id={tableId + i.toString() + 'tr'}>
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
        {this.renderTableHead()}
        {this.renderTableBody()}
      </table>
    )
  }
}

MdlTableArray.propTypes = {
  tableId: PropTypes.string,
  tableInd: PropTypes.array,
  tableHead: PropTypes.array,
  tableData: PropTypes.array,
  tableClass: PropTypes.string,
  tableFunction: PropTypes.func
}

MdlTableArray.defaultProps = {
  tableId: 'mdl-table-class',
  tableInd: [],
  tableHead: [],
  tableData: [],
  tableClass: 'mdl-table-class'
}
