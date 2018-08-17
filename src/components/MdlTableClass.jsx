import React, { Component } from 'react'
import PropTypes from 'prop-types'

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
    this.handleSort = this.handleSort.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.handlePropFunc = this.handlePropFunc.bind(this)
  }

  componentWillReceiveProps = nextProps => {
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

  componentDidUpdate = () => {
    window.componentHandler.upgradeDom()
  }

  handleChange = event => {
    const trId = event.target.id + 'tr'
    if (event.target.checked) {
      document.getElementById(trId).style.backgroundColor = '#f5f5f5'
    } else {
      document.getElementById(trId).style.backgroundColor = 'transparent'
    }
  }

  handleSort = event => {
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

  handlePropFunc = input => {
    this.props.tableFunction(input)
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
    const tbodyOut = <tbody>{tbodyTempOut}</tbody>

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
