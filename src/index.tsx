import { createRoot } from 'react-dom/client';
import './index.scss';
import { Provider } from 'react-redux';
import { store } from './core/store';
import { ToastContainer } from 'react-toastify';
import App from './components/App/App';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
  <Provider store={store}>
    <ToastContainer />
    <App />
  </Provider>
);
