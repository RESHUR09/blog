'use client';
import { Global } from '@emotion/react';
import { globalStyles } from './styles/globalStyles';

export default function Globals() {
  return <Global styles={globalStyles} />;
}
