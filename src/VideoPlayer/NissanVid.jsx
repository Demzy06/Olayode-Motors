import React from 'react'
import ReactPlayer from 'react-player'
// import { DefaultPlayer as Video } from 'react-html5video';
// import 'react-html5video/dist/styles.css';
import NissanVidd from '../Videos/nissan-vidd.mp4';
import '../Styles/NissanVid.css'

const NissanVid = () => {
  return (
    <div className='m-auto  d-flex justify-content-center nissan-vid-container'>

      <ReactPlayer 
      url={NissanVidd}
      playing={true}
      controls={true}
      muted
      width='265px'
      height='250px'
      className=''
      
      
      
      />
      
    </div>

   
  )
}
export default NissanVid