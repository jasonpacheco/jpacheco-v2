/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';

interface LightsProps {
  currentTheme: string;
  toggleTheme: () => void;
}

export default function Lights({
  currentTheme,
  toggleTheme,
}: LightsProps): JSX.Element {
  useEffect(() => {
    toggleTheme();
  }, []);

  return currentTheme === 'dark' ? (
    <p>
      Light mode!{' '}
      <span aria-label="emoji for light mode" role="img">
        ☀️
      </span>
    </p>
  ) : (
    <p>
      Dark mode!{' '}
      <span aria-label="emoji for dark mode" role="img">
        🌙
      </span>
    </p>
  );
}
