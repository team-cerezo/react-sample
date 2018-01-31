import { todoListStore, contentStore } from './store';

let render;

export const updateContent = event => {
    contentStore.update(event.target.value);
    render();
};

export const tryAddTodo = event => {
    if (contentStore.content !== '' && event.key === 'Enter') {
        todoListStore.add(contentStore.content);
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