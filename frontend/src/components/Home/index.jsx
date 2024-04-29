import './style.scss';
import { useState, useEffect, useContext } from 'react';
import { context } from '../../store';
import Sound from '../../assets/sound/main_sound.mp3';

function Home() {
    const [bgStyle, setBgStyle] = useState({});
    const { store, setStore } = useContext(context);
    const [audio] = useState(new Audio(Sound));

    // Установка свойства loop для аудио
    useEffect(() => {
        audio.loop = true;
        
    }, [audio]);

    const togglePlay = () => {
        setStore({ type: "ChangeIsPlaying", isPlaying: !store.isPlaying });
    };

    useEffect(() => {
        store.isPlaying ? audio.play() : audio.pause();
    }, [store.isPlaying, audio]);

    useEffect(() => {
        const handleMouseMove = (e) => {
            const x = e.clientX / window.innerWidth;
            const y = e.clientY / window.innerHeight;
            setBgStyle({
                transform: `translate(-${x * 50}px, -${y * 50}px)`
            });
        };

        window.addEventListener('mousemove', handleMouseMove);

        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    useEffect(() => {
        setStore({ type: "ChangeIsPlaying", isPlaying: true });

        return () => {
            audio.pause();
            audio.currentTime = 0;
        };
    }, [setStore, audio]);

    return (
        <div className="home-container">
            <div className="menu">
                <button onClick={togglePlay}>
                    {store.isPlaying ? 'Выключить' : 'Включить'}
                </button>
            </div>
            <div className="home" style={bgStyle}></div>
        </div>
    );
}

export default Home;
