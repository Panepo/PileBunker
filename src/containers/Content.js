import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { typeChange, plainChange, maxChange } from '../actions'
import ToggleButton from '../components/ToggleButton'
import TextInput from '../components/TextInput'
import { listType, listTypeS, listBut, listButS } from '../constants/ConstList'
import '../../css/Content.css'

class Content extends Component {
	render() {
		const { type, typeChange, plain, plainChange, max, maxChange } = this.props
		
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
					Cactive={"mdl-button mdl-js-button mdl-js-ripple-effect mdl-button--primary"}
					Cinactive={"mdl-button mdl-js-button mdl-js-ripple-effect mdl-button--accent"}
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
						<h5>數值設定</h5>
						<div>
							{typeOut}
						</div>
						<div>
							<TextInput 
								classes={"text-input"}
								title={"城娘攻擊力"}
								modelId={"atk"}
								inputFunc={(modelId) => typeChange(modelId)}
								defaultValue={200}
								/>
							<TextInput 
								classes={"text-input"}
								title={"兜防禦力"}
								modelId={"def"}
								inputFunc={(modelId) => typeChange(modelId)}
								defaultValue={100}
								/>
						</div>
						<div>
							<ToggleButton
								key={"inputType" + i.toString()}
								display={plain}
								title={"地形適性"}
								onClickFunc={(modelId) => plainChange(modelId)}
								modelId={"plain"}
								Cactive={"mdl-button mdl-js-button mdl-js-ripple-effect mdl-button--primary"}
								Cinactive={"mdl-button mdl-js-button mdl-js-ripple-effect mdl-button--accent"}
								/>
							{butOut}
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
}

const mapStateToProps = (state) => {
	return {
		type: state.reducerCalc.type,
		plain: state.reducerCalc.plain,
		max: state.reducerCalc.max,
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		typeChange: bindActionCreators(typeChange, dispatch),
		plainChange: bindActionCreators(plainChange, dispatch),
		maxChange: bindActionCreators(maxChange, dispatch),
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Content)
