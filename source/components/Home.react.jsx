var React = require('react');
var ReactDOM = require('react-dom');
var Header = require('./Header.react.jsx');

var Home = React.createClass({
  render: function() {
      return (
        <div>
            <Header/>
            <div>
            <h2>HELLO</h2>
            <p>Cras facilisis urna ornare ex volutpat, et
            convallis erat elementum. Ut aliquam, ipsum vitae
            gravida suscipit, metus dui bibendum est, eget rhoncus nibh
            metus nec massa. Maecenas hendrerit laoreet augue
            nec molestie. Cum sociis natoque penatibus et magnis
            dis parturient montes, nascetur ridiculus mus.</p>
    
            <p>Duis a turpis sed lacus dapibus elementum sed eu lectus.</p>
            </div>
        </div>
      );
    }
});

module.exports = Home;