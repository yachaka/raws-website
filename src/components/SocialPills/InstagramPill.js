import React, { useState, useEffect } from 'react';

import pillStyles from "./Pill.module.scss";
import instagramIcon from '../../assets/images/icons/instagram.svg';

export default function InstagramPill({ className, ...others }) {
  return (
    <a href="" className={`${className} ${pillStyles.pill}`} {...others}>
      <img src={instagramIcon} alt="RAWS sur Instagram" />
    </a>
  );
}
