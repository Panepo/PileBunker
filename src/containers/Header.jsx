import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { modelOpen, modelClose } from '../actions'
import { listLink } from '../constants/ConstLink'
import IndexTable from './IndexTable'
import '../../css/Header.css'

class Header extends Component {
  generateLink() {
    const linkOut = []
    for (let i = 0; i < listLink.length; i += 1) {
      let linkKey = 'header-link' + i.toString()
      let linkTemp = (
        <a
          className="mdl-button mdl-js-button mdl-js-ripple-effect mdl-button--primary"
          key={linkKey}
          href={listLink[i].link}
        >
          {listLink[i].text}
        </a>
      )
      linkOut.push(linkTemp)
    }
    return linkOut
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
          <nav className="mdl-navigation">{this.generateLink()}</nav>
        </div>
      </header>
    )
  }
}

Header.propTypes = {
  modelStatus: PropTypes.string.isRequired,
  modelOpen: PropTypes.func.isRequired,
  modelClose: PropTypes.func.isRequired
}

const mapStateToProps = function mapStateToProps(state) {
  return {
    modelStatus: state.reducerCalc.modelStatus
  }
}

const mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    modelOpen: bindActionCreators(modelOpen, dispatch),
    modelClose: bindActionCreators(modelClose, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)
