import React from 'react'
import { Provider } from 'react-redux'
import { Route, Switch } from 'react-router'
import { ConnectedRouter } from 'react-router-redux'
import store, { history } from './store'

import LoginPage from './admin/login/components/LoginPage'
import ProfilePage from './admin/profile/components/ProfilePage'
import PostListPage from './blog/post/components/PostListPage'
import PostEditPage from './blog/post/components/PostEditPage'
import NotFoundPage from './admin/components/NotFoundPage'

const App = () => (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Switch>
        <Route path="/" component={ProfilePage} exact />
        <Route path="/admin" component={ProfilePage} exact />
        <Route path="/admin/login" component={LoginPage} />
        <Route path="/admin/profile" component={ProfilePage} />
        <Route path="/admin/posts/add" component={PostEditPage} />
        <Route path="/admin/posts/edit/:id" component={PostEditPage} />
        <Route path="/admin/posts" component={PostListPage} exact />
        <Route path="/admin" component={NotFoundPage} />
      </Switch>
    </ConnectedRouter>
  </Provider>
)

export default App