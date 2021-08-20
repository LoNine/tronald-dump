import styles from './App.module.scss';
import DonaldTrumpApi from './api/DonaldTrumpApi';
import SearchForm from './components/SearchForm/SearchForm';
import QuotesContainer from './components/QuotesContainer/QuotesContainer';
import { useState } from 'react';
import { BrowserRouter, Route, Switch, useLocation} from 'react-router-dom';
const api = new DonaldTrumpApi();

function App() {
  const [quotes, setQuotes] = useState([]);
  const location = useLocation();
  // TODO made location work 
  const searchQuotes = async (search) => {
    const result = await api.find(search);
    if (result.length > 0) {
      setQuotes(result);
    } else {
      console.log(location)
      //history.replace('/error')
    }
    
  }
  return (
    <BrowserRouter className={styles.container}>
      <SearchForm search={searchQuotes} />
      <Switch>
        <Route exact path='/error'>
          <div>Not found</div>
        </Route>
      </Switch>
      <QuotesContainer info={quotes}/>
    </BrowserRouter>
  );
}

export default App;
