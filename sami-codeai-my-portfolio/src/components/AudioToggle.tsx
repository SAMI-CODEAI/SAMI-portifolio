import React from 'react';
import { faVolumeUp, faVolumeMute } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useAudio } from '../context/AudioContext';

const AudioToggle: React.FC = () => {
    const { isMuted, setIsMuted } = useAudio();

    return (
        <button
            className="theme-toggle-btn"
            onClick={() => setIsMuted(!isMuted)}
            aria-label="Toggle audio"
            title={isMuted ? 'Unmute sounds' : 'Mute sounds'}
        >
            <FontAwesomeIcon icon={isMuted ? faVolumeMute : faVolumeUp} />
        </button>
    );
};

export default AudioToggle;
