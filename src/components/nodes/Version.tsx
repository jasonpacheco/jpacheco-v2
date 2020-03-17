import React from 'react';

export default function Version(): JSX.Element {
  return (
    <div>
      <h3>SHELL INFORMATION</h3>
      <div>
        <p>
          Hello, hola,{' '}
          <span aria-label="marhaba (Arabic for hello)">مرحبا</span>,{' '}
          <span aria-label="nihao (Mandarin Chinese for hello)">你好</span>!
          Thank you for using shell@jpacheco.dev! This shell is built with
          Gatsby and TypeScript.
        </p>
        <p>
          Shell version: <code>1.0.0</code>
        </p>
        <p>
          Site version: <code>2.0</code>
        </p>
      </div>
      <div>
        <h3>CHANGELOG</h3>
        <div>
          <p>Initial release 2020-03-18</p>
        </div>
      </div>
    </div>
  );
}
