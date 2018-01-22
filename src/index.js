import React from 'react';
import ReactDOM from 'react-dom';

const render = () => {
    ReactDOM.render(<App />, document.getElementById('root'));
};

const App = () => (
    <div>
        <h1>やること</h1>
        <p>
            <input type="text" placeholder="やることある？" />
        </p>
        <ul>
            <li>
                <label>
                    <input type="checkbox" />
                    <span>#3 Reactチュートリアル</span>
                </label>
            </li>
            <li>
                <label>
                    <input type="checkbox" />
                    <span>#2 JavaScriptチュートリアル</span>
                </label>
            </li>
            <li>
                <label>
                    <input type="checkbox" checked="checked" />
                    <span>#1 環境構築</span>
                </label>
            </li>
        </ul>
        <p>
            <button>終わったやつ消す</button>
        </p>
    </div>
);

render();
