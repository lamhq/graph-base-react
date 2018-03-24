import React, { Component } from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'
import PropTypes from 'prop-types'

import { loadPost } from '../actions'
import { setTitle } from '../../common/actions'
// import PublicLayout from '../widgets/PublicLayout'
import Spinner from '../../common/components/Spinner'

class PostDetailPage extends Component {

  async componentDidMount() {
    const { setTitle, loadPost, match } = this.props
    var postId = match.params.id
    try {
      var resp = await loadPost(postId)
      setTitle(resp.data.title)
    } catch (error) { }
  }

  render() {
    const { post, postLoaded } = this.props
    return (
      <div>
        {postLoaded ?
          (
            <div>
              <h1>{post.title}</h1>
              <div>{post.content}</div>
            </div>
          )
          : <Spinner />
        }
      </div>
    )
  }
}

PostDetailPage.propTypes = {
  setTitle: PropTypes.func,
  postLoaded: PropTypes.bool,
  loadPost: PropTypes.func,
  post: PropTypes.object,
}

export default compose(
  // PublicLayout,
  connect(
    state => ({
      postLoaded: state.common.request.loadPost,
      post: state.blog.postDetail.post
    }),
    dispatch => ({
      setTitle: title => dispatch(setTitle(title)),
      loadPost: id => dispatch(loadPost(id)),
    })
  )
)(PostDetailPage)