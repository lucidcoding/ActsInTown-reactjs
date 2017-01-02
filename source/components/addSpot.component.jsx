import React, { PropTypes }  from 'react';
import ReactRouter, { hashHistory } from 'react-router';
import Header from './Header.react.jsx';
import DateTimeSelectComponent from './DateTimeSelect.component.jsx';
import CountySelect from './CountySelect.react.jsx';
import TownSelect from './TownSelect.react.jsx';
import { SPOTS_STATUS } from '../reducers/spot.reducer.js';

const AddSpotComponent = React.createClass({
    countyChanged: function(countyId) {
        this._townSelect.loadTowns(countyId);
    },
    componentWillReceiveProps(nextProps) {
        if (nextProps.status) {
            console.log('newProps: ' + nextProps.status);
            
            if (nextProps.status === SPOTS_STATUS.ADD_SUCCESS) {
                hashHistory.push('/ListSpots');
            }
            //this.context.router.push('/ListSpots');
        }
    },
    handleSubmit: function(e) {
        this.props.add();
        //ReactRouter.hashHistory.push('/ListSpots' + countyId);
        console.log();
    },
    render: function () {
        return (
            <form className="addSpotForm" onSubmit={this.handleSubmit}>
                <Header/>
                <DateTimeSelectComponent ref={(dateSelect) => { this._dateSelect = dateSelect; }} />
                <CountySelect ref={(countySelect) => { this._countySelect = countySelect; }} onChange={this.countyChanged} />
                <TownSelect ref={(townSelect) => { this._townSelect = townSelect; }} />
                <input type="submit" value="Post"  />
            </form>
        );
    }
});

module.exports = AddSpotComponent;
