
import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { AppBar } from 'components/appBar/appBar';

export function Layout() {


  return (
    <div style={{ maxWidth: 960, margin: '0 auto', padding: '0 16px' }}>
      <AppBar/>
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </div>
  );
}
