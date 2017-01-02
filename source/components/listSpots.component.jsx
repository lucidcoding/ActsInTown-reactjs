import React, { PropTypes } from 'react';
import Header from './Header.react.jsx';
//import { addSpot, getSpots, getSpotsError, getSpotsSuccess } from '../actions/spots.action.js';


import store from '../store/index.js';

var ListSpotsComponent = React.createClass({
    propTypes: {
        spots: PropTypes.arrayOf(PropTypes.shape({
            id: PropTypes.string.isRequired,
            scheduledFor: PropTypes.instanceOf(Date).isRequired
            //user: PropTypes.string.isRequired
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
    componentWillMount: function() {
        this.props.getSpots();   
    },
    render: function () {
        var spotRows = this.props.spots.map(function(spot) {
            return (
                <div className="spotRow" key={spot.id}>{spot.id}, {spot.scheduledFor.toString()}</div>
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

module.exports = ListSpotsComponent;

/*
    http://redux.js.org/docs/basics/ExampleTodoList.html
    http://blog.krawaller.se/posts/a-react-redux-example-app/
    https://css-tricks.com/learning-react-redux/
    */