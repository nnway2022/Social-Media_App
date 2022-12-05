import { Route, Routes } from "react-router-dom";
import Login from "./Pages/LoginPage/Login";
import SignUp from "./Pages/SingupPage/SignUp";
import { NewsFeed } from "./Pages/NewsFeedPage/NewsFeed";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/newsfeed" element={<NewsFeed />} />
      {/* <Route path="*" element={<Error />} /> */}
    </Routes>
  );
}

export default App;
