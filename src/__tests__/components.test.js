import React from 'react';
import renderer from 'react-test-renderer';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { InputContent, TodoComponent, TodoListComponent, ClearButton } from '../components';

Enzyme.configure({ adapter: new Adapter() });

describe('InputContent', () => {

    test('描画', () => {
        const component = renderer.create(
            <InputContent
                content={'Hello, world!'}
                updateContent={() => { }}
                tryAddTodo={() => { }} />
        );
        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });

    test('内容が変更されたらupdateContentハンドラが呼ばれる', () => {
        const handler1 = jest.fn();
        const handler2 = jest.fn();
        const input = shallow(
            <InputContent
                content={''}
                updateContent={handler1}
                tryAddTodo={handler2} />
        );
        input.find('input').simulate('change', { target: { value: 'test' } });
        expect(handler1).toBeCalled();
        expect(handler2).not.toBeCalled();
    });

    test('Enterキーが押されたらtryAddTodoハンドラが呼ばれる', () => {
        const handler1 = jest.fn();
        const handler2 = jest.fn();
        const input = shallow(
            <InputContent
                content={''}
                updateContent={handler1}
                tryAddTodo={handler2} />
        );
        input.find('input').simulate('keypress', { key: 'Enter' });
        expect(handler1).not.toBeCalled();
        expect(handler2).toBeCalled();
    });

    test('Enterキー以外のキーが押されたらtryAddTodoハンドラが呼ばれる', () => {
        const handler1 = jest.fn();
        const handler2 = jest.fn();
        const input = shallow(
            <InputContent
                content={''}
                updateContent={handler1}
                tryAddTodo={handler2} />
        );
        input.find('input').simulate('keypress', { key: 'NotEnter' });
        expect(handler1).not.toBeCalled();
        expect(handler2).not.toBeCalled();
    });
});

describe('TodoComponent', () => {

    test('描画', () => {
        const todo = { id: 123, conetnt: 'foobar', done: true };
        const updateStatus = (id, done) => { };
        const component = renderer.create(
            <TodoComponent
                todo={todo}
                updateStatus={updateStatus} />
        );
        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });

    test('チェックのON/OFFが変更されたらupdateStatusハンドラが呼ばれる', () => {
        const todo = { id: 123, conetnt: 'foobar', done: true };
        const handler = jest.fn();
        const input = shallow(
            <TodoComponent
                todo={todo}
                updateStatus={handler} />
        );
        const event = { target: { checked: false } };
        input.find('input').simulate('change', event);
        expect(handler).toBeCalledWith(todo.id, event.target.checked);
    });
});

describe('TodoListComponent', () => {

    test('描画', () => {
        const component = renderer.create(
            <TodoListComponent>
                {['foo', 'bar', 'baz'].map(x => <li key={x}>{x}</li>)}
            </TodoListComponent>
        );
        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });
});

describe('ClearButton', () => {

    test('描画', () => {
        const component = renderer.create(
            <ClearButton clear={() => { }} />
        );
        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });

    test('ボタンを押したらclearハンドラが呼ばれる', () => {
        const handler = jest.fn();
        const button = shallow(
            <ClearButton clear={handler} />
        );
        button.find('button').simulate('click');
        expect(handler).toBeCalled();
    });
});
