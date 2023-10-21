import './App.scss';
import AddTotoForm from './components/AddTotoForm/AddTotoForm';
import { TotoList } from './components/TotoList/TotoList';

function App() {
  return (
    <div className="app">
      <h1 className='app__title'>Todo app:</h1>
      <AddTotoForm />
      <TotoList />
    </div>
  );
}

export default App;
