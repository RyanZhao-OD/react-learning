import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './00.Basic';
// import App from './01.UrlParams';
import App from './02.RedirectAuth';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
