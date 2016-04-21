import React from 'react';
import ReactDOM from 'react-dom';

import App from './component/app';
import About from './component/about';
import List from './component/list';

import {Router, Route, browserHistory} from 'react-router';

class NotFound extends React.Component {
    render () {
        return (
            <div>
                <h3>404</h3>
            </div>
        );
    }
};

const router = (
    <Router history={browserHistory}>
        <Route path="/" component={App}>
            <Route path="about" component={About} />
            <Route path="list/:id" component={List} />
            <Route path="*" component={NotFound} />
        </Route>
    </Router>
);

ReactDOM.render(
    router,
    document.getElementById('app')
);
