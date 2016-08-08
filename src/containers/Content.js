import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { typeChange, plainChange, maxChange, inputChange } from '../actions'
import ToggleButton from '../components/ToggleButton'
import InputBoxValue from '../components/InputBoxValue'
import { listType, listTypeS, listBut, listButS } from '../constants/ConstList'
import '../../css/Content.css'

class Content extends Component {
	render() {
		const { type, typeChange, plain, plainChange, max, maxChange } = this.props
		const { atk, def, atkSkill, defSkill, aspdSkill, aspdSpell, inputChange, atkSkillInt, defSkillInt } = this.props
		
		var typeTemp
		var typeOut = []
		for (var i=0; i<listType.length; i++){
			typeTemp = (
				<ToggleButton
					key={"inputType" + i.toString()}
					display={type}
					title={listType[i]}
					onClickFunc={(modelId) => typeChange(modelId)}
					modelId={listTypeS[i]}
					Cactive={"type-button mdl-button mdl-js-button mdl-js-ripple-effect mdl-button--primary"}
					Cinactive={"type-button mdl-button mdl-js-button mdl-js-ripple-effect mdl-button--accent"}
					/>
			)
			typeOut.push(typeTemp)
		}
		
		var butTemp
		var butOut = []
		for (var i=0; i<listBut.length; i++){
			butTemp = (
				<ToggleButton
					key={"inputBut" + i.toString()}
					display={max}
					title={listBut[i]}
					onClickFunc={(modelId) => maxChange(modelId)}
					modelId={listButS[i]}
					Cactive={"mdl-button mdl-js-button mdl-js-ripple-effect mdl-button--primary"}
					Cinactive={"mdl-button mdl-js-button mdl-js-ripple-effect mdl-button--accent"}
					/>
			)
			butOut.push(butTemp)
		}
		
		return (
			<main className="demo-main mdl-layout__content">
				<div className="demo-container mdl-grid">
					<div className="mdl-cell mdl-cell--2-col mdl-cell--hide-tablet mdl-cell--hide-phone"></div>
					<div className="content demo-content mdl-color--white mdl-shadow--4dp content mdl-color-text--grey-800 mdl-cell mdl-cell--8-col">
						<h4>城プロRE 武器傷害機算機 パイルバンカー</h4>
						<h5>設定</h5>
						<div>
							武器種：
							{typeOut}
						</div>
						<div>
							地形適性：
							<ToggleButton
								key={"inputType" + i.toString()}
								display={plain}
								title={"地形適性あり"}
								onClickFunc={(modelId) => plainChange(modelId)}
								modelId={"plain"}
								Cactive={"mdl-button mdl-js-button mdl-js-ripple-effect mdl-button--primary"}
								Cinactive={"mdl-button mdl-js-button mdl-js-ripple-effect mdl-button--accent"}
								/>
						</div>
						<div>
							巨大化：
							{butOut}
						</div>
						<div>
							<InputBoxValue 
								classes={"text-input"}
								title={"城娘攻擊力"}
								modelId={"atk"}
								inputFunc={(modelId, modelValue) => inputChange(modelId, modelValue)}
								defaultValue={atk}
								/>
							<InputBoxValue 
								classes={"text-input"}
								title={"兜防禦力"}
								modelId={"def"}
								inputFunc={(modelId, modelValue) => inputChange(modelId, modelValue)}
								defaultValue={def}
								/>
							<InputBoxValue 
								classes={"text-input"}
								title={"技能攻擊速度增加"}
								modelId={"aspdSkill"}
								inputFunc={(modelId, modelValue) => inputChange(modelId, modelValue)}
								defaultValue={aspdSkill}
								/>
							<InputBoxValue 
								classes={"text-input"}
								title={"策略攻擊速度增加"}
								modelId={"aspdSpell"}
								inputFunc={(modelId, modelValue) => inputChange(modelId, modelValue)}
								defaultValue={aspdSpell}
								/>
						</div>
						<div>
							<InputBoxValue 
								classes={"text-input"}
								title={"技能攻擊力增加(%)"}
								modelId={"atkSkill"}
								inputFunc={(modelId, modelValue) => inputChange(modelId, modelValue)}
								defaultValue={atkSkill}
								/>
							<InputBoxValue 
								classes={"text-input"}
								title={"技能攻擊力增加"}
								modelId={"atkSkillInt"}
								inputFunc={(modelId, modelValue) => inputChange(modelId, modelValue)}
								defaultValue={atkSkillInt}
								/>
							<InputBoxValue 
								classes={"text-input"}
								title={"技能兜防禦力減少(%)"}
								modelId={"defSkill"}
								inputFunc={(modelId, modelValue) => inputChange(modelId, modelValue)}
								defaultValue={defSkill}
								/>
							<InputBoxValue 
								classes={"text-input"}
								title={"技能兜防禦力減少"}
								modelId={"defSkillInt"}
								inputFunc={(modelId, modelValue) => inputChange(modelId, modelValue)}
								defaultValue={defSkillInt}
								/>
						</div>
					</div>
				</div>
			</main>
		)
	}
}

Content.propTypes = {
	type: PropTypes.string.isRequired,
	plain: PropTypes.string.isRequired,
	max: PropTypes.string.isRequired,
	atk: PropTypes.number.isRequired,
	def: PropTypes.number.isRequired,
	atkSkill: PropTypes.number.isRequired,
	defSkill: PropTypes.number.isRequired,
	atkSkillInt: PropTypes.number.isRequired,
	defSkillInt: PropTypes.number.isRequired,
	aspdSkill: PropTypes.number.isRequired,
	aspdSpell: PropTypes.number.isRequired,
}

const mapStateToProps = (state) => {
	return {
		type: state.reducerCalc.type,
		plain: state.reducerCalc.plain,
		max: state.reducerCalc.max,
		atk: state.reducerCalc.atk,
		def: state.reducerCalc.def,
		atkSkill: state.reducerCalc.atkSkill,
		defSkill: state.reducerCalc.defSkill,
		atkSkillInt: state.reducerCalc.atkSkillInt,
		defSkillInt: state.reducerCalc.defSkillInt,
		aspdSkill: state.reducerCalc.aspdSkill,
		aspdSpell: state.reducerCalc.aspdSpell,
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		typeChange: bindActionCreators(typeChange, dispatch),
		plainChange: bindActionCreators(plainChange, dispatch),
		maxChange: bindActionCreators(maxChange, dispatch),
		inputChange: bindActionCreators(inputChange, dispatch),
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Content)
