import { useTodoViewController } from '../../viewControllers/useTotoViewController';
import { Button } from '../Button/Button';
import { Input } from '../Input/Input';
import './AddTotoForm.scss';

const AddTotoForm = () => {
  const { title, setTitle, addTodo } = useTodoViewController();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    addTodo();
  };

  return (
    <div className='add-toto-container add-todo'>
      <form className='add-todo__form' onSubmit={handleSubmit}>
        <Input
          name='todo'
          className="add-todo__input"
          placeholder='Add new todo'
          value={title}
          onChange={handleChange} />
        <Button type='submit' className='add-todo__button'>Add toto</Button>
      </form>
    </div>
  )
}

export default AddTotoForm;