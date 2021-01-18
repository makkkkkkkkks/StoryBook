import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './app/App';
import registerServiceWorker from './registerServiceWorker';
import {BrowserRouter as Router} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import {RecoilRoot} from "recoil";
import recoilPersist from "recoil-persist";


const {RecoilPersist, updateState} = recoilPersist([], {
    key: "recoil-persist",
    storage: sessionStorage,
});

ReactDOM.render(
    <RecoilRoot initializeState={updateState}>
        <RecoilPersist/>
        <Router>
            <App/>
        </Router>
    </RecoilRoot>,
    document.getElementById('root')
);

registerServiceWorker();
