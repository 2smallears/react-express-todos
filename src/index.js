const React = require('react');
const ReactDOM = require('react-dom');

let todos = [
    {
        task: 'React',
        completed: false
    },
    {
        task: 'express',
        completed: false
    },
    {
        task: 'javascript',
        completed: true
    }
];

const TodoList = React.createClass({
    render() {
        return (
            <div>
                {todos.map(function(todo, i) {
                    var className = "";
                    if (todo.completed) {
                        className = "completed";
                    }
                    return <li className={className} key={i}>
                        <input type="text" value={todo.task} /><button>X</button>
                    </li>
                })}
            </div>
        );
    }
});
const TodoForm = React.createClass ({
    render() {
        return (
            <div className="todoForm">
            </div>
        );
    }
});

const Todo = React.createClass({
    render: function render() {
        return (
            <ul>
                <li><h1>Todos</h1></li>
                <li><input type="text" placeholder="what to be done?" id="todos"/></li>
                <li><TodoList /></li>
                <li><TodoForm /></li>
            </ul>
        );
    }
});

ReactDOM.render(
    <Todo/>, document.getElementById('AppRoot')
);
