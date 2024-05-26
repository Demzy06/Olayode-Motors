import React from 'react'
import ReactPlayer from 'react-player'
// import { DefaultPlayer as Video } from 'react-html5video';
// import 'react-html5video/dist/styles.css';
import NissanVideo from '../Videos/Nisssan-video.mp4'
import MaybachVid from '../Videos/maybach-vid.mp4';
import ToyotaVid from '../Videos/toyotahighlander-vidd.mp4'
import ToyotaJeepVid from '../Videos/Toyota-jeep.mp4'
import '../Styles/NissanVid.css'

const NissanVid = () => {
  return (
    <div className='m-auto w-100'>

      <section>
        <ul>
        <li>Finished spay work on a Nisssan Car</li>
        </ul>
      <div className='m-auto mb-4 d-flex justify-content-center nissan-vid-container '>
      <ReactPlayer 
      url={NissanVideo}
      playing={true}
      controls={true}
      
      width='302px'
      height='310px'
      className=''
      />
      </div>
      </section>

      <section>
      <ul>
        <li>Finished spay work on a Mercedes-Maybach</li>
        </ul>
      <div className='m-auto mb-4 d-flex justify-content-center nissan-vid-container'>
      <ReactPlayer 
      url={MaybachVid}
      playing={true}
      controls={true}
      muted
      width='300px'
      height='365px'
      
      />
      </div>
      </section>

      <section>
      <ul>
        <li>Finished spay work on a Toyota Highlander</li>
        </ul>
      <div className='m-auto mb-4 d-flex justify-content-center nissan-vid-container'>
      <ReactPlayer 
      url={ToyotaVid}
      playing={true}
      controls={true}
      muted
      width='295px'
      height='365px'
      className=''
      />
      </div>
      </section>

      <section>
      <ul>
        <li>Finished spay work on a Toyota Jeep</li>
        </ul>
      <div className='m-auto mb-4 d-flex justify-content-center nissan-vid-container'>
      <ReactPlayer 
      url={ToyotaJeepVid}
      playing={true}
      controls={true}
      muted
      width='295px'
      height='365px'
      className=''
      />
      </div>
      </section>

    </div>

   
  )
}
export default NissanVid