import { Todo, TodoList } from './models';

class TodoListStore {
    constructor() {
        this.todoList = TodoList.empty()
            .add(Todo.create('環境構築').setDone(true))
            .add(Todo.create('JavaScriptチュートリアル'))
            .add(Todo.create('Reactチュートリアル'));
    }
    add(content) {
        const todo = Todo.create(content);
        this.todoList = this.todoList.add(todo);
    }
    setDone(id, done) {
        this.todoList = this.todoList.setDone(id, done);
    }
    clear() {
        this.todoList = this.todoList.clear();
    }
}

export const todoListStore = new TodoListStore();

class ContentStore {
    constructor() {
        this.content = '';
    }
    update(content) {
        this.content = content;
    }
    clear() {
        this.content = '';
    }
}

export const contentStore = new ContentStore();
