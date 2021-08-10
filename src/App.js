import './App.css';
import ValidationsForm from './components/Foms/Validations-form';
import FetchUser from './components/FetchApi/FetchRandomUser';
import LiftingState from './components/LisftingState/LiftingState'
import TodoList from './components/Todo/TodoList';

function App() {
  return (
    <div className="App">
      {/* <ValidationsForm/> */}
      {/* <FetchUser/> */}
      {/* <LiftingState/> */}
      <TodoList/>
    </div>
  );
}

export default App;
