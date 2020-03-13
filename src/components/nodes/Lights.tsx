/* eslint-disable react-hooks/exhaustive-deps */
import React, { useLayoutEffect } from 'react';

interface LightsProps {
  isDarkTheme: boolean;
  switchTheme: () => void;
}

export default function Lights({
  isDarkTheme,
  switchTheme,
}: LightsProps): JSX.Element {
  useLayoutEffect(() => {
    switchTheme();
  }, []);

  return !isDarkTheme ? (
    <p>
      Dark mode!{' '}
      <span aria-label="emoji for dark mode" role="img">
        🌙
      </span>
    </p>
  ) : (
    <p>
      Light mode!{' '}
      <span aria-label="emoji for light mode" role="img">
        ☀️
      </span>
    </p>
  );
}
