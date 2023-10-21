import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { Todo } from '../../types/todo.type'

export interface TodoState {
  todos: Todo[]
}

const initialState: TodoState = {
  todos: [
    {
      id: '1',
      title: 'My todo 1',
      completed: true,
    },
    {
      id: '2',
      title: 'My very long and long and long and long and long and long and long and long and long and long todo 2',
      completed: false,
    }
  ],
}

export const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo: (state, { payload }: PayloadAction<Todo>) => {
      state.todos.push(payload)
    },
    deleteTodo: (state, { payload }: PayloadAction<string>) => {
      state.todos = state.todos.filter((todo) => todo.id !== payload)
    },
    updateTodo: (state, { payload }: PayloadAction<Todo>) => {
      state.todos = state.todos.map((todo) => {
        if (todo.id === payload.id) {
          return payload
        }
        return todo
      })
    },
  },
})

export const { addTodo, updateTodo, deleteTodo } = todosSlice.actions

const todosReducer = todosSlice.reducer
export default todosReducer
