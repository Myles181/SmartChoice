import React from 'react';
import "../Styles/Header.css";
import SearchIcon from '@mui/icons-material/Search';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import MenuIcon from '@mui/icons-material/Menu';
import { Button, ButtonGroup, Divider, IconButton, MenuItem, Toolbar, Typography } from '@mui/material';

function Header() {
    const menuOption = ['Home', 'Store', 'Trending', 'Blog'];
    return (
        <div className='header'>
            <div className='header__width'>
                <div className='header__content'>
                    <div className='header__contentUp'>
                        <div className='header__logo'>
                            <img src='\Images\Main Logologo.png' alt='Smart Choice logo'/>
                            <div className='header__search'>
                                {/* <div className='header__input'>
                                    <SearchIcon />
                                    <input type='text' />
                                </div> */}
                                <div className='header__menu'>
                                    <Toolbar>
                                        <Button size='medium' variant='text' startIcon={<MenuIcon />}> Categories</Button>
                                        {/* <IconButton>
                                            <MenuIcon />
                                        </IconButton>
                                        <Typography>
                                            Categories
                                        </Typography> */}
                                    </Toolbar>
                                        <Divider orientation='vertical' variant='middle' flexItem/>
                                    {menuOption.map((menu) => (
                                        <MenuItem key={menu} className='header__menuDesk'>
                                            <Button className='menuBtn' size='medium' variant='text'>{menu}</Button>
                                        </MenuItem>
                                    ))}
                                </div>
                                
                            </div>
                        </div>
                        <div className='header__input'>
                            <SearchIcon />
                            <input type='text' placeholder='Search products, brands and Categories' />
                        </div>
                        <div className='header__searchBtn'>
                            <Button variant="contained" size="small">Search</Button>
                        </div>
                        <div className='header__help'>
                            <ButtonGroup size='medium' variant='text'>
                                <Button startIcon={<HelpOutlineIcon />}>
                                    Help
                                </Button>
                                <div className='header__contact'>
                                    <Button className='header__contactUs'>Contact us</Button>
                                    <Button>
                                        About
                                    </Button>
                                </div>
                            </ButtonGroup>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header
