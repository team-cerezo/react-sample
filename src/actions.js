import { todoListStore, contentStore } from './store';

export const updateContent = event => {
    contentStore.update(event.target.value);
};

export const tryAddTodo = event => {
    if (contentStore.content !== '' && event.key === 'Enter') {
        todoListStore.add(contentStore.content);
        contentStore.clear();
    }
};

export const updateStatus = (id, done) => {
    todoListStore.setDone(id, done);
};

export const clear = event => {
    todoListStore.clear();
};