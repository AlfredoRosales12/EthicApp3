import React from 'react';
import { Breadcrumbs, Link, Typography } from '@mui/material';
import { useLocation, Link as RouterLink } from 'react-router-dom';

const DynamicBreadcrumbs = () => {
  const location = useLocation();

  // Divide la ruta actual en segmentos
  const pathnames = location.pathname.split('/').filter((x) => x);

  return (
    <Breadcrumbs aria-label="breadcrumb">
      {/* Enlace a la página de inicio */}
      <Link component={RouterLink} to="/home" color="inherit">
        Inicio
      </Link>

      {/* Genera enlaces o texto dinámicamente para cada segmento */}
      {pathnames.map((value, index) => {
        const to = `/${pathnames.slice(0, index + 1).join('/')}`;

        // Si es el último segmento, lo mostramos como texto (sin enlace)
        const isLast = index === pathnames.length - 1;
        return isLast ? (
          <Typography color="text.primary" key={to}>
            {decodeURIComponent(value)}
          </Typography>
        ) : (
          <Link component={RouterLink} to={to} color="inherit" key={to}>
            {decodeURIComponent(value)}
          </Link>
        );
      })}
    </Breadcrumbs>
  );
};

export default DynamicBreadcrumbs;
