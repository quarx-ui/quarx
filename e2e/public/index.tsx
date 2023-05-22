import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { App } from './App';

render(
    <BrowserRouter basename="/">
        <App />
    </BrowserRouter>,
    document.querySelector('#root'),
);
