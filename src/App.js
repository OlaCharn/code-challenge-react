
import './App.css';
import Counter from './Components/Counter';
import InputSubmit from './Components/InputSubmit';
import Parent from './Components/ParentChild/Parent';
import ShowInput from './Components/ShowInput';
import ShowMeHideMe from './Components/ShowMeHideMe';
import SimpleJSX from './Components/SimpleJSX';
import UsersArray from './Components/UsersArray';

function App() {
  return (
    <div className="App">
      <SimpleJSX />
      <Counter />
      <UsersArray />
      <ShowMeHideMe />
      <ShowInput />
      <InputSubmit />
      <Parent/> 
    </div>
  );
}

export default App;
