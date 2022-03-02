import React from 'React';
import ReactDOM from 'React-Dom';


var Hello = React.createClass({
  render: function() {
    return <h1 className="red">
      Hello!
    </h1>
  }
});

var element = React.createElement(Hello, {});
ReactDOM.render(element, document.querySelector('.container'));
