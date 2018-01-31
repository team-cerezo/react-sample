import { Container } from 'flux/utils';

import App from './component-structure';
import { contentStore, todoListStore } from './store';

const getStores = () => [contentStore, todoListStore];

const calculateState = () => {
    return {
        content: contentStore.getState(),
        todoList: todoListStore.getState()
    };
};

const AppContainer = Container.createFunctional(App, getStores, calculateState);

export default AppContainer;