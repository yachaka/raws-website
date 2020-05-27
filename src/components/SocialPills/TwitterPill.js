import React, { useState, useEffect } from 'react';

import pillStyles from "./Pill.module.scss";
import twitterIcon from '../../assets/images/icons/twitter.svg';

export default function TwitterPill({ className, ...others }) {
  return (
    <a
      href="https://twitter.com/raws_sessions"
      rel="noopener noreferrer"
      className={`${className} ${pillStyles.pill}`}
      target="_blank"
      {...others}
    >
      <img src={twitterIcon} alt="RAWS sur Twitter" style={{ height: 22 }} />
    </a>
  );
}
