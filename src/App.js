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
import PostForm from './components/PostForm';
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
          <Route path="/create">
            <PostForm/>
          </Route>
          <Route path="/post/:id">
            <PostDetail/>
          </Route>
          <Route path="/update/:id">
            <PostForm/>
          </Route>
          <Route path="/delete/:id">
            
          </Route>v
          <Route path="/">
            <PostList/>
          </Route>
          
        </Switch>
      </div>
    </Router>
  );
}

export default App;
