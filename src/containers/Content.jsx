import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { modelOpen } from '../actions'
import MenuType from './MenuType'
import MenuToggle from './MenuToggle'
import MenuChar from './MenuChar'
import MenuMax from './MenuMax'
import MenuOptionsA from './MenuOptionsA'
import MenuOptionsB from './MenuOptionsB'
import MenuOptionsC from './MenuOptionsC'
import OutputTable from './OutputTable'
import ToggleButton from '../components/ToggleButton'
import './Content.css'

class Content extends Component {
  render() {
    const { modelOpen } = this.props
    return (
      <main className="demo-main mdl-layout__content">
        <div className="demo-container mdl-grid">
          <div className="mdl-cell mdl-cell--2-col mdl-cell--hide-tablet mdl-cell--hide-phone" />
          <div className="content demo-content mdl-color--white mdl-shadow--4dp mdl-color-text--grey-800 mdl-cell mdl-cell--8-col">
            <div>
              <MenuType />
            </div>
            <div>
              <ToggleButton
                modelKey={'button char'}
                modelSwitch={'1'}
                modelTitle={'城娘選擇'}
                propFunc={modelId => {
                  modelOpen(modelId)
                }}
                modelId={'1'}
                modelClassActive={
                  'mdl-button mdl-js-button mdl-js-ripple-effect mdl-button--primary'
                }
                modelClassInactive={
                  'mdl-button mdl-js-button mdl-js-ripple-effect mdl-button--accent'
                }
              />
            </div>
            <MenuChar />
            <div>
              <MenuToggle />
            </div>
            <div>
              <MenuMax />
            </div>
            <MenuOptionsA />
            <MenuOptionsB />
            <MenuOptionsC />
            <OutputTable />
          </div>
        </div>
      </main>
    )
  }
}

Content.propTypes = {
  modelOpen: PropTypes.func.isRequired
}

const mapStateToProps = state => {
  return {}
}

const mapDispatchToProps = dispatch => {
  return {
    modelOpen: bindActionCreators(modelOpen, dispatch)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Content)
