import { useCallback } from "react";
import { useAppDispatch } from "../hooks/useAppDispatch";
import { useAppSelector } from "../hooks/useAppSelector";
import { addTodo, deleteTodo, updateTodo } from "../store/todo";
import { Todo } from "../types/todo.type";

export const useTodoModel = () => {
  const todos = useAppSelector((state) => state.todo);
  const dispatch = useAppDispatch();

  const addTodoItem = useCallback((todo: Todo) => {
    dispatch(addTodo(todo))
  }, [dispatch]);

  const deleteTodoItem = useCallback((id: string) => {
    dispatch(deleteTodo(id))
  }, [dispatch]);

  const updateTodoItem = useCallback((todo: Todo) => {
    console.log(todo);
    
    dispatch(updateTodo(todo))
  }, [dispatch]);

  return {
    ...todos,
    addTodo: addTodoItem,
    deleteTodo: deleteTodoItem,
    updateTodo: updateTodoItem,
  }
};
