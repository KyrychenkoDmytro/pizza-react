import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';

import './index.scss';
import App from './App/App';

import { store } from './redux/store';
import { Provider } from 'react-redux';

const rootElement = document.getElementById('root');
if (rootElement) {
    const root = ReactDOM.createRoot(rootElement);

    root.render(
        <Provider store={store} >
            <Router>
                <App />
            </Router>
        </Provider>
    );
}
