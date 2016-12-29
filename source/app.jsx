var React = require('react');
var ReactDOM = require('react-dom');
var ReactRouter = require('react-router'); 
var Provider = require('react-redux').Provider;

//var addSpotAction = require('./actions/AddSpot.action.js');
var ListSpotsContainer = require('./containers/ListSpots.container.js');
var store = require('./store/index.js');

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
        <ReactRouter.Router history={ ReactRouter.hashHistory }>
            <ReactRouter.Route path="/" component={ Home }>
            </ReactRouter.Route>
            <ReactRouter.Route path="/Toggler" component={ Toggler }>
            </ReactRouter.Route>
            <ReactRouter.Route path="/SearchSpots" component={ SearchSpots }>
            </ReactRouter.Route>
            <ReactRouter.Route path="/SearchSpotsResults" component={ SearchSpotsResults }>
            </ReactRouter.Route>
            <ReactRouter.Route path="/ListSpots" component={ ListSpots }>
            </ReactRouter.Route>
        </ReactRouter.Router>
    </Provider>,
    document.getElementById('react-application')
);*/

ReactDOM.render(
    
    <Provider store={store}>
        <ListSpotsContainer/>
    </Provider>,
    document.getElementById('react-application')
);
