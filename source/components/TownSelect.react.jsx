var React = require('react');
var ReactDOM = require('react-dom');

var TownSelect = React.createClass({
    getInitialState: function() {
        return { 
            townId: '',
            towns: [] 
        };
    },
    loadTowns: function(countyId) {
        var xhr = new XMLHttpRequest();
        
        if (countyId === null) {
            xhr.open('get', 'https://localhost:8443/ActsInTown-api/town', true);
        } else {
            xhr.open('get', 'https://localhost:8443/ActsInTown-api/town/for-county/' + countyId, true);
        }
        
        xhr.onload = function() {
            var data = JSON.parse(xhr.responseText);
            this.setState({ towns: data });
        }.bind(this);
        
        xhr.send();
    },
    componentWillMount: function() {
        this.loadTowns(null);
    },
    handleTownChanged: function(e) {
        this.setState({
            townId: e.target.value
        });
    },
    setCounty: function(countyId) {
        this.loadTowns(countyId);
        
        this.setState({
            townId: ''
        });
    },
    getValue: function() {
        return this.state.townId;
    },
    render: function () {
        var townOptions = this.state.towns.map(function(town) {
            return (
                <option value={town.id} key={town.id}>{town.name}</option>
            );
        });
        
        townOptions.splice(0, 0, <option value='' key='default'>Please select...</option>);
        
        return (
            <select onChange={this.handleTownChanged} value={this.state.townId}>
                {townOptions}
            </select>
        );
    }
});

module.exports = TownSelect;
