import royalty from './assets/royalty.mp4'
import './App.css'
import H5AudioPlayer from 'react-h5-audio-player'
import 'react-h5-audio-player/lib/styles.css'

function App() {
  return (
    <>
      <div className="player">
        <H5AudioPlayer volume={0.5} src={royalty}></H5AudioPlayer>
      </div>
    </>
  )
}

export default App
