import './App.css'
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import {Navbar, SearchFeed, ChannelDetail, VideoDetail, Feed} from './components';
import {Box} from '@mui/material'

function App() {

  return (
    <BrowserRouter>
      <Box sx={{backgroundColor : ''}}>
        <Navbar />
        <Routes>
          <Route path='/' exact element={<Feed />} />
          <Route path='/video/:id' exact element={<VideoDetail />} />
          <Route path='/channel/:id' exact element={<ChannelDetail />} />
          <Route path='/search/:searchTerm' exact element={<SearchFeed />} />
        </Routes>
      </Box>
    </BrowserRouter>
  )
}

export default App
