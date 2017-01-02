var React = require('react');
var ReactDOM = require('react-dom');
var ReactRouter = require('react-router');

var Header = React.createClass({
  render: function() {
    return (
      <div>
        <h1>Simple SPA</h1>
        <ul className="header">
          <li><ReactRouter.Link to={`/`}>Home</ReactRouter.Link></li>
          <li><ReactRouter.Link to={`/Toggler`}>Toggler</ReactRouter.Link></li>
          <li><ReactRouter.Link to={`/SearchSpots`}>Search</ReactRouter.Link></li>
          <li><ReactRouter.Link to={`/AddSpot`}>Add Spot</ReactRouter.Link></li>
          <li><ReactRouter.Link to={`/ListSpots`}>My Spots</ReactRouter.Link></li>
        </ul>
        <div className="content">
 
        </div>
      </div>
    )
  }
});

module.exports = Header;
