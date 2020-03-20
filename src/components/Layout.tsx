import React from 'react';

import AppLayout from './AppLayout';
import HomeLayout from './HomeLayout';

export interface LayoutProps {
  children?: React.ReactNode;
  isAppVersion: boolean;
  withTitle?: string;
}

export default function Layout({
  children,
  isAppVersion,
  withTitle,
}: LayoutProps): JSX.Element {
  const [userReqWebpage, setUserReqWebpage] = React.useState(false);

  React.useEffect(() => {
    const site = window.localStorage.getItem('site');
    if (site === 'website') {
      setUserReqWebpage(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <React.StrictMode>
      {isAppVersion && !userReqWebpage ? (
        <AppLayout />
      ) : (
        <HomeLayout withTitle={withTitle}>{children}</HomeLayout>
      )}
    </React.StrictMode>
  );
}
