import { Todo, TodoList } from './models';

let todoList = TodoList.empty()
    .add(Todo.create('環境構築').setDone(true))
    .add(Todo.create('JavaScriptチュートリアル'))
    .add(Todo.create('Reactチュートリアル'));

let content = '';

const store = { todoList, content };

export default store;

class TodoListStore {
    add(content) {
        const todo = Todo.create(content);
        store.todoList = store.todoList.add(todo);
    }
    setDone(id, done) {
        store.todoList = store.todoList.setDone(id, done);
    }
    clear() {
        store.todoList = store.todoList.clear();
    }
}

export const todoListStore = new TodoListStore();

class ContentStore {
    update(content) {
        store.content = content;
    }
    clear() {
        store.content = '';
    }
}

export const contentStore = new ContentStore();
