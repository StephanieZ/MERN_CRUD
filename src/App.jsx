
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Redirect, browserHistory, withRouter } from 'react-router';

import IssueList from './IssueList.jsx';
import IssueEdit from './IssueEdit.jsx';

const contentNode = document.getElementById('contents');
const NoMatch = () => <p>Page Not Found</p>;


const App = (props) => (
  <div>
    <div className="header">
      <h1>Issue Tracker</h1>
    </div>
    <div className="contents">
      {props.children}
    </div>
    <div className="footer">
      Full source code available at this <a href="https://github.com/StephanieZ/MERN_CRUD">
      GitHub repository</a>.
    </div>
  </div>
);

App.propTypes = {
  children: React.PropTypes.object.isRequired,
};
const RoutedApp = () => (
  <Router history={browserHistory} >
    <Redirect from="/" to="/issues" />
    <Route path="/" component={App} />
    <Route path="/issues" component={withRouter(IssueList)} />
    <Route path="/issues/:id" component={IssueEdit} />
    <Route path="*" component={NoMatch} />
  </Router>
);

ReactDOM.render(<RoutedApp />, contentNode);    // Render the component inside the content Node

if (module.hot) {
  module.hot.accept();
}
