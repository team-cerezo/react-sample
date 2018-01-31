import store, { todoListStore, contentStore } from './store';

let render;

export const updateContent = event => {
    contentStore.update(event.target.value);
    render();
};

export const tryAddTodo = event => {
    if (store.content !== '' && event.key === 'Enter') {
        todoListStore.add(store.content);
        contentStore.clear();
        render();
    }
};

export const updateStatus = (id, done) => {
    todoListStore.setDone(id, done);
    render();
};

export const clear = event => {
    todoListStore.clear();
    render();
};

export default (h) => {
    render = h;
};