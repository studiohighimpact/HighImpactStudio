import { useEffect, useState } from 'react';
import { Play, Pause, Volume2 } from 'lucide-react';

export default function VideoPresentation() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [videoElement, setVideoElement] = useState<HTMLIFrameElement | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  // Detect mobile at mount time
  useEffect(() => {
    const isTouch = typeof window !== 'undefined' && (('ontouchstart' in window) || (navigator.maxTouchPoints && navigator.maxTouchPoints > 0));
    const isSmall = typeof window !== 'undefined' && window.innerWidth <= 768;
    setIsMobile(isTouch || isSmall);
  }, []);

  const togglePlayPause = () => {
    const nextPlaying = !isPlaying;
    setIsPlaying(nextPlaying);
    if (videoElement && videoElement.contentWindow) {
      // Vimeo iframe API: postMessage for playback control
      try {
        if (nextPlaying) {
          videoElement.contentWindow.postMessage({ method: 'play' }, '*');
        } else {
          videoElement.contentWindow.postMessage({ method: 'pause' }, '*');
        }
      } catch (e) {
        // ignore cross-origin quirks
      }
    }
  };

  return (
    <section id="video-presentation" className="py-24 bg-black relative">
      <div className="container mx-auto px-6">
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Presentación</h2>
          <div className="h-1 w-20 bg-white" />
        </div>

        <div className="relative w-full max-w-4xl mx-auto group">
          {/* Window Frame */}
          <div className="relative rounded-xl overflow-hidden shadow-2xl border border-white/10">
            {/* Window Title Bar */}
            <div className="bg-[#2d2d2d] px-4 py-3 flex items-center gap-2">
              {/* Traffic Light Buttons */}
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-[#ff5f57] hover:bg-[#ff5f57]/80 transition-colors" />
                <div className="w-3 h-3 rounded-full bg-[#ffbd2e] hover:bg-[#ffbd2e]/80 transition-colors" />
                <div className="w-3 h-3 rounded-full bg-[#28ca41] hover:bg-[#28ca41]/80 transition-colors" />
              </div>
              {/* Window Title */}
              <div className="flex-1 text-center">
                <span className="text-white/50 text-sm">High Impact Studio - Presentación</span>
              </div>
              {/* Spacer for balance */}
              <div className="w-14" />
            </div>
            
            {/* Video Container */}
            <div className="relative w-full bg-black">
              <div style={{ paddingBottom: '56.25%' }} className="relative h-0">
                <iframe
                  ref={setVideoElement}
                  src={isMobile 
                    ? "https://player.vimeo.com/video/1143529692?autoplay=0&controls=1&loop=false&muted=false"
                    : "https://player.vimeo.com/video/1143529692?autoplay=0&controls=0&loop=false&muted=false"}
                  frameBorder="0"
                  allow="autoplay; fullscreen; picture-in-picture"
                  allowFullScreen
                  title="High Impact Studio - Presentación"
                  className="absolute top-0 left-0 w-full h-full"
                />
              </div>
            </div>
          </div>

          {/* Custom Play Button - Only on Desktop (hidden on mobile) */}
          {!isMobile && (
            <div className="absolute inset-0 top-12 flex items-center justify-center bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl pointer-events-none group-hover:pointer-events-auto">
              <button
                onClick={togglePlayPause}
                className="flex items-center justify-center w-20 h-20 bg-white text-black rounded-full hover:bg-gray-200 transition-colors duration-300 shadow-lg"
                aria-label={isPlaying ? 'Pausar video' : 'Reproducir video'}
              >
                {isPlaying ? (
                  <Pause size={40} fill="currentColor" />
                ) : (
                  <Play size={40} fill="currentColor" className="ml-1" />
                )}
              </button>
            </div>
          )}

          {/* Info Note */}
          <div className="mt-6 text-center text-gray-400 text-sm">
            <div className="flex items-center justify-center gap-2">
              <Volume2 size={16} />
              <span>Volumen al máximo - Visualiza la presentación completa</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
