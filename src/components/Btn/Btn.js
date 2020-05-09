
import React, { useState, useEffect } from 'react';
import { Link } from "gatsby";

import s from './Btn.module.scss';

export default function Btn({
  Component = 'a',
  className = '',
  children,
  ...others
}) {
  return (
    <Component className={`${s.btn} ${className}`} {...others}>
      {children}
    </Component>
  );
}
