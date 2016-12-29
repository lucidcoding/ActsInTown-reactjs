var React = require('react');
var ReactDOM = require('react-dom');
var ReactRouter = require('react-router');
var Header = require('./Header.react.jsx');
var DateSelect = require('./DateSelect.react.jsx');
var CountySelect = require('./CountySelect.react.jsx');
var TownSelect = require('./TownSelect.react.jsx');

var SearchSpots = React.createClass({
    countyChanged: function(countyId) {
        this._townSelect.loadTowns(countyId);
    },
    handleSubmit: function(e) {
        e.preventDefault();
        var date = this._dateSelect.getValue();
        var countyId = this._countySelect.getValue();
        var townId = this._townSelect.getValue();
        ReactRouter.hashHistory.push('/SearchSpotsResults?countyId=' + countyId);
        console.log();
    },
    render: function () {
        return (
            <form className="searchSpotsForm" onSubmit={this.handleSubmit}>
                <Header/>
                <DateSelect ref={(dateSelect) => { this._dateSelect = dateSelect; }} />
                <CountySelect ref={(countySelect) => { this._countySelect = countySelect; }} onChange={this.countyChanged} />
                <TownSelect ref={(townSelect) => { this._townSelect = townSelect; }} />
                <input type="submit" value="Post" />
            </form>
        );
    }
});

module.exports = SearchSpots;
