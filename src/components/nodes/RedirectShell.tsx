import { navigate } from 'gatsby';
import React from 'react';

export default function RedirectShell(): JSX.Element {
  React.useEffect(() => {
    setTimeout(() => {
      window.localStorage.setItem('site', 'website');
      navigate('home');
    }, 500);
  }, []);
  return (
    <div>
      <p>Redirecting...</p>
    </div>
  );
}
