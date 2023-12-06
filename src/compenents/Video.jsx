import React from "react";
import AkiraVideo from './assets/videos/AkiraEngagement.mp4';

const Video = ({alt = "ai-solutions-video" }) => {
  
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
