"use client";
import { useRef, useState } from "react";
import { Volume2, VolumeX, Maximize } from "lucide-react";

export default function LandingVideo() {
    const videoRef = useRef(null);
    const [muted, setMuted] = useState(true);

    const toggleMute = () => {
        if (!videoRef.current) return;
        videoRef.current.muted = !videoRef.current.muted;
        setMuted(videoRef.current.muted);
    };

    const openFullScreen = () => {
        if (!videoRef.current) return;
        if (videoRef.current.requestFullscreen) {
            videoRef.current.requestFullscreen();
        }
    };

    return (
        <div className="relative w-full h-auto group overflow-hidden">

            {/* Background Video */}
            <video
                ref={videoRef}
                src="/landing/landingVIdeo.mp4"
                autoPlay
                loop
                muted={muted}
                playsInline
                poster="/landing/landingVIdeoALt.png"
                className="w-full md:h-screen h-[90vh] object-cover"
            />

            {/* Light Black Overlay */}
            <div className="absolute inset-0 bg-black/30 z-10" />

            {/* Blue zone-style Overlay Text */}
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center pointer-events-none px-4 text-white z-20">
                <div className="flex flex-col items-center gap-6 max-w-5xl">
                    <h2
                        className="text-sm md:text-lg uppercase tracking-[0.2em] font-light mb-8"
                    >
                        EVOLURA
                    </h2>
                    <h1 className="text-4xl md:text-7xl font-serif font-medium leading-tight drop-shadow-2xl">
                        THE HEART OF <br /> COMMUNITY LIFE
                    </h1>
                    <p className="text-lg md:text-xl font-light tracking-wide max-w-2xl opacity-90 drop-shadow-lg">
                        Where connections, wellness, and leisure blend seamlessly into modern
                        living.
                    </p>
                    <div className="mt-6 py-3 px-8 border border-white/30 rounded-full backdrop-blur-sm bg-white/5 drop-shadow-lg">
                        <p className="text-xs md:text-sm tracking-[0.2em] uppercase font-medium">
                            “ Second Largest Clubhouse in Kerala ”
                        </p>
                    </div>
                </div>
            </div>

            {/* Controls – bottom right */}
            <div className="absolute bottom-6 right-6 flex gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-auto">

                {/* Mute / Unmute */}
                {/* <button
                    onClick={toggleMute}
                    className="p-3 bg-black/40 backdrop-blur-md border border-white/20 text-white rounded-full hover:bg-black/60 transition-all duration-300"
                    aria-label={muted ? "Unmute" : "Mute"}
                >
                    {muted ? <VolumeX size={20} /> : <Volume2 size={20} />}
                </button> */}

                {/* Fullscreen */}
                {/* <button
                    onClick={openFullScreen}
                    className="p-3 bg-black/40 backdrop-blur-md border border-white/20 text-white rounded-full hover:bg-black/60 transition-all duration-300"
                    aria-label="Fullscreen"
                >
                    <Maximize size={20} />
                </button> */}
            </div>

        </div>
    );
}
