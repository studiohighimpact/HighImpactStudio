import { useState } from 'react';
import { Play, Pause, Volume2 } from 'lucide-react';

export default function VideoPresentation() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [videoElement, setVideoElement] = useState<HTMLIFrameElement | null>(null);

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
    if (videoElement) {
      // Vimeo iframe API: postMessage para controlar reproducción
      if (isPlaying) {
        videoElement.contentWindow?.postMessage({ method: 'pause' }, '*');
      } else {
        videoElement.contentWindow?.postMessage({ method: 'play' }, '*');
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
          {/* Video Container */}
          <div className="relative w-full overflow-hidden rounded-lg bg-black/50 border border-white/10">
            <div style={{ paddingBottom: '56.25%' }} className="relative h-0">
              <iframe
                ref={setVideoElement}
                src="https://player.vimeo.com/video/1143529692?autoplay=0&controls=0&loop=false&muted=false"
                frameBorder="0"
                allow="autoplay; fullscreen; picture-in-picture"
                allowFullScreen
                title="High Impact Studio - Presentación"
                className="absolute top-0 left-0 w-full h-full"
              />
            </div>
          </div>

          {/* Custom Play Button Overlay */}
          <div className="absolute inset-0 flex items-center justify-center bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg">
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
