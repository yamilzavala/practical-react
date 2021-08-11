import './App.css';
import ValidationsForm from './components/Foms/Validations-form';
import FetchUser from './components/FetchApi/FetchRandomUser';
import LiftingState from './components/LisftingState/LiftingState'
import TodoList from './components/Todo/TodoList';
import Wrapper from './components/Hooks/useState/Wrapper';
import WrapperUseEffect from './components/Hooks/useEffect/WrapperUseEffect'
import WrapperUseRef from './components/Hooks/useRef/WrapperUseFeff'
import WrapperUseContext from './components/Hooks/useContext/WrapperUseContext';
import WrapperCallback from './components/Hooks/useCallback/WrapperCallBack'

function App() {
  return (
    <div className="App">
      {/* <ValidationsForm/> */}
      {/* <FetchUser/> */}
      {/* <LiftingState/> */}
      {/* <TodoList/> */}
      {/* <Wrapper/> */}
      {/* <WrapperUseEffect/> */}
      {/* <WrapperUseRef/> */}
      {/* <WrapperUseContext/> */}
      <WrapperCallback/>
    </div>
  );
}

export default App;
