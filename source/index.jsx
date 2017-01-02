import React from 'react';
import ReactDOM from 'react-dom';
import ReactRouter, { browserHistory, hashHistory, IndexRoute, Route, Router} from 'react-router'; 
import { Provider } from 'react-redux';
import AddSpotContainer from './containers/addSpot.container.js';
import ListSpotsContainer from './containers/listSpots.container.js';
import store from './store/index.js';
import { syncHistoryWithStore } from 'react-router-redux'

import App from './components/App.react.jsx';

var Home = require('./components/Home.react.jsx');
var Toggler = require('./components/Toggler.react.jsx');
var SearchSpots = require('./components/SearchSpots.react.jsx');
var SearchSpotsResults = require('./components/SearchSpotsResults.react.jsx');


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


const history = syncHistoryWithStore(hashHistory, store)


ReactDOM.render(
    
    <Provider store={store}>
        <Router history={ history }>
            <Route path="/" component={ Home }>
            </Route>
            <Route path="/Toggler" component={ Toggler }>
            </Route>
            <Route path="/SearchSpots" component={ SearchSpots }>
            </Route>
            <Route path="/SearchSpotsResults" component={ SearchSpotsResults }>
            </Route>
            <Route path="/AddSpot" component={ AddSpotContainer }>
            </Route>
            <Route path="/ListSpots" component={ ListSpotsContainer }>
            </Route>
        </Router>
    </Provider>,
    document.getElementById('react-application')
);

/*ReactDOM.render(
    
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('react-application')
);*/

/*ReactDOM.render(
    
    <Provider store={store}>
        <Router history={ history }>
            <Route path="/" component={ App }>
                <IndexRoute component={Home}/>
                <Route path="Toggler" component={ Toggler }/>
                <Route path="SearchSpots" component={SearchSpots}/>
                <Route path="ListSpots" component={ListSpotsContainer}/>
            </Route>
        </Router>
    </Provider>,
    document.getElementById('react-application')
);*/

//http://stackoverflow.com/questions/33205364/how-to-organize-state-with-redux-and-react-router

