import './index.css'
import React  from 'react'
import ReactDOM from 'react-dom/client';
import App from './components/App';

const root=ReactDOM.createRoot(document.getElementById('root'));


root.render(
    <>
    <h1 style={{color:'#f5f5f5',textAlign:'center',fontSize:'24px'}}>Income and Expense Tracker</h1>
    <App/>
    </>
)
