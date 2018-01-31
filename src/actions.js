import TodoDispatcher from './dispatcher';
import ActionTypes from './action-types';
import { contentStore } from './store';

export const updateContent = event => {
    const content = event.target.value;
    TodoDispatcher.dispatch({
        type: ActionTypes.UPDATE_CONTENT,
        payload: { content }
    });
};

export const tryAddTodo = event => {
    const content = contentStore.content;
    if (content !== '' && event.key === 'Enter') {
        TodoDispatcher.dispatch({
            type: ActionTypes.ADD_TODO,
            payload: { content }
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