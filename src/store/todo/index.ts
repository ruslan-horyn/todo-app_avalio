import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { Todo } from '../../types/todo.type'

export interface TodoState {
  todos: Todo[]
}

const initialState: TodoState = {
  todos: [
    {
      id: '1',
      title: 'By coffee',
      completed: false,
    },
    {
      id: '2',
      title: 'Call to John',
      completed: false,
    },
    {
      id: '3',
      title: 'Create a new app',
      completed: false,
    },
    {
      id: '4',
      title: 'Read a book',
      completed: true,
    }
  ],
}

export const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo: (state, { payload }: PayloadAction<Todo>) => {
      state.todos.unshift(payload)
    },
    deleteTodo: (state, { payload }: PayloadAction<string>) => {
      state.todos = state.todos.filter((todo) => todo.id !== payload)
    },
    updateTodo: (state, { payload }: PayloadAction<Todo>) => {
      const sortedTodos = state.todos.map((todo) => {
        if (todo.id === payload.id) return payload
        return todo
      })
        .sort((a, b) => a.completed === b.completed ? 0 : a.completed ? 1 : -1)
      state.todos = sortedTodos
    },
  },
})

export const { addTodo, updateTodo, deleteTodo } = todosSlice.actions

const todosReducer = todosSlice.reducer
export default todosReducer
