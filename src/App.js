import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import PostList from './components/PostList';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import PostDetail from './components/PostDetail';
function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">
                <NavBar/>
              </Link> 
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/post/:id">
            <PostDetail/>
          </Route>
          <Route path="/">
            <PostList/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
