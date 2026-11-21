// ============================================
// Import React Hooks
// ============================================
import { useState, useEffect } from "react";



export default function useMediaQuery(query: string): boolean {

  // State
  const [matches, setMatches] = useState<boolean>(false);


  // +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
  // +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
  // +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


  // Effect
  useEffect(() => {
    const media: MediaQueryList = window.matchMedia(query);

    if (media.matches !== matches) {
      setMatches(media.matches);
    }

    // Resize Listener
    const listener = (): void => setMatches(media.matches);

    window.addEventListener("resize", listener);

    // Cleanup
    return (): void => window.removeEventListener("resize", listener);
  }, [matches, query]);


  // +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
  // +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
  // +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


  // Return
  return matches;
}