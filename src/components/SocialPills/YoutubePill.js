import React, { useState, useEffect } from 'react';

import pillStyles from "./Pill.module.scss";
import youtubeIcon from '../../assets/images/icons/youtube.svg';

export default function YoutubePill({ className, ...others }) {
  return (
    <a
      href="https://www.youtube.com/channel/UCVsb97WF-sqqM6RVpxO4IXQ"
      target="_blank"
      rel="noopener noreferrer"
      className={`${className} ${pillStyles.pill}`}
      {...others}
    >
      <img src={youtubeIcon} alt="RAWS sur Youtube" style={{ height: 18 }} />
    </a>
  );
}
