"use client";
import { useEffect, useRef, useState } from "react";

export default function MusicPlayer() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isUserInteracted, setIsUserInteracted] = useState(false);

  useEffect(() => {
    if (isUserInteracted && audioRef.current) {
      audioRef.current.volume = 0.3;
      audioRef.current.play().catch((err) => {
        console.error("자동 재생 차단됨:", err);
      });
      setIsPlaying(true);
    }
  }, [isUserInteracted]);

  const togglePlay = () => {
    if (!isUserInteracted) setIsUserInteracted(true); // 유저 인터랙션 감지

    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play().catch((err) => {
          console.error("오디오 재생 오류:", err);
        });
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className="flex items-center gap-4">
      <audio ref={audioRef} src="/cut_bgm.mp3" loop />
      <button
        onClick={togglePlay}
        className="w-4 h-4 flex items-center justify-center rounded-full text-gray-300 font-bold text-2xl hover:bg-gray-700 focus:outline-none"
      >
        {isPlaying ? "||" : "▶"}
      </button>
      <audio ref={audioRef} src="/cut_bgm.mp3" />
    </div>
  );
}
