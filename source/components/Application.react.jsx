var React = require('react');
var ReactDOM = require('react-dom');
var Header = require('./Header.react.jsx');

var Application = React.createClass({
  render: function() {
    return (
      <Header/>
      <div>
        <h1>Simple SPA</h1>
      </div>
    )
  }
});

module.exports = Application;
