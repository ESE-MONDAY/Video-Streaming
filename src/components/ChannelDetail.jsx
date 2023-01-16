import React from 'react';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import {Videos, ChannelCard} from './';
import { Box, Typography } from '@mui/material';
import { fetchFromApi } from '../utils/fetchFromApi';


const ChannelDetail = () => {
  const {id} = useParams();
  const [channelDetail, setChannelDetail] = useState(null)
  const [videos, setVideos] = useState([])

  
  useEffect(()=>{
    fetchFromApi(`channels?.part=snippet&id=${id}`)
    .then((data)=>setChannelDetail(data?.items[0 ]))

    fetchFromApi(`search?channelId=${id}&part=snippet&order=date`)
    .then((data)=>setVideos(data?.items))

  }, [id])
  return (
    <Box minHeight='95vh'>
        <Box>
            <div style={{
             background: 'linear-gradient(to right, #8e2de2, #4a00e0)',
              zIndex: '10',
              height:'300px'
            }} />
            <ChannelCard channelDetail={channelDetail} marginTop='-100px' />
        </Box>
        <Box display='flex'  p='2'>
          <Box sx={{mr : {sm: '100px'}}} />
          <Videos videos={videos} />
        </Box>
       
        
    </Box>
  )
}

export default ChannelDetail