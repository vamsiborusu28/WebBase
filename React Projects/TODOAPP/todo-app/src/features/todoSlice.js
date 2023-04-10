import { createSlice} from '@reduxjs/toolkit'
import { nanoid } from '@reduxjs/toolkit'

const initialState = {
    todos: [
        {id: 1122, type: "Learn JS with Hitesh",desc:'Learn about React Hooks'},
        {id: 122, type: "Done with redux",desc:'eiwhcuiwch'},
    ]
}

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            const todo = {
                id: nanoid(), //Generate a unique ID
                type: action.payload[0],
                desc:action.payload[1]
            };

            state.todos.push(todo)
            console.log(state.todos);
            //Todos.slice(1, 3)
            //Todo.splice(1, 3)
        },
        removeTodo: (state, action) => {
           state.todos =  state.todos.filter((todo) => todo.id !== action.payload)
        },
        deleteTodos:(state) => {
            state.todos=[];
        },
        editTodo : (state,action) => {
            const res=state.todos.findIndex(action.payload[0]);
            console.log(res);
            // if(res!==-1){
            //     state.todos[res].type=action.payload[1];
            //     state.todos[res].desc=action.payload[2];
            // }
        }

    }
})

export const {addTodo, removeTodo,deleteTodos} = todoSlice.actions;

export default todoSlice.reducer