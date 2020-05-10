import React, { useState, useEffect } from 'react';

import pillStyles from "./Pill.module.scss";

export default function FacebookPill({ className, ...others }) {
  return (
    <a href="" className={`${className} ${pillStyles.pill}`} {...others}>
      f
    </a>
  );
}
