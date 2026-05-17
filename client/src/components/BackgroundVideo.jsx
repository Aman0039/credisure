import React from 'react'

const BackgroundVideo = ({ component }) => {
    return (
        <div>
            <div className="hero">
                <video
                    className="bg-video"
                    autoPlay
                    muted
                    loop
                    playsInline
                >
                    <source src="/video.mp4" type="video/mp4" />
                </video>
                {component}
            </div>
        </div>
    )
}

export default BackgroundVideo