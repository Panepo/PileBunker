import React, { Component, PropTypes } from 'react'

export default class TextInput extends Component {
	render() {
		const { title, modelId, classes, inputFunc, defaultValue } = this.props

		return (
			<div className={classes + " mdl-textfield mdl-js-textfield mdl-textfield--floating-label"}>
				<input className="mdl-textfield__input" type="text" pattern="-?[0-9]*(\.[0-9]+)?" id={modelId + " textInput"} onInput={inputFunc.bind(null, modelId)} defaultValue={defaultValue}/>
				<label className="mdl-textfield__label" htmlFor={modelId + " textInput"}>{title}</label>
				<span className="mdl-textfield__error">数値が正しくありません</span>
			</div>
		)
		
	}
}

TextInput.propTypes = {
	classes: PropTypes.string,
	title: PropTypes.string,
	modelId: PropTypes.string,
	inputFunc: PropTypes.func,
	defaultValue: PropTypes.number,
}
