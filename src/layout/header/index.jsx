import React from 'react'
import { AppBar, IconButton, Toolbar, Typography } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu';
import { Menu } from '@components';

const drawerWidth = 240;


const Index = ({handleDrawerToggle}) => {
  return (
    <div>
      {/* <Menu/> */}
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}>

        <Toolbar className='bg-white flex justify-between'>
          <IconButton
            color="black"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}>
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div" className='text-black'>
            <h1 className='font-medium text-2xl'>User page</h1>
          </Typography>
          <Menu/>
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default Index
