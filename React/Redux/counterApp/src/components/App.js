import {React,useState} from 'react';
import { useSelector,useDispatch} from 'react-redux';

import {incrementByNum} from '../features/counterSlice';

import Button from './Button';
import Label from './Label';

function App(){
    const [count,setCount]=useState(0);
    const value=useSelector((state) => state.counter.count);
    const dispatch=useDispatch();
    return(

        <>
        <div>
            <p>{value}</p>
            <form style={{display:'flex',justifyContent:'center', alignItems:'center', gap:'20px'}}>
                <input type='number' onChange={(event) => setCount(event.target.value)}>

                </input>
                <button onClick={(event) =>{ 
                    event.preventDefault();
                    return dispatch(incrementByNum(Number(count)))
                }} >
                    IncrementByNumber
                </button>
            </form>
           <Button></Button>
           <Label></Label>
        </div>
        </>
    );
}
export default App;
