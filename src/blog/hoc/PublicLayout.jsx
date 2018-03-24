import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { compose } from 'redux'
import { connect } from 'react-redux'
import $ from 'jquery'

import './PublicLayout/styles.css'
import Alert from '../../common/components/Alert'
import ErrorBoundary from '../../common/hoc/ErrorBoundary'
import ErrorPage from '../components/ErrorPage'
import TopNav from './PublicLayout/TopNav'
import Search from './PublicLayout/Search'
import CategoryNav from './PublicLayout/CategoryNav'

function PublicLayout(WrappedComponent) {

  class Wrapper extends Component {

    componentDidMount() {
      $('html').addClass('pub-layout')
    }

    componentWillUnmount() {
      $('html').removeClass('pub-layout')
    }

    render() {
      const { title, ...passThroughProps } = this.props
      return (
        <div>
          <TopNav />

          <div className="container">
            <div className="row">
              <div className="col-lg-8">
                <Alert />
                <h1>{title}</h1>
                <hr />
                <WrappedComponent {...passThroughProps} />
              </div>

              <div className="col-md-4">
                <Search />
                <CategoryNav />
              </div>
            </div>

            <hr />

            <footer>
              <div className="row">
                <div className="col-lg-12">
                  <p>Copyright &copy; lamhq 2018</p>
                </div>
              </div>
            </footer>
          </div>
        </div>
      )
    }
  }

  Wrapper.displayName = 'PublicLayout'
  Wrapper.propTypes = {
    title: PropTypes.string,
  }

  return Wrapper
}

export default compose(
  connect(
    state => ({
      title: state.common.title,
    })
  ),
  PublicLayout,
  ErrorBoundary(ErrorPage)
)
