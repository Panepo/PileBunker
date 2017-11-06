import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { typeChange, plainChange, maxChange, inputChange, flyChange, cannonChange } from '../actions'
import ToggleButton from '../components/ToggleButton'
import InputBoxValue from '../components/InputBoxValue'
import OutputTable from './OutputTable'
import { listType, listTypeS, listBut, listButS } from '../constants/ConstList'
import '../../css/Content.css'

class Content extends Component {
	generateType() {
		const { type, typeChange } = this.props
		let typeTemp = (<label htmlFor="weaponType">武器種：</label>)
		const typeOut = []
		typeOut.push(typeTemp)

		for (let i = 0; i < listType.length; i += 1) {
			typeTemp = (
				<ToggleButton
					key={'inputType' + i.toString()}
					display={type}
					title={listType[i]}
					onClickFunc={(modelId) => {typeChange(modelId)}}
					modelId={listTypeS[i]}
					Cactive={'type-button mdl-button mdl-js-button mdl-js-ripple-effect mdl-button--primary'}
					Cinactive={'type-button mdl-button mdl-js-button mdl-js-ripple-effect mdl-button--accent'}
				/>
			)
			typeOut.push(typeTemp)
		}
		return typeOut
	}

	generateToggle() {
		const { plain, plainChange, fly, flyChange, cannon, cannonChange, type } = this.props
		let toggleTemp = (<label htmlFor="plainType">地形適性：</label>)
		const toggleOut = []
		toggleOut.push(toggleTemp)
		toggleTemp = (
			<ToggleButton
				key={'inputType plain'}
				display={plain}
				title={'地形適性あり'}
				onClickFunc={(modelId) => {plainChange(modelId)}}
				modelId={'plain'}
				Cactive={'mdl-button mdl-js-button mdl-js-ripple-effect mdl-button--primary'}
				Cinactive={'mdl-button mdl-js-button mdl-js-ripple-effect mdl-button--accent'}
			/>
			)
		toggleOut.push(toggleTemp)
		toggleTemp = (<label htmlFor="flyType">飛行兜：</label>)
		toggleOut.push(toggleTemp)
		toggleTemp = (
			<ToggleButton
				key={'inputType fly'}
				display={fly}
				title={'飛行兜あり'}
				onClickFunc={(modelId) => {flyChange(modelId)}}
				modelId={'fly'}
				Cactive={'mdl-button mdl-js-button mdl-js-ripple-effect mdl-button--primary'}
				Cinactive={'mdl-button mdl-js-button mdl-js-ripple-effect mdl-button--accent'}
			/>
			)
		toggleOut.push(toggleTemp)

		if (type === 'cannon') {
			toggleTemp = (<label htmlFor="cannonType">大砲直擊：</label>)
			toggleOut.push(toggleTemp)
			toggleTemp = (
				<ToggleButton
					key={'inputType cannon'}
					display={cannon}
					title={'大砲直擊あり'}
					onClickFunc={(modelId) => {cannonChange(modelId)}}
					modelId={'cannon'}
					Cactive={'mdl-button mdl-js-button mdl-js-ripple-effect mdl-button--primary'}
					Cinactive={'mdl-button mdl-js-button mdl-js-ripple-effect mdl-button--accent'}
				/>
				)
			toggleOut.push(toggleTemp)
		}
		return toggleOut
	}

	generateMax() {
		const { max, maxChange } = this.props
		let butTemp = (<label htmlFor="maxType">巨大化：</label>)
		const butOut = []
		butOut.push(butTemp)
		for (let i = 0; i < listBut.length; i += 1) {
			butTemp = (
				<ToggleButton
					key={'inputBut' + i.toString()}
					display={max}
					title={listBut[i]}
					onClickFunc={(modelId) => {maxChange(modelId)}}
					modelId={listButS[i]}
					Cactive={'mdl-button mdl-js-button mdl-js-ripple-effect mdl-button--primary'}
					Cinactive={'mdl-button mdl-js-button mdl-js-ripple-effect mdl-button--accent'}
				/>
			)
			butOut.push(butTemp)
		}
		return butOut
	}

