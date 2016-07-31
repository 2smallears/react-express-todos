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

    createTask(event) {
        if (event.key != 'Enter') {
            return;
        }
        let task = this.refs.addTask;
        if (task.value === '') {
            return false;
        }
        this.setState(function () {
            let todo = {
                    task : task.value,
                    completed: false
                };
            todos.push(todo);
            return todos;

        })
    },

    render: function render() {
        return (
            <ul>
                <li>
                    <input type="text" placeholder="what to be done?" id="todos" ref="addTask" onKeyPress={this.createTask}/>
                </li>
                <li>
                    <TodoList />
                </li>
                <li>
                    <TodoForm />
                </li>
            </ul>
        );
    }
});

ReactDOM.render(
    <Todo/>, document.getElementById('AppRoot')
);
