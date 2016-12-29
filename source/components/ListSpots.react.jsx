var React = require('react');
var PropTypes = require('react').PropTypes;
var ReactDOM = require('react-dom');
var ReactRouter = require('react-router');
var Header = require('./Header.react.jsx');

var addSpotAction = require('../actions/AddSpot.action.js');
var store = require('../store/index.js');

var ListSpots = React.createClass({
    propTypes: {
        spots: PropTypes.arrayOf(PropTypes.shape({
            text: PropTypes.string.isRequired
        }).isRequired).isRequired
    },
    /*getInitialState: function() {
        return { 
            spots: [] 
        };
    },
    loadSpots: function() {
        var xhr = new XMLHttpRequest();
        xhr.open('get', 'https://localhost:8443/ActsInTown-api/spot/for-test-user', true);

        xhr.onload = function() {
            var data = JSON.parse(xhr.responseText);
            this.setState({ spots: data });
        }.bind(this);
        
        xhr.send();
    },
    componentWillMount: function() {
        this.loadSpots();
    }, */
    componentDidMount: function() {
        store.dispatch(addSpotAction('Adding spot'));
    },
    render: function () {
        //var spots = this.stae.spots;
        //var spots = this.props.spots;
        
        /*var spotRows = spots.map(function(spot) {
            return (
                <div className="spotRow" key={spot.id}>Time: {spot.scheduledFor}, User: {spot.user.username}, Town: {spot.town.name}</div>
            );
        });*/
        
        var spotRows = this.props.spots.map(function(spot) {
            return (
                <div className="spotRow" key={spot.text}>{spot.text}</div>
            );
        });
        
        return (
            <div className="listSpotsComponent">
                <Header/>
                {spotRows}
                <button onClick={this.props.add}>Add</button>
            </div>
        );
    }
});

module.exports = ListSpots;

/*
    http://redux.js.org/docs/basics/ExampleTodoList.html
    http://blog.krawaller.se/posts/a-react-redux-example-app/
    https://css-tricks.com/learning-react-redux/
    */