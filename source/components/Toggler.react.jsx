var React = require('react');
var ReactDOM = require('react-dom');
var Header = require('./Header.react.jsx');

var Toggler = React.createClass({
    getInitialState: function() {
        return {
            isHeaderHidden: false
        };
    },
    
    handleClick: function() {
        this.setState({
            isHeaderHidden: !this.state.isHeaderHidden
        });
    },
    
    render: function () {
        var title = 'Stateful React Component';
        var header = React.createElement(Header, { key: 'nav' }, null);
        var headerElement = React.createElement('h1', { className: 'header', key: 'header' }, title);
        var buttonElement = React.createElement('button', { className: 'btn btn-default', onClick: this.handleClick, key: 'button' }, 'Toggle Header');
        
        if (this.state.isHeaderHidden) {
            return React.createElement('div', null, [ header, buttonElement ]);
        }
        
        return React.createElement('div', null, [ header, buttonElement, headerElement ]);
    }
});

module.exports = Toggler;
