import React, { Component } from 'react'

export default class Footer extends Component {
  render() {
    return (
      <footer className="demo-footer mdl-mini-footer">
        <div className="mdl-mini-footer--left-section">
          <div>
            <small>
              {' '}
              『<a href="http://www.dmm.com/netgame_s/oshirore/">城プロRE</a>
              』(C) DMMゲームズ
            </small>
          </div>
          <div>
            <small>
              「城プロRE」から転載された全てのコンテンツの著作権につきましては、権利者様へ帰属します。
            </small>
          </div>
          <div>
            <small>
              {' '}
              Copyright &copy; Panepo@Github 2016 All Rights Reserved.
            </small>
          </div>
        </div>
      </footer>
    )
  }
}
