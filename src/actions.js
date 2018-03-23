import TodoDispatcher from './dispatcher';
import ActionTypes from './action-types';
import { contentStore } from './store';
import { Todo } from './models';

export const updateContent = content => {
    TodoDispatcher.dispatch({
        type: ActionTypes.UPDATE_CONTENT,
        payload: { content }
    });
};

export const tryAddTodo = () => {
    const content = contentStore.getState();
    if (content !== '') {
        const todo = Todo.create(content);
        TodoDispatcher.dispatch({
            type: ActionTypes.ADD_TODO,
            payload: { todo }
        });
    }
};

export const updateStatus = (id, done) => {
    TodoDispatcher.dispatch({
        type: ActionTypes.SET_DONE,
        payload: { id, done }
    });
};

export const clear = event => {
    TodoDispatcher.dispatch({
        type: ActionTypes.CLEAR
    });
};
