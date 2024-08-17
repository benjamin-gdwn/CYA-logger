import { AppBar, Box, Toolbar, Typography, InputBase  } from '@mui/material';
import { Outlet } from 'react-router-dom';

/**
 * App Bar Component which persists on all routes
 */
export const HeaderBar = () => {

  return (
<>
      <AppBar
        id='page-layout-header'
        role="banner" 
        sx={{
          display: 'flex',
          alignItems: 'center',
          backgroundColor: 'white',
          color: '#282c34',
        }}
      >
        <Toolbar>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{
              flexGrow: 1,
              padding: '10px',
              display: { 
                xs: 'none',
                sm: 'block',
              }, 
            }}
          >
            CYA App
          </Typography>
        </Toolbar>
      </AppBar>
    <Outlet />
    </>
  )
};
