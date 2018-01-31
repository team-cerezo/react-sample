import { Todo, TodoList } from './models';

let todoList = TodoList.empty()
    .add(Todo.create('環境構築').setDone(true))
    .add(Todo.create('JavaScriptチュートリアル'))
    .add(Todo.create('Reactチュートリアル'));

let content = '';

const store = { todoList, content };

export default store;

