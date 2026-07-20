import React, { createContext, useContext, useState, useEffect, useCallback, useRef } from 'react';

interface AudioContextType {
    isMuted: boolean;
    setIsMuted: (muted: boolean) => void;
    playClickSound: () => void;
    playCloseSound: () => void;
    playThemeSound: (isDark: boolean) => void;
}

const AudioContext = createContext<AudioContextType | undefined>(undefined);

const CLICK_URL = 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/click_general-4J5EPCjv3QSsmuyA6VyCBPlIYbjOTp.mp3';
const CLOSE_URL = 'https://www.sharyap.com/sounds/click_close.mp3';
const LIGHT_URL = 'https://www.sharyap.com/sounds/lightmode.mp3';
const DARK_URL = 'https://www.sharyap.com/sounds/darkmode.mp3';

export const AudioProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [isMuted, setIsMuted] = useState(() => {
        const saved = localStorage.getItem('isMuted');
        return saved === 'true';
    });

    const sounds = useRef<Record<string, HTMLAudioElement>>({});

    useEffect(() => {
        // Preload sounds
        sounds.current = {
            click: new Audio(CLICK_URL),
            close: new Audio(CLOSE_URL),
            light: new Audio(LIGHT_URL),
            dark: new Audio(DARK_URL),
        };
        Object.values(sounds.current).forEach(s => {
            s.volume = 0.4;
            s.preload = 'auto';
        });

        localStorage.setItem('isMuted', isMuted.toString());
    }, [isMuted]);

    const playSound = useCallback((key: string, volume = 0.4) => {
        if (isMuted) return;
        const sound = sounds.current[key];
        if (sound) {
            const clone = sound.cloneNode() as HTMLAudioElement;
            clone.volume = volume;
            clone.play().catch(() => { });
        }
    }, [isMuted]);

    const playClickSound = useCallback(() => playSound('click', 0.3), [playSound]);
    const playCloseSound = useCallback(() => playSound('close', 0.4), [playSound]);
    const playThemeSound = useCallback((isDark: boolean) => playSound(isDark ? 'dark' : 'light', 0.4), [playSound]);

    return (
        <AudioContext.Provider value={{ isMuted, setIsMuted, playClickSound, playCloseSound, playThemeSound }}>
            {children}
        </AudioContext.Provider>
    );
};

export const useAudio = () => {
    const context = useContext(AudioContext);
    if (context === undefined) {
        throw new Error('useAudio must be used within an AudioProvider');
    }
    return context;
};
