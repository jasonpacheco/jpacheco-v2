import React from 'react';

import HomeLayout from './HomeLayout';

export interface LayoutProps {
  children: React.ReactNode;
  withTitle: string;
}

export default function Layout({
  children,
  withTitle,
}: LayoutProps): JSX.Element {
  return (
    <React.StrictMode>
      <HomeLayout withTitle={withTitle}>{children}</HomeLayout>
    </React.StrictMode>
  );
}
