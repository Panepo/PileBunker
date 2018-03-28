import React, { Component, PropTypes } from 'react'

export default class ToggleButton extends Component {
	render() {
		const { display, title, onClickFunc, modelId, Cactive, Cinactive, key } = this.props

		let bClassName = ''
		if (display === modelId) {
			bClassName = Cactive
		} else {
			bClassName = Cinactive
		}

		return (
			<button className={bClassName} onClick={onClickFunc.bind(null, modelId)} key={key}>{title}</button>
		)
	}
}

ToggleButton.propTypes = {
	key: PropTypes.string,
	display: PropTypes.string,
	title: PropTypes.string,
	onClickFunc: PropTypes.func,
	modelId: PropTypes.string,
	Cactive: PropTypes.string,
	Cinactive: PropTypes.string
}

ToggleButton.defaultProps = {
	key: 'ToggleButton',
	display: '0',
	title: 'ToggleButton',
	modelId: 'ToggleButton',
	Cactive: 'type-button mdl-button mdl-js-button mdl-js-ripple-effect mdl-button--primary',
	Cinactive: 'type-button mdl-button mdl-js-button mdl-js-ripple-effect mdl-button--accent'
}
