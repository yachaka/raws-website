import React, { useState, useEffect } from 'react';

import pillStyles from "./Pill.module.scss";

export default function FacebookPill(props) {
  return (
    <a href="" className={pillStyles.pill} {...props}>
      f
    </a>
  );
}
