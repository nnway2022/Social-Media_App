import "./App.css";
import Login from "./Pages/LoginPage/Login";
import SignUp from "./Pages/SingupPage/SignUp";
import NewsFeed from "./Pages/NewsFeedPage/NewsFeed";
import Comments from "./Pages/CommentsPage/Comments";

function App() {
  return (
    <div className="App">
      <SignUp />
      <Login />
      <NewsFeed />
      <Comments />
    </div>
  );
}

export default App;
