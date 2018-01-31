class Todo {
    constructor(id, content, done) {
        this.id = id;
        this.content = content;
        this.done = done;
    }
    setDone(done) {
        return new Todo(this.id, this.content, done);
    }
    static idGenerator = 0;
    static create(content) {
        return new Todo(++Todo.idGenerator, content, false);
    }
}

class TodoList {
    constructor(list) {
        this.list = list;
    }
    static empty() {
        return new TodoList([]);
    }
    add(todo) {
        return new TodoList([todo, ...this.list]);
    }
    setDone(id, done) {
        return new TodoList(this.list.map(todo => {
            if (todo.id === id) {
                return todo.setDone(done);
            }
            return todo;
        }));
    }
    clear() {
        return new TodoList(this.list.filter(todo => todo.done === false));
    }
}

export { Todo, TodoList };

