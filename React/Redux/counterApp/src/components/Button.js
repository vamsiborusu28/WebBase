import { useDispatch } from "react-redux";
import {incrementValue,decrementValue} from '../features/counterSlice';
function Button(){
    const dispatch=useDispatch();
    return (
        <>
         <div>
                <button onClick={ () => dispatch(incrementValue())}>+</button>
                <button onClick={ () => dispatch(decrementValue())}>-</button>
            </div>
        </>
    );
}

export default Button;