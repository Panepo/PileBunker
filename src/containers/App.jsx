import React, { Component } from 'react'
import Header from './Header'
import Content from './Content'
import Footer from './Footer'
import '../../css/App.css'

export default class App extends Component {
	render() {
		return (
			<div>
				<div className="demo-layout mdl-layout mdl-layout--fixed-header mdl-js-layout mdl-color--grey-100">
					<Header />
					<div className="demo-ribbon mdl-shadow--4dp" />
					<Content />
					<Footer />
				</div>
			</div>
		)
	}
}