	render() {
		const { level, HPParm, AtkParm, DefParm, com } = this.props
		const { atk, def, atkSkill, defSkill, aspdSkill, aspdSpell, inputChange, atkSkillInt, defSkillInt } = this.props
		return (
			<main className="demo-main mdl-layout__content">
				<div className="demo-container mdl-grid">
					<div className="mdl-cell mdl-cell--2-col mdl-cell--hide-tablet mdl-cell--hide-phone"></div>
					<div className="content demo-content mdl-color--white mdl-shadow--4dp content mdl-color-text--grey-800 mdl-cell mdl-cell--8-col">
						<div>
							{this.generateType()}
						</div>
						<div>
							<InputBoxValue
								classes={'text-input'}
								title={'城娘等級'}
								modelId={'level'}
								inputFunc={(modelId, modelValue) => {inputChange(modelId, modelValue)}}
								defaultValue={level}
							/>
							<InputBoxValue
								classes={'text-input'}
								title={'攻擊係數(%)'}
								modelId={'AtkParm'}
								inputFunc={(modelId, modelValue) => {inputChange(modelId, modelValue)}}
								defaultValue={AtkParm}
							/>
							<InputBoxValue
								classes={'text-input'}
								title={'絆'}
								modelId={'com'}
								inputFunc={(modelId, modelValue) => {inputChange(modelId, modelValue)}}
								defaultValue={com}
							/>
						</div>
						<div>
							{this.generateToggle()}
						</div>
						<div>
							{this.generateMax()}
						</div>
						<div>
							<InputBoxValue
								classes={'text-input'}
								title={'城娘素身攻擊力'}
								modelId={'atk'}
								inputFunc={(modelId, modelValue) => {inputChange(modelId, modelValue)}}
								defaultValue={atk}
							/>
							<InputBoxValue
								classes={'text-input'}
								title={'兜防禦力'}
								modelId={'def'}
								inputFunc={(modelId, modelValue) => {inputChange(modelId, modelValue)}}
								defaultValue={def}
							/>
							<InputBoxValue
								classes={'text-input'}
								title={'攻撃速度上昇(%)'}
								modelId={'aspdSkill'}
								inputFunc={(modelId, modelValue) => {inputChange(modelId, modelValue)}}
								defaultValue={aspdSkill}
							/>
							<InputBoxValue
								classes={'text-input'}
								title={'攻撃後の隙短縮(%)'}
								modelId={'aspdSpell'}
								inputFunc={(modelId, modelValue) => {inputChange(modelId, modelValue)}}
								defaultValue={aspdSpell}
							/>
						</div>
						<div>
							<InputBoxValue
								classes={'text-input'}
								title={'技能攻擊力增加(%)'}
								modelId={'atkSkill'}
								inputFunc={(modelId, modelValue) => {inputChange(modelId, modelValue)}}
								defaultValue={atkSkill}
							/>
							<InputBoxValue
								classes={'text-input'}
								title={'技能攻擊力增加'}
								modelId={'atkSkillInt'}
								inputFunc={(modelId, modelValue) => {inputChange(modelId, modelValue)}}
								defaultValue={atkSkillInt}
							/>
							<InputBoxValue
								classes={'text-input'}
								title={'技能兜防禦力減少(%)'}
								modelId={'defSkill'}
								inputFunc={(modelId, modelValue) => {inputChange(modelId, modelValue)}}
								defaultValue={defSkill}
							/>
							<InputBoxValue
								classes={'text-input'}
								title={'技能兜防禦力減少'}
								modelId={'defSkillInt'}
								inputFunc={(modelId, modelValue) => {inputChange(modelId, modelValue)}}
								defaultValue={defSkillInt}
							/>
						</div>
						<OutputTable />
					</div>
				</div>
			</main>
		)
	}
}

Content.propTypes = {
	level: PropTypes.number.isRequired,
	HPParm: PropTypes.number.isRequired,
	AtkParm: PropTypes.number.isRequired,
	DefParm: PropTypes.number.isRequired,
	com: PropTypes.number.isRequired,
	type: PropTypes.string.isRequired,
	plain: PropTypes.string.isRequired,
	cannon: PropTypes.string.isRequired,
	fly: PropTypes.string.isRequired,
	max: PropTypes.string.isRequired,
	atk: PropTypes.number.isRequired,
	def: PropTypes.number.isRequired,
	atkSkill: PropTypes.number.isRequired,
	defSkill: PropTypes.number.isRequired,
	atkSkillInt: PropTypes.number.isRequired,
	defSkillInt: PropTypes.number.isRequired,
	aspdSkill: PropTypes.number.isRequired,
	aspdSpell: PropTypes.number.isRequired,
	typeChange: PropTypes.func.isRequired,
	plainChange: PropTypes.func.isRequired,
	maxChange: PropTypes.func.isRequired,
	inputChange: PropTypes.func.isRequired,
	flyChange: PropTypes.func.isRequired,
	cannonChange: PropTypes.func.isRequired
}

const mapStateToProps = function mapStateToProps(state) {
	return {
		level: state.reducerCalc.level,
		HPParm: state.reducerCalc.HPParm,
		AtkParm: state.reducerCalc.AtkParm,
		DefParm: state.reducerCalc.DefParm,
		com: state.reducerCalc.com,
		type: state.reducerCalc.type,
		plain: state.reducerCalc.plain,
		cannon: state.reducerCalc.cannon,
		fly: state.reducerCalc.fly,
		max: state.reducerCalc.max,
		atk: state.reducerCalc.atk,
		def: state.reducerCalc.def,
		atkSkill: state.reducerCalc.atkSkill,
		defSkill: state.reducerCalc.defSkill,
		atkSkillInt: state.reducerCalc.atkSkillInt,
		defSkillInt: state.reducerCalc.defSkillInt,
		aspdSkill: state.reducerCalc.aspdSkill,
		aspdSpell: state.reducerCalc.aspdSpell,
		output: state.reducerCalc.output
	}
}

const mapDispatchToProps = function mapDispatchToProps(dispatch) {
	return {
		typeChange: bindActionCreators(typeChange, dispatch),
		plainChange: bindActionCreators(plainChange, dispatch),
		flyChange: bindActionCreators(flyChange, dispatch),
		maxChange: bindActionCreators(maxChange, dispatch),
		inputChange: bindActionCreators(inputChange, dispatch),
		cannonChange: bindActionCreators(cannonChange, dispatch)
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Content)

