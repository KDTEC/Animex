import './App.css';
import Quotes from './components/Quotes';
import { Switch, Route } from 'react-router-dom';
import QuotesAnimeName from './components/QuotesAnimeName';

function App() {

  return (
    <div className="App">
      <Switch>
        <Route path='/' exact component={Quotes} />
        <Route path='/QuotesAnimeName' component={QuotesAnimeName} />
      </Switch>
      
    </div>
  );
}

export default App;
