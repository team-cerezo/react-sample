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

export const tryAddTodo = async () => {
    const content = contentStore.getState();
    if (content !== '') {
        const body = new URLSearchParams();
        body.append('content', content);
        const response = await fetch('/api/todolist', { method: 'POST', body });
        const json = await response.json();
        const todo = Todo.fromJson(json);
        return TodoDispatcher.dispatch({
            type: ActionTypes.ADD_TODO,
            payload: { todo }
        });
    }
    return Promise.resolve();
};

export const updateStatus = async (id, done) => {
    const body = new URLSearchParams();
    body.append('done', done);
    await fetch(`/api/todolist/${id}`, { method: 'POST', body });
    return TodoDispatcher.dispatch({
        type: ActionTypes.SET_DONE,
        payload: { id, done }
    });
};

export const clear = async event => {
    await fetch(`/api/todolist/_delete`, { method: 'POST' });
    return load();
};

export const load = async () => {
    const response = await fetch('/api/todolist');
    const json = await response.json();
    const todoList = TodoList.fromJson(json);
    return TodoDispatcher.dispatch({
        type: ActionTypes.LOAD,
        payload: { todoList }
    });
};

