import React, { useContext, useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import Container from '@mui/material/Container';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import Clarus from "../assets/cw.jpeg"
import { Link, useNavigate } from 'react-router-dom';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import {AuthContext} from '../contexts/AuthContext';
import { logOut } from '../helpers/firebase';






const Navbar = () => {
  const navigate = useNavigate();
  const {currentUser} = useContext(AuthContext)
  
  
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
          >
            <Link to={"/"}>
              <img src= {Clarus} alt="logo" width= "50px" height="50px"/>
            </Link>
          </Typography>
          
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
          >
            <Link to={"/"}>
              <img src= {Clarus} alt="logo" width= "25px" height="25px"/>
            </Link>
          </Typography>
          
          <Box  sx={{ flexGrow: 1, display: { md: 'flex'} ,  justifyContent:"center"    }}>
            <h2>HALIL Blog</h2>
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 , color: "white" }}>
                
                <AccountCircleIcon fontSize="large" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {currentUser ? (<> 
              <MenuItem onClick={() => {navigate("/profil"); setAnchorElUser(null)}}>
                <Typography textAlign="center">Profile</Typography>
              </MenuItem>
              <MenuItem onClick={() => {navigate("/newblog"); setAnchorElUser(null)}}>
                <Typography textAlign="center">New</Typography>
              </MenuItem> 
              <MenuItem onClick={() => {logOut(); navigate("/"); setAnchorElUser(null)}}>
                <Typography textAlign="center">Logout</Typography>
              </MenuItem> </>) : 
              <><MenuItem onClick={() => {navigate("/login");setAnchorElUser(null)}}>
                  <Typography textAlign="center">Login</Typography>
                </MenuItem>
                <MenuItem onClick={() => {navigate("/register");setAnchorElUser(null)}}>
                  <Typography textAlign="center">Register</Typography>
                </MenuItem></>
                }
              
              
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Navbar;