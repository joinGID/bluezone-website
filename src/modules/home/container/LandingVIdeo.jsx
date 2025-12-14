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
                src="/455143_Beach_Lounger_1920x1080.mp4"
                autoPlay
                loop
                muted={muted}
                playsInline
                poster="/carousle.avif"
                className="w-full h-auto object-cover"
            />

            {/* Blue zone-style Overlay Text */}
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center pointer-events-none px-4">

                {/* Small label */}
                <p className="text-white/90 text-xs md:text-sm tracking-[0.25em] uppercase mb-4 drop-shadow-md">
                    About Bluezone
                </p>

                {/* Big serif title */}
                <h1 className="text-white font-serif font-light text-4xl md:text-6xl lg:text-7xl leading-tight drop-shadow-[0_4px_20px_rgba(0,0,0,0.6)]">
                    Your Home for Better Living
                </h1>

            </div>

            {/* Controls – bottom right */}
            <div className="absolute bottom-6 right-6 flex gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-auto">

                {/* Mute / Unmute */}
                <button
                    onClick={toggleMute}
                    className="p-3 bg-black/40 backdrop-blur-md border border-white/20 text-white rounded-full hover:bg-black/60 transition-all duration-300"
                    aria-label={muted ? "Unmute" : "Mute"}
                >
                    {muted ? <VolumeX size={20} /> : <Volume2 size={20} />}
                </button>

                {/* Fullscreen */}
                <button
                    onClick={openFullScreen}
                    className="p-3 bg-black/40 backdrop-blur-md border border-white/20 text-white rounded-full hover:bg-black/60 transition-all duration-300"
                    aria-label="Fullscreen"
                >
                    <Maximize size={20} />
                </button>
            </div>

        </div>
    );
}
