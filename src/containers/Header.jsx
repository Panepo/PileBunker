import React, { Component, PropTypes } from 'react'
import '../../css/Header.css'

export default class Header extends Component {
	render() {
		return (
			<header className="demo-header mdl-layout__header mdl-layout__header--scroll mdl-color--grey-100 mdl-color-text--grey-800">
				<div className="mdl-layout__header-row">
					<span className="mdl-layout-title"></span>
					<div className="mdl-layout-spacer"></div>
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
