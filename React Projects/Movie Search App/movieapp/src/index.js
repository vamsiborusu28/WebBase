import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import './index.css';
import {store} from './Redux/store/store';
import  {Provider}  from 'react-redux';
const root=ReactDOM.createRoot(document.getElementById('root'));


root.render(

    <>
    <Provider store={store}>
    <Router>
        <Routes>
            <Route path='*' element={<App/>}></Route>
        </Routes>
    </Router>
    </Provider>
    </>
)