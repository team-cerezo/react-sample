import { Todo } from './models';
import store from './store';

let render;

export const updateContent = event => {
    store.content = event.target.value;
    render();
};

export const tryAddTodo = event => {
    if (store.content !== '' && event.key === 'Enter') {
        const todo = Todo.create(store.content);
        store.todoList = store.todoList.add(todo);
        store.content = '';
        render();
    }
};

export const updateStatus = (id, done) => {
    store.todoList = store.todoList.setDone(id, done);
    render();
};

export const clear = event => {
    store.todoList = store.todoList.clear();
    render();
};

export default (h) => {
  render = h;
};

