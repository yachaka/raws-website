import React, { useState, useEffect } from 'react';

import pillStyles from "./Pill.module.scss";
import youtubeIcon from '../../assets/images/icons/youtube.svg';

export default function YoutubePill(props) {
  return (
    <a href="" className={pillStyles.pill} {...props}>
      <img src={youtubeIcon} alt="RAWS sur Youtube" style={{ height: 18 }} />
    </a>
  );
}
