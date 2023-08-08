"use client";
import React, { useRef, useState, useEffect } from "react";

const AudioPlayer = ({ audioSrc }) => {
  const audioRef = useRef();
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);

  useEffect(() => {
    audioRef?.current?.addEventListener("loadedmetadata", handleLoadedMetadata);
    audioRef?.current?.addEventListener("timeupdate", handleTimeUpdate);

    return () => {
      audioRef?.current?.removeEventListener(
        "loadedmetadata",
        handleLoadedMetadata
      );
      audioRef?.current?.removeEventListener("timeupdate", handleTimeUpdate);
    };
  }, []);

  const handleLoadedMetadata = () => {
    setDuration(audioRef?.current?.duration);
  };

  const handleTimeUpdate = () => {
    setCurrentTime(audioRef?.current?.currentTime);
  };

  const formatTime = (time) => {
    const minutes = Math?.floor(time / 60);
    const seconds = Math?.floor(time % 60);
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };

  const playAudio = () => {
    audioRef?.current?.play();
  };

  const pauseAudio = () => {
    audioRef?.current?.pause();
  };

  // below line command the env file

  console.log(process.env.NEXT_PUBLIC_RAZORPAYID);

  return (
    <div className="flex items-center">
      <audio ref={audioRef} controls>
        <source src="/alappara.mp3" type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
      <div className="ml-4">
        <button
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
          onClick={playAudio}
        >
          Play
        </button>
        <button
          className="ml-4 bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded"
          onClick={pauseAudio}
        >
          Pause
        </button>
        <p className="mt-2">Duration: {formatTime(duration)}</p>
        <p>Current Time: {formatTime(currentTime)}</p>
      </div>
    </div>
  );
};

export default AudioPlayer;
