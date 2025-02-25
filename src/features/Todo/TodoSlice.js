import { createSlice , nanoid } from "@reduxjs/toolkit";
// the work of nanoId is to generate unique id for each todo
// the work of createSlice is to create a slice of the store

const initialState = {  // initial state of the store   
    todos: [
        { id: '1', text: 'Mai tumhe yha aacha nhi lg rha to delete kr do mereko' },
      
    ],
};

export const todoSlice = createSlice({
  name: 'todo', // name of the slice  , it is the fixed key used as name in redux toolkit
    initialState,
      reducers: {
        addTodo:( state , action ) => {
            const todo = {
                id: nanoid(),
                 text: action.payload // action.payload is the data that we want to add in the state
                              // payload ek oobject hai jo action me hota jis se hum state me data add krte hain
            }
         state.todos.push(todo); // state.todos is the array in which we are adding the todo object
          // initialState.todos is the array in which we are adding the todo object
        }, // yha hmesa do chize milege ek milega state and ek milega action
        removeTodo:(state , action) => {
              state.todos = state.todos.filter(todo => todo.id !== action.payload); // filter is a function that is used to filter the data from the array
// jo id de wo match mat kro baki sab ko le aao
        },
      updateTodo:(state , action) => {
          const todo = state.todos.find(todo => todo.id === action.payload.id); // find is a function that is used to find the data from the array
          todo.text = action.payload.text; // action.payload.text is the updated text that we want to update in the state

      }, // reducers are the functions that are used to update the state , y consist krta hai properties and functons jo state ko update krne k liye use hoti hain
     
    },
     // add a comma here
}
); // createSlice is a function that takes an object as an argument


// state parameter variable btayega abhi current me jo state hai uski kya kya values hai 
// action parameter variable btayega ki kya action perform krna hai
// action parameter variable me 2 cheeze hoti hai type and payload

export const { addTodo, removeTodo, updateTodo } = todoSlice.actions; // actions are the functions that are used to call the reducers
// actions are the functions that are used to call the reducers


export default todoSlice.reducer; // reducer is the function that is used to update the state