import React, { useState, useEffect } from 'react';

import s from "./VideoPlayer.module.scss";

export default function VideoPlayer({
  videos,
  ...others
}) {
  const [selectedQuality, setSelectedQuality] = useState('720p');

  useEffect(function () {
    if (window.screen.width < 800) {
      setSelectedQuality('480p');
    } else if (window.screen.width < 1280) {
      setSelectedQuality('720p');
    } else {
      setSelectedQuality('1080p');
    }
  }, []);

  function selectQualityFactory(quality) {
    return () => setSelectedQuality(quality);
  }

  return (
    <div className={s.player} {...others}>
      <video key={selectedQuality} controls>
        <source src={videos[selectedQuality]} type="video/mp4" />
      </video>

      <p className={s.selectorText}>
        Qualité :
      </p>

      <div className={s.selector}>
        <div 
          className={`
            ${selectedQuality === '480p' && s.selected}
            ${s.quality}
          `}
          onClick={selectQualityFactory('480p')}
        >
          480p
        </div>

        <div 
          className={`
            ${selectedQuality === '720p' && s.selected}
            ${s.quality}
          `}
          onClick={selectQualityFactory('720p')}
        >
          720p
        </div>

        <div 
          className={`
            ${selectedQuality === '1080p' && s.selected}
            ${s.quality}
          `}
          onClick={selectQualityFactory('1080p')}
        >
          1080p
        </div>
      </div>
    </div>
  );
}
