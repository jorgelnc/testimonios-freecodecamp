import { Fragment } from 'react';
import './App.css';
import Testimonio from './components/Testimonio';

function App() {
  return (
    <div className="App">
      <div className='contenedor-principal'>
        <h1>Here is what our alumni say about freeCodeCamp:</h1>
          <Testimonio
          nombre='Shawn Wang'
          pais='Singapore'
          imagen='shawn'
          cargo='Software Engineer'
          empresa='Amazon'
          testimonio={<Fragment>Its scary to change careers. I only gained confidence that I could code 
          by working through the hundreds of hours of free lessons on freeCodeCamp.
          Within a year I had a six-figure job as a Software Engineer. <strong>freeCodeCamp changed my life</strong>.</Fragment>}/>
          <Testimonio
          nombre='Sarah Chima'
          pais='Nigeria'
          imagen='sarah'
          cargo='Software Engineer'
          empresa='ChatDesk'
          testimonio={<Fragment><strong>freeCodeCamp was the gateway to my career</strong> as a software developer. 
          The well-structured curriculum took my coding knowledge
          from a total beginner level to a very confident level.
          It was everything I needed to land my first dev job at an amazing company.</Fragment>}/>
          <Testimonio
          nombre='Emma Bostian'
          pais='Sweden'
          imagen='emma'
          cargo='Software Engineer'
          empresa='Spotify'
          testimonio={<Fragment>I've always struggled with learning JavaScript. 
          Ive taken many courses but freeCodeCamps course was the one which stuck.
          Studying JavaScript as well as data structures and algorithms on <strong>freeCodeCamp
          gave me the skills</strong> and confidence I needed to land my dream job as a software engineer at Spotify.</Fragment>}/>
      </div>
    </div>
  )
}

export default App;
