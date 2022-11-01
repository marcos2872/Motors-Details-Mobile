import React, { useState, useCallback } from 'react'
import { Container } from './styled'
import { useRoute } from '@react-navigation/native'
import YoutubePlayer from "react-native-youtube-iframe";
import theme from '../../theme'

const Video = () => {
  const [playing, setPlaying] = useState(false);
  const route  = useRoute()
  const url  = route.params

  const youtubeId = (url) => {
    var regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
    var match = url.match(regExp);
    return (match&&match[7].length==11)? match[7] : false;
}
  
  const onStateChange = useCallback((state: string) => {
    if (state === "ended") {
      setPlaying(false);
    }
  }, []);
  
  return (
    <Container>
     <YoutubePlayer
        height={300}
        width={theme.WIDTH.window}
        play={playing}
        videoId={youtubeId(url['url'])}
        onChangeState={onStateChange}
      />
    </Container>
  )
}

export default Video