import { Pretty } from "./ulits.types"

export type Todo = {
  id: string
  title: string
  completed: boolean
}

export type TodoBody = Pretty<Omit<Todo, 'id'>>