import React, { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import Preloader from '../common/Preloader/Preloader';
import HeaderContainer from '../Header/HeaderContainer';
import Navbar from '../Navbar/Navbar';

const Layout: React.FC = () => {
  return (
    <>
      <HeaderContainer />
      <Navbar />
      <main className='app-content-wrapper'>
        <Suspense fallback={<Preloader />}>
          <Outlet />
        </Suspense>
      </main>
    </>
  );
}

export default Layout;