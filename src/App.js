import { ItemDetailContainer } from './components/containers/ItemDetailContainer/ItemDetailContainer';
import ItemListContainer from './components/containers/ItemListContainer/ItemListContainer';
import NavBar from './components/NavBar'

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
      <ItemDetailContainer />
    </div>
  );
}

export default App;
