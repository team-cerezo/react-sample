import { Todo, TodoList } from './models';

class TodoListStore {
    constructor() {
        this.todoList = TodoList.empty()
            .add(Todo.create('環境構築').setDone(true))
            .add(Todo.create('JavaScriptチュートリアル'))
            .add(Todo.create('Reactチュートリアル'));
        this.listeners = [];
    }
    add(content) {
        const todo = Todo.create(content);
        this.todoList = this.todoList.add(todo);
        this.listeners.forEach(listener => listener());
    }
    setDone(id, done) {
        this.todoList = this.todoList.setDone(id, done);
        this.listeners.forEach(listener => listener());
    }
    clear() {
        this.todoList = this.todoList.clear();
        this.listeners.forEach(listener => listener());
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
    }
    update(content) {
        this.content = content;
        this.listeners.forEach(listener => listener());
    }
    clear() {
        this.content = '';
        this.listeners.forEach(listener => listener());
    }
    subscribe(listener) {
        this.listeners.push(listener);
    }
}

export const contentStore = new ContentStore();
