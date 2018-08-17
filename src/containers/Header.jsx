import React, { Component } from 'react'
import { listLink } from '../constants/ConstLink'
import IndexTable from './IndexTable'
import './Header.css'

export default class Header extends Component {
  renderLink = () => {
    return listLink.reduce((output, data, i) => {
      output.push(
        <a
          className="mdl-button mdl-js-button mdl-js-ripple-effect mdl-button--primary"
          key={'header-link' + i.toString()}
          href={data.link}>
          {data.text}
        </a>
      )
      return output
    }, [])
  }

  render() {
    return (
      <header className="demo-header mdl-layout__header mdl-color--grey-100 mdl-color-text--grey-800">
        <IndexTable />
        <div className="mdl-layout__header-row mdl-shadow--4dp">
          <span className="mdl-layout-title">
            <b>城プロRE 武器傷害機算機 蓬萊パイルバンカー</b>
          </span>
          <div className="mdl-layout-spacer" />
          <nav className="mdl-navigation">{this.renderLink()}</nav>
        </div>
      </header>
    )
  }
}
