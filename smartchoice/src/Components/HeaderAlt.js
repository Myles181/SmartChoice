import React from 'react';
import "../Styles/HeaderAlt.css";
import SearchIcon from '@mui/icons-material/Search';
import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import { Button, ButtonGroup, Divider, IconButton, MenuItem, Toolbar, Typography } from '@mui/material';


function HeaderAlt() {
    return (
        <div className='headerAlt'>
            <div className='headerAlt__width'>
                <div className='headerAlt__content'>
                    <div className='headerAlt__contentUp'>
                        <div className='headerAlt__logo'>
                            <img alt='Smart Choice Logo' src='\Images\SmLogo.png' />
                        </div>
                        <div className='headerAlt__help'>
                            <ButtonGroup size='small' variant='text'>
                                <Button startIcon={<HelpOutlineIcon />}>
                                    Help
                                </Button>
                                <div className='headerAlt__contact'>
                                    <Button className='headerAlt__contactUs'>Contact us</Button>
                                    <Button>
                                        About
                                    </Button>
                                </div>
                            </ButtonGroup>
                        </div>
                    </div>
                    <div className='headerAlt__contentDown'>
                        <div className='headerAlt__menu'>
                            <IconButton>
                                <MenuIcon />
                            </IconButton>
                            <Divider orientation='vertical' variant='middle' flexItem/>
                            <IconButton>
                                <HomeIcon />
                            </IconButton>
                        </div>
                        <div className='headerAlt__search'>
                            <div className='headerAlt__input'>
                                <SearchIcon />
                                <input type='text' placeholder='Search products, brands and Categories' />
                            </div>
                            <div className='header__searchBtn'>
                                <Button variant="contained" size="small">Search</Button>
                            </div>
                        </div>
                    </div>
                    <div className='headerAlt__contentDown'></div>
                </div>
            </div>
        </div>
    )
}

export default HeaderAlt
