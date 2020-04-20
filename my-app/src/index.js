import React, {Suspense} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import './components/Languages/i18next'


ReactDOM.render(<Suspense fallback={(<div className="ui active inline loader"></div>)}>
<App /></Suspense>, document.getElementById('root'));