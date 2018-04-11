import React, { Component } from 'react'
import Header from './Header'
import Content from './Content'
import Footer from './Footer'
import '../../css/App.css'

export default class App extends Component {
  render() {
    return (
      <div>
        <div className="demo-layout mdl-layout mdl-js-layout mdl-color--grey-100">
          <Header />
          <div className="mdl-layout__drawer">
            <span className="mdl-layout-title">License</span>
            <nav className="mdl-navigation">
              <a
                className="mdl-navigation__link"
                href="http://www.dmm.com/netgame_s/oshirore/"
              >
                城プロRE
              </a>
              <a
                className="mdl-navigation__link"
                href="https://facebook.github.io/react/"
              >
                React
              </a>
              <a className="mdl-navigation__link" href="http://redux.js.org/">
                Redux
              </a>
              <a className="mdl-navigation__link" href="https://getmdl.io/">
                Material Design Lite
              </a>
              <a className="mdl-navigation__link" href="http://lokijs.org/">
                LokiJS
              </a>
            </nav>
          </div>
          <div className="demo-ribbon" />
          <Content />
          <Footer />
        </div>
      </div>
    )
  }
}
