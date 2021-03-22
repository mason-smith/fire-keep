import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import '@elastic/eui/dist/eui_theme_dark.css';

// Local Dependencies
import 'src/styles/index.css';
import { iconComponentCache } from 'src/icons';
import { App } from 'src/App';
import { store } from 'src/config/store';

iconComponentCache();

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);

// Hot Module Replacement (HMR) - Remove this snippet to remove HMR.
// Learn more: https://snowpack.dev/concepts/hot-module-replacement
if (import.meta.hot) {
  import.meta.hot.accept();
}
