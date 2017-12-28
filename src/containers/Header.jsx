import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { modelOpen, modelClose } from '../actions'
import IndexTable from './IndexTable'
import TextModel from '../components/TextModel'
import '../../css/Header.css'

class Header extends Component {
	render() {
		const { modelStatus, modelOpen, modelClose } = this.props
		return (
			<header className="demo-header mdl-layout__header mdl-color--grey-100 mdl-color-text--grey-800">
				<IndexTable />
				<div className="mdl-layout__header-row mdl-shadow--4dp">
					<span className="mdl-layout-title"><b>城プロRE 武器傷害機算機 蓬萊パイルバンカー</b></span>
					<div className="mdl-layout-spacer" />
					<nav className="mdl-navigation">
						<a className="mdl-button mdl-js-button mdl-js-ripple-effect mdl-button--primary" href="http://www.dmm.com/netgame_s/oshirore/">城プロRE</a>
						<a className="mdl-button mdl-js-button mdl-js-ripple-effect mdl-button--primary" href="http://scre.swiki.jp/">攻略wiki</a>
						<a className="mdl-button mdl-js-button mdl-js-ripple-effect mdl-button--primary" href="http://www116.sakura.ne.jp/~kuromoji/castle_enemy.htm">くろもじ屋</a>
					</nav>
				</div>
			</header>
		)
	}
}

Header.propTypes = {
	modelStatus: PropTypes.string.isRequired,
	modelOpen: PropTypes.func.isRequired,
	modelClose: PropTypes.func.isRequired
}

const mapStateToProps = function mapStateToProps(state) {
	return {
		modelStatus: state.reducerPage.modelStatus
	}
}

const mapDispatchToProps = function mapDispatchToProps(dispatch) {
	return {
		modelOpen: bindActionCreators(modelOpen, dispatch),
		modelClose: bindActionCreators(modelClose, dispatch)
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Header)
