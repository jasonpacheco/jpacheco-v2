import { navigate } from 'gatsby';
import React from 'react';

export default function RedirectShell(): JSX.Element {
  React.useEffect(() => {
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
