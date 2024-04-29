import './style.scss'
import { useState, useEffect } from 'react'
import Sound from '../../assets/sound/main_sound.mp3'
function Home() {
    const [bgStyle, setBgStyle] = useState({})
    const audio = new Audio(Sound)

    useEffect(() => {
        audio.play()
   

        const handleMouseMove = (e) => {
            let x = e.clientX / window.innerWidth;
            let y = e.clientY / window.innerHeight;
            setBgStyle({
                transform: `translate(-${x * 50}px, -${y * 50}px)`
            });
        };

        document.addEventListener('mousemove', handleMouseMove);

        return () => {
            stop();
            document.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    return (
        <>
            <div className="home-container">
                    <div className="menu">
                        <button onClick={()=>{audio.pause()}}>
                            Играть
                        </button>

                    </div>
                <div className="home" style={bgStyle}>
                </div>
            </div>
        </>
    );
}

export default Home;