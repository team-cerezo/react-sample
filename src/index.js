import React from 'react';
import ReactDOM from 'react-dom';

import initRender from './actions';
import App from './component-structure';

const render = () => {
    ReactDOM.render(<App />, document.getElementById('root'));
};

initRender(render);

render();
