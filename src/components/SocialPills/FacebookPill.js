import React, { useState, useEffect } from 'react';

import pillStyles from "./Pill.module.scss";

export default function FacebookPill({ className, ...others }) {
  return (
    <a
      href="https://www.facebook.com/Raws-112974153761375"
      target="_blank"
      rel="noopener noreferrer"
      className={`${className} ${pillStyles.pill}`} {...others}
    >
      f
    </a>
  );
}
