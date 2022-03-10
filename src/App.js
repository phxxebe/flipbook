import HTMLFlipBook from "react-pageflip";
import './index.css';
import backgroundvideo from './backgroundvideo.mp4';
import {poems} from './data.js';

function App() {
  return (
    <>
        <div>
            <video
                autoPlay
                muted
                loop
            >
                <source src={backgroundvideo} type='video/mp4' />
            </video>

            <header>
                डोळ्यांमधूनी...
            </header>
            <HTMLFlipBook className="flipbook" width={400} height={600}>                
                {poems.map(({poem}) => (
                    <div> 
                        <img src={poem} alt="" />
                    </div>
                ))}
            </HTMLFlipBook>

            <footer>
                सौ. शरयू (स्मिता) पवार
            </footer>
        </div>
    </>
  );
}

export default App;