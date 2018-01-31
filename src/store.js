import TodoDispatcher from './dispatcher';
import ActionTypes from './action-types';
import { Todo, TodoList } from './models';

class TodoListStore {
    constructor() {
        this.todoList = TodoList.empty()
            .add(Todo.create('環境構築').setDone(true))
            .add(Todo.create('JavaScriptチュートリアル'))
            .add(Todo.create('Reactチュートリアル'));
        this.listeners = [];
        TodoDispatcher.register(payload => {
            const newState = this.reduce(this.todoList, payload);
            if (newState !== this.todoList) {
                this.todoList = newState;
                this.listeners.forEach(listener => listener());
            }
        });
    }
    reduce(state, { type, payload }) {
        switch (type) {
            case ActionTypes.ADD_TODO: {
                const { content } = payload;
                const todo = Todo.create(content);
                return state.add(todo);
            }
            case ActionTypes.SET_DONE: {
                const { id, done } = payload;
                return state.setDone(id, done);
            }
            case ActionTypes.CLEAR: {
                return state.clear();
            }
            default:
                return state;
        }
    }
    subscribe(listener) {
        this.listeners.push(listener);
    }
}

export const todoListStore = new TodoListStore();

class ContentStore {
    constructor() {
        this.content = '';
        this.listeners = [];
        TodoDispatcher.register(payload => {
            const newState = this.reduce(this.content, payload);
            if (newState !== this.content) {
                this.content = newState;
                this.listeners.forEach(listener => listener());
            }
        });
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
    subscribe(listener) {
        this.listeners.push(listener);
    }
}

export const contentStore = new ContentStore();
