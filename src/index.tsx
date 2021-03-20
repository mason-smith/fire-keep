import React from 'react';
import ReactDOM from 'react-dom';

import '@elastic/eui/dist/eui_theme_dark.css';

// Local Dependencies
import 'src/styles/index.css';
import { iconComponentCache } from 'src/icons';
import { App } from 'src/App';

iconComponentCache();

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);

// Hot Module Replacement (HMR) - Remove this snippet to remove HMR.
// Learn more: https://snowpack.dev/concepts/hot-module-replacement
if (import.meta.hot) {
  import.meta.hot.accept();
}
