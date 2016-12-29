var React = require('react');
var ReactDOM = require('react-dom');
var Header = require('./Header.react.jsx');

var CountySelect = React.createClass({
    getInitialState: function() {
        return { 
            countyId: '',
            counties: []
        };
    },
    loadCounties: function() {
        var xhr = new XMLHttpRequest();
        xhr.open('get', 'https://localhost:8443/ActsInTown-api/county', true);

        xhr.onload = function() {
            var data = JSON.parse(xhr.responseText);
            this.setState({ counties: data });
        }.bind(this);
        
        xhr.send();
    },
    componentWillMount: function() {
        this.loadCounties();
    },
    handleCountyChanged: function(e) {
        this.setState({
            countyId: e.target.value
        });
        
        this.props.onChange(e.target.value);
    },
    getValue: function () {
        return this.state.countyId;
    },
    render: function () {
        var countyOptions = this.state.counties.map(function(county) {
            return (
                <option value={county.id} key={county.id}>{county.name}</option>
            );
        });
        
        countyOptions.splice(0, 0, <option value='' key='default'>Please select...</option>);

        return (
            <select onChange={this.handleCountyChanged} value={this.state.countyId}>
                {countyOptions}
            </select>
        );
    }
});

module.exports = CountySelect;
