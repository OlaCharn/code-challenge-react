
import './App.css';
import Counter from './Components/Counter';
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
    </div>
  );
}

export default App;
