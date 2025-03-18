"use client";

import { useEffect, useRef, useState } from "react";

export default function MusicPlayer() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    if (audioRef.current) {
      // 오디오 볼륨을 50%로 설정
      audioRef.current.volume = 0.3;
      // 자동 재생 시도 (브라우저 정책에 따라 차단될 수 있음)
      audioRef.current
        .play()
        .then(() => setIsPlaying(true))
        .catch((err) => console.log("자동 재생 차단:", err));
    }
  }, []);

  const togglePlay = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current
        .play()
        .then(() => setIsPlaying(true))
        .catch((err) => console.log("재생 오류:", err));
    }
  };

  return (
    <div className="flex items-center gap-2">
      <audio ref={audioRef} src="/cut_bgm.mp3" loop />
      <button
        onClick={togglePlay}
        className="w-2 h-2 flex items-center justify-center rounded-full text-gray-300 font-bold text-2xl hover:bg-gray-700 focus:outline-none"
      >
        {isPlaying ? "||" : "▶"}
      </button>
    </div>
  );
}
