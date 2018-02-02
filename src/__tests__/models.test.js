import { Todo, TodoList } from '../models';

describe('Todo', () => {

    test('create', () => {
        const todo = Todo.create('test');
        expect(todo.id).not.toBeNull();
        expect(todo.content).toBe('test');
        expect(todo.done).toBeFalsy();
    });

    test('setDone', () => {
        const todo = new Todo(0, 'test', false).setDone(true);
        expect(todo.id).toBe(0);
        expect(todo.content).toBe('test');
        expect(todo.done).toBe(true);
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

    test('clear', () => {
        const todoList = new TodoList([
            new Todo(3, 'baz', false),
            new Todo(2, 'bar', false),
            new Todo(1, 'foo', true)
        ]).clear();
        const expected = new TodoList([
            new Todo(3, 'baz', false),
            new Todo(2, 'bar', false)
        ]);
        expect(todoList).toEqual(expected);
    });
});