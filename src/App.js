
import './App.css';
import AddTrains from './components/AddTrains';
import { Balanse } from './components/Balanse';
import Header from './components/Header';
import { Incemer } from './components/Incemer';
import {TransactionList} from './components/TransactionList';

import { GlobalProvider } from './conText/GlopalState';


function App() {
  return (
    <>
    <GlobalProvider>
      <Header />
    <div className='container'>
      <Balanse />
      <Incemer />
      <TransactionList />
      <AddTrains />
    </div>
    </GlobalProvider>
    </>
  );
}

export default App;
