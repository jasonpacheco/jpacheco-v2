import { navigate } from 'gatsby';
import React, { useEffect } from 'react';

export default function RedirectShell(): JSX.Element {
  useEffect(() => {
    setTimeout(() => {
      navigate('/');
    }, 500);
  }, []);

  return (
    <div>
      <p>Redirecting...</p>
    </div>
  );
}
