import React, { useState, useEffect } from 'react';

import pillStyles from "./Pill.scss";
import instagramIcon from '../../assets/images/icons/instagram.svg';

export default function InstagramPill(props) {
  return (
    <a href="" className={pillStyles.pill} {...props}>
      <img src={instagramIcon} alt="RAWS Instagram" />
    </a>
  );
}
