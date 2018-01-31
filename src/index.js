import React from 'react';
import ReactDOM from 'react-dom';

import App from './component-structure';
import { todoListStore, contentStore } from './store';

const render = () => {
    ReactDOM.render(<App />, document.getElementById('root'));
};

todoListStore.subscribe(render);
contentStore.subscribe(render);

render();
