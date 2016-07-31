var React = require('react');
var ReactDOM = require('react-dom');

var Hello = React.createClass({

    render: function render() {
        return (
            <div>
                <h1>ToDos</h1>
                <input type="text" placeholder="what to be done?" name="todo"/>
            </div>
        );
    }
});

ReactDOM.render(
    <Hello/>, document.getElementById('AppRoot')
);
