import { useEffect, useRef } from 'react';

const CLICK_SOUND_URL =
    'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/click_general-4J5EPCjv3QSsmuyA6VyCBPlIYbjOTp.mp3';

/**
 * Attaches a global mousedown listener that plays a subtle click sound.
 * The sound is preloaded on first user interaction for best performance.
 */
export function useClickSound() {
    const audioRef = useRef<HTMLAudioElement | null>(null);

    useEffect(() => {
        // Pre-create the audio element
        const audio = new Audio(CLICK_SOUND_URL);
        audio.volume = 0.3;
        audio.preload = 'auto';
        audioRef.current = audio;

        const handleClick = () => {
            if (!audioRef.current) return;
            // Clone and play so rapid clicks don't cut each other off
            const clone = audioRef.current.cloneNode() as HTMLAudioElement;
            clone.volume = 0.3;
            clone.play().catch(() => { });
        };

        document.addEventListener('mousedown', handleClick);
        return () => document.removeEventListener('mousedown', handleClick);
    }, []);
}
