"use client";
import { useEffect, useRef } from "react";

export default function AudioPlayer() {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = 0.3; // 🔹 초기 볼륨 30%
      audioRef.current
        .play()
        .catch((err) => console.error("자동 재생 차단됨:", err));
    }
  }, []);

  return <audio ref={audioRef} src="/cut_bgm.mp3" loop autoPlay />;
}
