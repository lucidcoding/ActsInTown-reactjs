import React from 'react';
import ReactDOM from 'react-dom';
import ReactRouter, { hashHistory, Route, Router} from 'react-router'; 
import { Provider } from 'react-redux';
import ListSpotsContainer from './containers/ListSpots.container.js';
import store from './store/index.js';

var Home = require('./components/Home.react.jsx');
var Toggler = require('./components/Toggler.react.jsx');
var SearchSpots = require('./components/SearchSpots.react.jsx');
var SearchSpotsResults = require('./components/SearchSpotsResults.react.jsx');
var ListSpots = require('./components/ListSpots.react.jsx');
//ReactDOM.render(<Application />, document.getElementById('react-application'));

// Store stuff
//http://redux.js.org/docs/basics/Store.html

//console.log(store.getState())

let unsubscribe = store.subscribe(() =>
  console.log(store.getState())
);
/*
store.dispatch(addSpotAction('Adding spot'));*/

//unsubscribe()
//End of store stuff

/*ReactDOM.render(
    
    <Provider store={store}>
        <Router history={ hashHistory }>
            <Route path="/" component={ Home }>
            </Route>
            <Route path="/Toggler" component={ Toggler }>
            </Route>
            <Route path="/SearchSpots" component={ SearchSpots }>
            </Route>
            <Route path="/SearchSpotsResults" component={ SearchSpotsResults }>
            </Route>
            <Route path="/ListSpots" component={ ListSpots }>
            </Route>
        </Router>
    </Provider>,
    document.getElementById('react-application')
);*/

ReactDOM.render(
    
    <Provider store={store}>
        <ListSpotsContainer/>
    </Provider>,
    document.getElementById('react-application')
);
