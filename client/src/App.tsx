import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import Home from "@/pages/Home";
import Preloader from "@/components/Preloader";
import { useState, useEffect } from "react";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    // Check if preloader has already been shown this session
    const hasSeenPreloader = sessionStorage.getItem('preloaderShown');
    if (hasSeenPreloader) {
      setIsLoading(false);
      setShowContent(true);
    }
  }, []);

  const handlePreloaderComplete = () => {
    sessionStorage.setItem('preloaderShown', 'true');
    setIsLoading(false);
    setShowContent(true);
  };

  return (
    <QueryClientProvider client={queryClient}>
      <Toaster />
      {isLoading && <Preloader onComplete={handlePreloaderComplete} />}
      {showContent && <Home />}
    </QueryClientProvider>
  );
}

export default App;
