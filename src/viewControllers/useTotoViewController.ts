import { useState } from 'react';
import { useTodoModel } from '../model/useTotoModel';

export const useTodoViewController = () => {
  const { addTodo, ...rest } = useTodoModel();
  const [title, setTitle] = useState<string>('');

  const addTodoHandler = () => {
    title && addTodo({
      id: new Date().getTime().toString(),
      title: title,
      completed: false,
    })
    setTitle('');
  }

  return {
    ...rest,
    addTodo: addTodoHandler,
    title,
    setTitle,
  };
};