import React, { useState, useEffect } from 'react';

import pillStyles from "./Pill.scss";

export default function FacebookPill(props) {
  return (
    <a href="" className={pillStyles.pill} {...props}>
      f
    </a>
  );
}
