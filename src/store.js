import { ReduceStore } from 'flux/utils';

import TodoDispatcher from './dispatcher';
import ActionTypes from './action-types';
import { TodoList } from './models';

class TodoListStore extends ReduceStore {
    getInitialState() {
        return TodoList.empty();
    }
    reduce(state, { type, payload }) {
        switch (type) {
            case ActionTypes.ADD_TODO: {
                const { todo } = payload;
                return state.add(todo);
            }
            case ActionTypes.SET_DONE: {
                const { id, done } = payload;
                return state.setDone(id, done);
            }
            case ActionTypes.LOAD: {
                const { todoList } = payload;
                return todoList;
            }
            default:
                return state;
        }
    }
}

export const todoListStore = new TodoListStore(TodoDispatcher);

class ContentStore extends ReduceStore {
    getInitialState() {
        return '';
    }
    reduce(state, { type, payload }) {
        switch (type) {
            case ActionTypes.UPDATE_CONTENT: {
                const { content } = payload;
                return content;
            }
            case ActionTypes.ADD_TODO: {
                return '';
            }
            default:
                return state;
        }
    }
}

export const contentStore = new ContentStore(TodoDispatcher);
