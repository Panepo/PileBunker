import React, { Component, PropTypes } from 'react'
import * as parameters from '../constants/ConstParameters'

export default class InputBoxValue extends Component {
	constructor(props, context) {
		super(props, context)
		this.state = {
			text: this.props.defaultValue
		}
	}

	componentWillReceiveProps(nextProps) {
		this.setState({
			text: nextProps.defaultValue
		})
	}

	handleInput(event) {
		const modelId = event.target.id
		let modelValue = parseInt(event.target.value, 10)

		if (isNaN(modelValue)) {
			modelValue = 0
			this.setState({ text: modelValue })
			this.props.inputFunc(modelId, modelValue)
		} else if (modelId === 'aspdSkill') {
			if (modelValue > parameters.maxAspdSkill) {
				modelValue = parameters.maxAspdSkill
			}
			this.setState({ text: modelValue })
			this.props.inputFunc(modelId, modelValue)
		} else if (modelId === 'aspdSpell') {
			if (modelValue > parameters.maxAspdSpell) {
				modelValue = parameters.maxAspdSpell
			}
			this.setState({ text: modelValue })
			this.props.inputFunc(modelId, modelValue)
		} else {
			this.setState({ text: modelValue })
			this.props.inputFunc(modelId, modelValue)
		}
	}

	render() {
		const { title, modelId, classes } = this.props

		return (
			<div className={classes + ' mdl-textfield mdl-js-textfield mdl-textfield--floating-label'} key={title}>
				<input className="mdl-textfield__input" type="text" pattern="-?[0-9]*(\.[0-9]+)?" id={modelId} onChange={this.handleInput.bind(this)} value={this.state.text} />
				<label className="mdl-textfield__label" htmlFor={modelId}>{title}</label>
				<span className="mdl-textfield__error">数値が正しくありません</span>
			</div>
		)
	}
}

InputBoxValue.propTypes = {
	classes: PropTypes.string,
	title: PropTypes.string,
	modelId: PropTypes.string,
	inputFunc: PropTypes.func,
	defaultValue: PropTypes.number
}

InputBoxValue.defaultProps = {
	classes: 'InputBoxValue',
	title: 'InputBoxValue',
	modelId: 'InputBoxValue',
	defaultValue: 0
}
