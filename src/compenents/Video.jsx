import React, { useRef } from "react";
import AkiraVideo from './assets/videos/AkiraEngagement.mp4';

const Video = ({ src, alt = "Video content" }) => {
    const videoRef = useRef(null);

    const handleFullScreen = () => {
        if (videoRef.current.requestFullscreen) {
            videoRef.current.requestFullscreen();
        } else if (videoRef.current.mozRequestFullScreen) { /* Firefox */
            videoRef.current.mozRequestFullScreen();
        } else if (videoRef.current.webkitRequestFullscreen) { /* Chrome, Safari & Opera */
            videoRef.current.webkitRequestFullscreen();
        } else if (videoRef.current.msRequestFullscreen) { /* IE/Edge */
            videoRef.current.msRequestFullscreen();
        }
    };

    return (
        <div className="flex justify-center items-center h-screen bg-white rounded-xl">
            <video 
                src={AkiraVideo}
                className="max-w-screen-lg rounded-md"
                controls
                alt={alt}
            />
            
        </div>
    );
}

export default Video;
