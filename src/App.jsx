import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {Navbar, SearchFeed, ChannelDetail, VideoDetail, Feed} from './components';
import {Box} from '@mui/material';

function App() {

  return (
    <BrowserRouter>
      <Box sx={{backgroundColor : '#000'}}>
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
