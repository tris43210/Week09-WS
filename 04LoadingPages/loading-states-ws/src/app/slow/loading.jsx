"use client";
import BeatLoader from "react-spinners/BeatLoader";

export default function Loading() {
  return (
    <div className="flex h-screen w-full justify-center pt-20">
      <BeatLoader loading={true} speedMultiplier={1} color="#ffffff" />
    </div>
  );
}
