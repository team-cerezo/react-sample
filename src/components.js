import React from 'react';

export const InputContent = (props) => {
    const content = props.content;
    const updateContent = props.updateContent;
    const tryAddTodo = props.tryAddTodo;
    const tryAddTodoBridge = (event) => {
        if (event.key === 'Enter') {
            tryAddTodo();
        }
    };
    return (
        <p>
            <input type="text" placeholder="やることある？" value={content}
                onChange={event => updateContent(event.target.value)}
                onKeyPress={tryAddTodoBridge}
                autoFocus />
        </p>
    );
};

export const TodoComponent = (props) => {
    const todo = props.todo;
    const updateStatus = props.updateStatus;
    return (
        <li>
            <label>
                <input type="checkbox" checked={todo.done}
                    onChange={event => updateStatus(todo.id, event.target.checked)} />
                <span>#{todo.id} {todo.content}</span>
            </label>
        </li>
    );
};

export const TodoListComponent = (props) => (
    <ul>
        {props.children}
    </ul>
);

export const ClearButton = (props) => (
    <p>
        <button onClick={props.clear}>終わったやつ消す</button>
    </p>
);

export const About = () => (
    <div>
        <h1>これはなに？</h1>
        <p>React + Flux + React Routerのサンプル</p>
    </div>
);