import './App.css';
import {Router} from '@reach/router';
import AllBooks from './components/AllBooks';
import EditBook from './components/EditBook';
import DisplayBook from './components/DisplayBook';
import NewBook from './components/NewBook';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="App">
      <Router>
        <AllBooks path="/"/>
        <NewBook path="/books/new"/>
        <DisplayBook path="/books/:id"/>
        <EditBook path="/books/:id/edit"/>


      </Router>


    </div>
  );
}

export default App;
