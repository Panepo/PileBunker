import React, { Component } from 'react'
import Header from './Header'
import Drawer from './Drawer'
import Content from './Content'
import Footer from './Footer'
import './App.css'

export default class App extends Component {
  render() {
    return (
      <div>
        <div className="demo-layout mdl-layout mdl-js-layout mdl-color--grey-100">
          <Header />
          <Drawer />
          <div className="demo-ribbon" />
          <Content />
          <Footer />
        </div>
      </div>
    )
  }
}
