import React, { PropTypes }  from 'react';
import ReactRouter from 'react-router';
import Header from './Header.react.jsx';
import DateTimeSelectComponent from './DateTimeSelect.component.jsx';
import CountySelect from './CountySelect.react.jsx';
import TownSelect from './TownSelect.react.jsx';

const AddSpotComponent = React.createClass({
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
            <form className="addSpotForm" onSubmit={this.handleSubmit}>
                <Header/>
                <DateTimeSelectComponent ref={(dateSelect) => { this._dateSelect = dateSelect; }} />
                <CountySelect ref={(countySelect) => { this._countySelect = countySelect; }} onChange={this.countyChanged} />
                <TownSelect ref={(townSelect) => { this._townSelect = townSelect; }} />
                <input type="submit" value="Post" />
            </form>
        );
    }
});

module.exports = AddSpotComponent;
