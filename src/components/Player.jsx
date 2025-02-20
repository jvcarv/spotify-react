import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlay, faCirclePause, faBackwardStep, faForwardStep } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { useState, useRef, useEffect } from 'react';

const Player = ({song, songs}) => {
    const [isPlaying, setPlaying] = useState(false);

    const formatTime = (time) => {
        const minutes = Math.floor(time / 60).toString().padStart(2, '0');
        const seconds = Math.floor(time - minutes * 60).toString().padStart(2, '0');
        return `${minutes}:${seconds}`;
    }

    const timeInSeconds = (time) => {
        const minutes = Number(time.split(':')[0]);
        const seconds = Number(time.split(':')[1]);
        return minutes * 60 + seconds;
    }

    const durationInSeconds = timeInSeconds(song.duration);

    const timePercent = (time) => { 
        return `${(time / durationInSeconds)}` * 100 + '%';
    }

    const [time, setTime] = useState(formatTime(0))
    
    const audioPlayer = useRef();
    const progress_bar = useRef();

    const nextSongId = songs.map((currentSongObj, index) => currentSongObj._id === song._id)
    const pastSongId = songs.map((currentSongObj, index) => currentSongObj._id === song._id)

                            
    let nextSong = songs.filter((currentSongObj, index) => true === nextSongId[index - 1])[0];
    let pastSong = songs.filter((currentSongObj, index) => true === pastSongId[index + 1])[0];

    {nextSong === undefined ? nextSong = songs[0] : nextSong = nextSong}
    {pastSong === undefined ? pastSong = songs[songs.length - 1] : pastSong = pastSong}


    useEffect(() => {
        const intervalId = setInterval(() => {
            if(isPlaying){
                setTime(formatTime(audioPlayer.current.currentTime));
                progress_bar.current.style.setProperty('--_progress', timePercent(audioPlayer.current.currentTime));
            }
        }, 1000);

        return () => 
            clearInterval(intervalId);
    }, [isPlaying]);

    return (
        <div className="player">
            <div className="player__controllers">
            <Link to={`/song/${pastSong._id}`}>
                <FontAwesomeIcon
                    className="player__icon"
                    icon={faBackwardStep}
                />
            </Link>
                {isPlaying === true? 
                    <>
                    <FontAwesomeIcon
                        className="player__icon player__icon--play"
                        onClick={() => {
                            audioPlayer.current.pause();
                            setPlaying(false);
                        }}
                        icon={faCirclePause}
                    /> 
                    
                    </>
                : <>
                    <FontAwesomeIcon
                        className="player__icon player__icon--play"
                        onClick={() => {
                            audioPlayer.current.play();
                            setPlaying(true);
                        }}
                        icon={faCirclePlay}
                    /> 
                    </>
                }
                
                
            <Link to={`/song/${nextSong._id}`}>    
                <FontAwesomeIcon
                    className="player__icon"
                    icon={faForwardStep}
                />
            </Link>
            </div>
            <div className="player__progress">
                <p>{time}</p>

                <div className="player__bar">
                    <div ref={progress_bar}className='player__bar-progress'>

                    </div>
                </div>

                <p>0{song.duration}</p>
            </div>

            <audio ref={audioPlayer} src={song.audio}></audio>
        </div>
    );
}

export default Player;  