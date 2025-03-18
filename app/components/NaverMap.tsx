"use client";
import { useEffect, useRef } from "react";

export default function NaverMap() {
  const mapRef = useRef<HTMLDivElement>(null);

  const LAT = 37.479298;
  const LONG = 127.1026861;
  useEffect(() => {
    const initMap = () => {
      if (!window.naver || !mapRef.current) return;

      const map = new window.naver.maps.Map(mapRef.current, {
        center: new window.naver.maps.LatLng(LAT, LONG),
        zoom: 14,
      });

      new window.naver.maps.Marker({
        position: new window.naver.maps.LatLng(LAT, LONG),
        map,
        title: "단미그린비",
      });
    };
    if (!window.naver) {
      const script = document.createElement("script");
      script.src = `https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=${process.env.NEXT_PUBLIC_NAVER_MAP_CLIENT_ID}`;
      script.async = true;
      script.onload = () => initMap();
      document.body.appendChild(script);
    } else {
      initMap();
    }
  }, []);

  return <div ref={mapRef} className="w-full h-80 shadow-md" />;
}
