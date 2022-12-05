import './App.css'
import {Routes, Route, Link, BrowserRouter as Router} from 'react-router-dom'
import { NewsFeed } from './Pages/NewsFeedPage/NewsFeed'
import { Comments } from './Pages/CommentsPage/Comments'

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path='/' element={<NewsFeed />} />
          <Route path='/comments' element={<Comments />} />
        </Routes>
      </div>
    </Router>
    
  )
}

export default App
