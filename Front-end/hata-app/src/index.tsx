import * as React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import App from './components/app';
import {BrowserRouter as Router} from 'react-router-dom';
import {store, persistor} from './store/store';
import {PersistGate} from 'redux-persist/lib/integration/react';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={<h4>Loading</h4>} persistor={persistor}>
        <Router>
          <App />
        </Router>
      </PersistGate>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
