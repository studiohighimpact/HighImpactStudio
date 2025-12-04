import { useEffect, useState } from 'react';
import { Play, Pause, Volume2 } from 'lucide-react';

export default function VideoPresentation() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [videoElement, setVideoElement] = useState<HTMLIFrameElement | null>(null);
  const [iframeSrc, setIframeSrc] = useState<string>('');

  // Decide controls based on device at mount time to avoid reloading iframe repeatedly
  useEffect(() => {
    const isTouch = typeof window !== 'undefined' && (('ontouchstart' in window) || (navigator.maxTouchPoints && navigator.maxTouchPoints > 0));
    const isSmall = typeof window !== 'undefined' && window.innerWidth <= 768;
    const mobile = isTouch || isSmall;

    const base = 'https://player.vimeo.com/video/1143529692';
    // On mobile enable native controls to avoid autoplay/restart issues and give users explicit controls
    const params = new URLSearchParams({ autoplay: '0', controls: mobile ? '1' : '0', loop: 'false', muted: 'false' });
    setIframeSrc(`${base}?${params.toString()}`);
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
          {/* Video Container */}
          <div className="relative w-full overflow-hidden rounded-lg bg-black/50 border border-white/10">
            <div style={{ paddingBottom: '56.25%' }} className="relative h-0">
              {iframeSrc ? (
                <iframe
                  ref={setVideoElement}
                  src={iframeSrc}
                  frameBorder="0"
                  allow="autoplay; fullscreen; picture-in-picture"
                  allowFullScreen
                  title="High Impact Studio - Presentación"
                  className="absolute top-0 left-0 w-full h-full"
                />
              ) : null}
            </div>
          </div>

          {/* Custom Play Button Overlay
              - Always visible on mobile (so user can play explicitly)
              - On desktop it's only visible on hover */}
          <div className="absolute inset-0 flex items-center justify-center bg-black/30 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300 rounded-lg">
            <button
              onClick={togglePlayPause}
              className="flex items-center gap-3 px-4 py-3 bg-white text-black rounded-full hover:bg-gray-200 transition-colors duration-300 shadow-lg"
              aria-label={isPlaying ? 'Pausar video' : 'Reproducir video'}
            >
              {isPlaying ? (
                <Pause size={28} fill="currentColor" />
              ) : (
                <Play size={28} fill="currentColor" />
              )}
              {/* Show the word Reproducir on small screens for clarity */}
              <span className="block md:hidden text-sm font-medium">Reproducir</span>
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
