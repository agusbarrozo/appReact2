import NavBar from './components/NavBar'
import { Button } from 'reactstrap';
import ItemListContainer from './components/ItemListContainer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <NavBar />
      <ItemListContainer />
    </div>
  );
}

export default App;
