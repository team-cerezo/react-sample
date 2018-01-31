import React from 'react';

import store from './store';
import { updateContent, tryAddTodo, updateStatus, clear } from './actions';
import { InputContent, TodoListComponent, TodoComponent, ClearButton } from './components';

const App = () => (
    <div>
        <h1>やること</h1>
        <InputContent
            content={store.content}
            updateContent={updateContent}
            tryAddTodo={tryAddTodo} />
        <TodoListComponent>
            {store.todoList.list.map(todo => (
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

