import { useEffect, useRef, useState } from "react";
import { Button } from "./ui/button";
import { Volume2, VolumeX } from "lucide-react";

const BackgroundMusic = () => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    // Note: Due to browser autoplay policies, music will only play after user interaction
    if (audioRef.current && isPlaying) {
      audioRef.current.volume = 0.4;
      audioRef.current.play().catch(() => {
        setIsPlaying(false);
      });
    }
  }, [isPlaying]);

  const toggleMusic = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play().catch(() => {
          console.log("Autoplay prevented");
        });
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <>
      <audio
        ref={audioRef}
        loop
        src="https://assets.mixkit.co/music/preview/mixkit-tech-house-vibes-130.mp3"
      />
      <Button
        variant="ghost"
        size="icon"
        onClick={toggleMusic}
        className="fixed bottom-4 right-4 z-50 bg-card border border-border shadow-lg hover:bg-muted"
        title={isPlaying ? "Mute Music" : "Play Music"}
      >
        {isPlaying ? <Volume2 className="w-5 h-5" /> : <VolumeX className="w-5 h-5" />}
      </Button>
    </>
  );
};

export default BackgroundMusic;
