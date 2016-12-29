var React = require('react');
var ReactDOM = require('react-dom');
var ReactRouter = require('react-router');

var SearchSpotsResults = React.createClass({
    getInitialState: function() {
        console.log('Do this here? ' + this.props.location.query.countyId);
        return { 
            countyId: this.props.location.query.countyId
        };
    },
    componentWillMount: function() {
        console.log('Or here? ' + this.props.location.query.countyId);
        this.setState({
            countyId: this.props.location.query.countyId
        });
    }, 
    render: function () {
        return (
            <div className="searchSpotsResultsComponent" onSubmit={this.handleSubmit}>
            </div>
        );
    }
});

module.exports = SearchSpotsResults;
