import { Todo, TodoList } from '../models';

describe('Todo', () => {

    test('setDone', () => {
        const todo = new Todo(0, 'test', false).setDone(true);
        expect(todo.id).toBe(0);
        expect(todo.content).toBe('test');
        expect(todo.done).toBe(true);
    });

    test('fromJson', () => {
        const todo = Todo.fromJson({ id: 1, content: 'foo', done: true });
        const expected = new Todo(1, 'foo', true);
        expect(todo).toEqual(expected);
    });
});

describe('TodoList', () => {

    test('empty', () => {
        const todoList = TodoList.empty();
        const expected = new TodoList([]);
        expect(todoList).toEqual(expected);
    });

    test('add', () => {
        const todoList = new TodoList([
            new Todo(2, 'bar', false),
            new Todo(1, 'foo', true)
        ]).add(new Todo(3, 'baz', false));
        const expected = new TodoList([
            new Todo(3, 'baz', false),
            new Todo(2, 'bar', false),
            new Todo(1, 'foo', true)
        ]);
        expect(todoList).toEqual(expected);
    });

    test('setDone', () => {
        const todoList = new TodoList([
            new Todo(3, 'baz', false),
            new Todo(2, 'bar', false),
            new Todo(1, 'foo', true)
        ]).setDone(2, true);
        const expected = new TodoList([
            new Todo(3, 'baz', false),
            new Todo(2, 'bar', true),
            new Todo(1, 'foo', true)
        ]);
        expect(todoList).toEqual(expected);
    });

    test('fromJson', () => {
        const todoList = TodoList.fromJson([
            { id: 3, content: 'baz', done: false },
            { id: 2, content: 'bar', done: false },
            { id: 1, content: 'foo', done: true }
        ]);
        const expected = new TodoList([
            new Todo(3, 'baz', false),
            new Todo(2, 'bar', false),
            new Todo(1, 'foo', true)
        ]);
        expect(todoList).toEqual(expected);
    });
});
