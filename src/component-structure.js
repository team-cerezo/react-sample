import React from 'react';

import { updateContent, tryAddTodo, updateStatus, clear } from './actions';
import { InputContent, TodoListComponent, TodoComponent, ClearButton } from './components';

const App = (props) => (
    <div>
        <h1>やること</h1>
        <InputContent
            content={props.content}
            updateContent={updateContent}
            tryAddTodo={tryAddTodo} />
        <TodoListComponent>
            {props.todoList.list.map(todo => (
                <TodoComponent
                    key={todo.id}
                    todo={todo}
                    updateStatus={updateStatus} />
            ))}
        </TodoListComponent>
        <ClearButton clear={clear} />
    </div>
);

export default App;
