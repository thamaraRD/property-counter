import './App.scss';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import NewProperty from './components/NewProperty';
import PropertyList from './components/PropertyList';
import DetailProperty from './components/DetailProperty';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path='/nueva-propiedad'>
           <NewProperty/> 
          </Route>
          <Route exact path='/lista-propiedades'>
            <PropertyList/>
          </Route>
          <Route exact path='/ver-propiedad/:id'>
          <DetailProperty/>
          </Route>
        </Switch>
      </Router>
      
    </div>
  );
}

export default App;
