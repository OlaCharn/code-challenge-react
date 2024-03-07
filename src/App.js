
import './App.css';
import Counter from './Components/Counter';
import InputSubmit from './Components/InputSubmit';
import Parent from './Components/ParentChild/Parent';
import ShowInput from './Components/ShowInput';
import ShowMeHideMe from './Components/ShowMeHideMe';
import SimpleJSX from './Components/SimpleJSX';
import SumOfTwoNumbers from './Components/SumOfTwoNumbers';
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
      <SumOfTwoNumbers />
      
    </div>
  );
}

export default App;
