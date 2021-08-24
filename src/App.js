import "./App.css";
import PostList from "./components/PostList";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import PostDetail from "./components/PostDetail";
import PostForm from "./components/PostForm";
import { configure } from "axios-hooks";
import LRU from "lru-cache";
import Axios from "axios";

const axios = Axios.create({
  baseURL: "https://61176b1c30022f0017a05dfa.mockapi.io/api/v1/",
});
const cache = new LRU({ max: 10 });

configure({ axios, cache });
function App() {
  return (
    <Router>
      <div>
        <nav className="nav-bar">
          <ul>
            <li>
              <Link to="/">LI'FE Articles</Link>
            </li>
            <li className="create-post">
              <Link to="/create" className="create-post">
                Create Post
              </Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/create">
            <PostForm />
          </Route>
          <Route path="/post/:id">
            <PostDetail />
          </Route>
          <Route path="/update/:id">
            <PostForm />
          </Route>
          <Route path="/delete/:id"></Route>
          <Route path="/">
            <PostList />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
