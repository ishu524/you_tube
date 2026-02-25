import React, { useEffect, useRef } from "react";

const Videoplayer = ({ video }: any) => {

    const videoRef = useRef<HTMLVideoElement>(null);

    return (
        <div className="aspect-video bg-black rounded-lg overflow-hidden">
            <video
                ref={videoRef}
                className="w-full h-full"
                controls
            >
                <source src={`${process.env.BACKEND_URL}/${video?.filepath}`} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
        </div>
    );
};

export default Videoplayer;
