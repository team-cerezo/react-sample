import React from 'react';
import ReactDOM from 'react-dom';

class Todo {
    constructor(id, content, done) {
        this.id = id;
        this.content = content;
        this.done = done;
    }
    setDone(done) {
        return new Todo(this.id, this.content, done);
    }
    static idGenerator = 0;
    static create(content) {
        return new Todo(++Todo.idGenerator, content, false);
    }
}

class TodoList {
    constructor(list) {
        this.list = list;
    }
    static empty() {
        return new TodoList([]);
    }
    add(todo) {
        return new TodoList([todo, ...this.list]);
    }
    setDone(id, done) {
        return new TodoList(this.list.map(todo => {
            if (todo.id === id) {
                return todo.setDone(done);
            }
            return todo;
        }));
    }
    clear() {
        return new TodoList(this.list.filter(todo => todo.done === false));
    }
}

//Hello, world!のときのmessageと同じ理由でletを使用している。
let todoList = TodoList.empty()
    .add(Todo.create('環境構築').setDone(true))
    .add(Todo.create('JavaScriptチュートリアル'))
    .add(Todo.create('Reactチュートリアル'));

//Hello, world!のときのmessageと同じ理由でletを使用している。
let content = '';

const updateContent = event => {
    content = event.target.value;
    render();
};

const tryAddTodo = event => {
    if (content !== '' && event.key === 'Enter') {
        const todo = Todo.create(content);
        todoList = todoList.add(todo);
        content = '';
        render();
    }
};

const updateStatus = (id, done) => {
    todoList = todoList.setDone(id, done);
    render();
};

const clear = event => {
    todoList = todoList.clear();
    render();
};

const render = () => {
    ReactDOM.render(<App />, document.getElementById('root'));
};

const App = () => (
    <div>
        <h1>やること</h1>
        <p>
            <input type="text" placeholder="やることある？" value={content}
                onChange={updateContent} onKeyPress={tryAddTodo} />
        </p>
        <ul>
            {todoList.list.map(todo => (
                <li key={todo.id}>
                    <label>
                        <input type="checkbox" checked={todo.done}
                            onChange={event => updateStatus(todo.id, event.target.checked)} />
                        <span>#{todo.id} {todo.content}</span>
                    </label>
                </li>
            ))}
        </ul>
        <p>
            <button onClick={clear}>終わったやつ消す</button>
        </p>
    </div>
);

render();
