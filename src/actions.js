import TodoDispatcher from './dispatcher';
import ActionTypes from './action-types';
import { contentStore } from './store';
import { Todo, TodoList } from './models';

export const updateContent = content => {
    TodoDispatcher.dispatch({
        type: ActionTypes.UPDATE_CONTENT,
        payload: { content }
    });
};

export const tryAddTodo = () => {
    const content = contentStore.getState();
    if (content !== '') {
        const body = new URLSearchParams();
        body.append('content', content);
        fetch('/api/todolist', { method: 'POST', body })
            .then(response => response.json())
            .then(json => Todo.fromJson(json))
            .then(todo => TodoDispatcher.dispatch({
                type: ActionTypes.ADD_TODO,
                payload: { todo }
            }));
    }
};

export const updateStatus = (id, done) => {
    const body = new URLSearchParams();
    body.append('done', done);
    fetch(`/api/todolist/${id}`, { method: 'POST', body });
    TodoDispatcher.dispatch({
        type: ActionTypes.SET_DONE,
        payload: { id, done }
    });
};

export const clear = event =>
    fetch(`/api/todolist/_delete`, { method: 'POST' })
        .then(() => fetch('/api/todolist'))
        .then(response => response.json())
        .then(json => {
            const todoList = TodoList.fromJson(json);
            TodoDispatcher.dispatch({
                type: ActionTypes.LOAD,
                payload: { todoList }
            });
        });

export const load = () =>
    fetch('/api/todolist')
        .then(response => response.json())
        .then(json => {
            const todoList = TodoList.fromJson(json);
            TodoDispatcher.dispatch({
                type: ActionTypes.LOAD,
                payload: { todoList }
            });
        });
