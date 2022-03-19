import { Box, Container, LinearProgress } from '@mui/material';
import React, { Suspense, useState } from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from '../Header/Header';
import { Navbar } from '../Navbar/Navbar';

export const Layout: React.FC = () => {
  const [navbarStatus, setNavbarStatus] = useState(false);

  const toggleNavbar = (status: boolean) => (e: React.MouseEvent) => setNavbarStatus(status);

  return (
    <>
      <Header toggleNavbar={toggleNavbar} />
      <Box
        component='main'
        sx={{
          minHeight: '100vh',
          bgcolor: 'background.default',
          color: 'text.primary',
        }}
      >
        <Suspense fallback={<LinearProgress color='primary' />}>
          <Container maxWidth='md'>
            <Outlet />
          </Container>
        </Suspense>
        <Navbar navbarStatus={navbarStatus} toggleNavbar={toggleNavbar} />
      </Box>
    </>
  );
}