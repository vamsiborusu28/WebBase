import './index.css';

import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './components/App';

const root=ReactDOM.createRoot(document.getElementById('root'));


root.render(
    <>
    <h1 className='text-center'>Welcome to Image Gallery</h1>
    <App/>
    </>
)