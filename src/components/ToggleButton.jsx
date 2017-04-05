import React, { Component, PropTypes } from 'react'

export default class ToggleButton extends Component {
	render() {
		const { display, title, onClickFunc, modelId, Cactive, Cinactive } = this.props

		let bClassName = ''
		if (display === modelId) {
			bClassName = Cactive
		} else {
			bClassName = Cinactive
		}

		return (
			<button className={bClassName} onClick={onClickFunc.bind(null, modelId)}>{title}</button>
		)
	}
}

ToggleButton.propTypes = {
	display: PropTypes.string,
	title: PropTypes.string,
	onClickFunc: PropTypes.func,
	modelId: PropTypes.string,
	Cactive: PropTypes.string,
	Cinactive: PropTypes.string
}

ToggleButton.defaultProps = {
	display: 0,
	title: 'ToggleButton',
	modelId: 'ToggleButton',
	classActive: 'type-button mdl-button mdl-js-button mdl-js-ripple-effect mdl-button--primary',
	classInactive: 'type-button mdl-button mdl-js-button mdl-js-ripple-effect mdl-button--accent'
}
