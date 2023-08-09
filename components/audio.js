"use client";
import React, { useRef, useState, useEffect } from "react";

import Marquee from "react-fast-marquee";

import { BsArrowRightShort } from "react-icons/bs";
import { AiFillPlayCircle, AiFillPauseCircle } from "react-icons/ai";

const AudioPlayer = ({ audioSrc }) => {
  const audioRef = useRef();
  const [duration, setDuration] = useState(0);

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

  const formatTime = (time) => {
    const minutes = Math?.floor(time / 60);
    const seconds = Math?.floor(time % 60);
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };

  const [isPlayingIndex, setIsPlayingIndex] = useState(null);

  const playAudio = (index) => {
    audioRef.current.src = data[index].audio;
    audioRef.current.play();
    setIsPlayingIndex(index);
  };

  const pauseAudio = () => {
    audioRef.current.pause();
    setIsPlayingIndex(null);
  };
  const data = [
    {
      name: "apple podcasts",
      description:
        "new apple prodcut can be realeshed in sep 13, don't forgot to get the your product",
      imageUrl:
        "https://i.pinimg.com/564x/68/12/33/681233d4d211f320af88c307da19d823.jpg",
      audio: "/alappara.mp3",
    },
    {
      name: "apple podcasts",
      description:
        "new apple prodcut can be realeshed in sep 13, don't forgot to get the your product",
      imageUrl:
        "https://i.pinimg.com/564x/b7/43/c9/b743c9590e9ee82d51968b2925a64412.jpg",
      audio: "/alappara.mp3",
    },
    {
      name: "apple podcasts",
      description:
        "new apple prodcut can be realeshed in sep 13, don't forgot to get the your product",
      imageUrl:
        "https://i.pinimg.com/564x/65/8b/c4/658bc476c2065b9f34b1b2f3099c9db5.jpg",
      audio: "/alappara.mp3",
    },
    {
      name: "apple podcasts",
      description:
        "new apple prodcut can be realeshed in sep 13, don't forgot to get the your product",
      imageUrl:
        "https://i.pinimg.com/564x/af/49/5f/af495f29a27073a5a70b8602bc80148a.jpg",
      audio: "/alappara.mp3",
    },
    {
      name: "apple podcasts",
      description:
        "new apple prodcut can be realeshed in sep 13, don't forgot to get the your product",
      imageUrl:
        "https://i.pinimg.com/564x/f9/3f/11/f93f11696e4bc813dbeaca98508d571d.jpg",
      audio: "/alappara.mp3",
    },
  ];

  return (
    <div className="flex flex-col items-center mt-20">
      <div className="relative">
        <Marquee
          gradientWidth={100}
          pauseOnHover
          className="max-w-[1300px] h-[280px]"
        >
          {data?.map((each, index) => (
            <div
              key={index}
              onClick={() => {
                console.log(index);
              }}
              className={`flex relative mx-8 h-[240px] max-w-[350px] rounded-lg bg-white cursor-pointer hover:scale-105 transition-transform`}
              onMouseEnter={() => setIsPlayingIndex(index)}
              onMouseLeave={() => setIsPlayingIndex(null)}
            >
              <div className="flex flex-col bg-slate-100 rounded-lg">
                <img
                  className="w-[200px] h-[180px] rounded-lg object-cover"
                  src={each.imageUrl}
                  alt=""
                />
                <audio
                  style={{
                    display: "none",
                  }}
                  ref={audioRef}
                  controls
                >
                  <source src={each?.audio} type="audio/mpeg" />
                </audio>
                <div className="flex flex-col p-1">
                  <p className="ml-2 font-semibold">Apple products</p>
                  <p className="mx-2 text-xs">apple products are launch</p>
                </div>
              </div>
              <div className="absolute z-50 top-20 left-20">
                {isPlayingIndex === index ? (
                  audioRef.current.paused ? (
                    <AiFillPlayCircle
                      className="bg-blue-500 hover:bg-blue-600 text-4xl p-1 text-white rounded-full"
                      onClick={() => playAudio(index)}
                    />
                  ) : (
                    <AiFillPauseCircle
                      className="bg-red-500 hover:bg-red-600 text-4xl p-1 text-white rounded-full"
                      onClick={pauseAudio}
                    />
                  )
                ) : null}
              </div>
            </div>
          ))}
        </Marquee>

        <div
          onClick={() => {
            alert(`april fool ❤️`);
          }}
          className="flex items-center text-right absolute -top-8 right-4 font-semibold hover:bg-blue-600 cursor-pointer hover:rounded-lg p-1 px-2 text-xs hover:text-white"
        >
          <p>see all</p>
          <span>
            <BsArrowRightShort className="ml-2 text-lg" />
          </span>
        </div>
      </div>
    </div>
  );
};

export default AudioPlayer;
