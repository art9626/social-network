import React, { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from '../Header/Header';
import { Navbar } from '../Navbar/Navbar';

export const Layout: React.FC = () => {
  return (
    <>
      <Header />
      <Navbar />
      <main className='app-content-wrapper'>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </main>
    </>
  );
}