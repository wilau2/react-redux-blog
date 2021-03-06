import 'babel-polyfill'
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import App from './components/App'
import configureStore from './store/configureStore'
import { Router, Route, browserHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'
import Articles from './containers/Articles'
import Article from './components/Article'
import UnapprovedComments from './containers/UnapprovedComments'
import ApproveComment from './containers/ApproveComment'

const store = configureStore()
const history = syncHistoryWithStore(browserHistory, store)

render(
  <Provider store={store}>
    <Router history={history}>
        <Route path="/" component={App}>
        	<Route path="/articles" component={Articles}> 
        		<Route path=":id" component={Article}/>
        	</Route>
        	<Route path="/unapprovedComments" component={UnapprovedComments}> 
        		<Route path=":id" component={ApproveComment}/>
        	</Route>
        </Route>
      </Router>
  </Provider>,
  document.getElementById('root')
)
