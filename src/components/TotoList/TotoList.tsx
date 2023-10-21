import { Todo } from '../../types/todo.type';
import { useTodoViewController } from '../../viewControllers/useTotoViewController';
import { Button } from '../Button/Button';
import { Checkbox } from '../Checkbox/Checkbox';
import './TotoList.scss'
export const TotoList = () => {

  const { todos, deleteTodo, updateTodo } = useTodoViewController();

  const handleCheckboxChange = (checked: boolean, todo: Todo) => {
    console.log(checked, todo);

    updateTodo({
      ...todo,
      completed: checked,
    })
  };


  if (todos.length === 0) {
    return (
      <div className='todo-list__container'>
        <h2 className='todo-list__title todo-list__title-center'>No todos for now</h2>
      </div>
    )
  }

  return (
    <ul className='todo-list__container'>
      {todos.map((todo) => (
        <li key={todo.id} className='todo-list__todo todo'>
          <Checkbox id={todo.id} className='todo__checkbox' checked={todo.completed} onChange={(e) => handleCheckboxChange(e.target.checked, todo)} />
          <label htmlFor={todo.id} className='todo__title' data-completed={todo.completed}>{todo.title}</label>
          <span className='todo__divider divider'></span>
          <Button className='todo__button button-secondary' onClick={() => deleteTodo(todo.id)}>Delete</Button>
        </li>
      ))}
    </ul>
  )
}
