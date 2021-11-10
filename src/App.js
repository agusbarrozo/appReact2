import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { Cart } from './components/Cart';
import { ItemDetailContainer } from './components/containers/ItemDetailContainer/ItemDetailContainer';
import ItemListContainer from './components/containers/ItemListContainer/ItemListContainer';
import ItemList from './components/ItemList';
import NavBar from './components/NavBar'

function App() {
  return (
    <div className="App">
      <header className="App-header">

      </header>
      <BrowserRouter>
        <NavBar />
        <Switch>
          <Route exact path='/cart' component={Cart} />
          <Route exact path='/detail' component={ItemDetailContainer} />
          <Route exact path='/catalogue' component={ItemList} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
