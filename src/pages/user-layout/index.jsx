import * as React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Toolbar from '@mui/material/Toolbar';
import { Typography } from '@mui/material';
import { NavLink, Outlet, useLocation } from 'react-router-dom';
import img from '../../assets/NT_logo.png'
import { Header } from '@layout';
import { user } from '@router/routes';

const drawerWidth = 240

function ResponsiveDrawer(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [isClosing, setIsClosing] = React.useState(false);

  const handleDrawerClose = () => {
    setIsClosing(true);
    setMobileOpen(false);
  };

  const {pathname} = useLocation()
  const handleDrawerTransitionEnd = () => {
    setIsClosing(false);
  };

  const handleDrawerToggle = () => {
    if (!isClosing) {
      setMobileOpen(!mobileOpen);
    }
  };

  const drawer = (
    <div>
      <img src={img} alt="NT-logo" className='mt-0' />
      <Divider/>
      <List>
        {user.map((item, index) => (
          <NavLink key={index} to={item.path} className={item.path === pathname ? 'block bg-red-100 text-[rgba(181,144,98,1)]' : ""}>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <span className={item.path === pathname ? 'text-[rgba(181,144,98,1)]' : ""}>{item.icon}</span>
              </ListItemIcon>
              <ListItemText primary={item.content}/>
            </ListItemButton>
          </ListItem>
        </NavLink>
        ))}
      </List>
      <Divider />
    </div>
  );
  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }} className="overflow-y-auto">
      <CssBaseline />
      <Header handleDrawerToggle={handleDrawerToggle}/>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onTransitionEnd={handleDrawerTransitionEnd}
          onClose={handleDrawerClose}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }} className='bg-gray-100'>
        <Toolbar />
        <Typography sx={{ marginBottom: 2 }}>
        </Typography>
        <Typography sx={{ marginBottom: 2 }}>
          <Outlet/>
        </Typography>
      </Box>
    </Box>
  );
}

ResponsiveDrawer.propTypes = {
  window: PropTypes.func,
};

export default ResponsiveDrawer;
