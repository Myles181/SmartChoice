import React from 'react';
import { useState } from 'react';
import "../Styles/Header.css";
import SearchIcon from '@mui/icons-material/Search';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import MenuIcon from '@mui/icons-material/Menu';
import { Button, Divider, IconButton, MenuItem, Toolbar, Typography } from '@mui/material';
//import { Script } from 'vm';



function Header() {
    const [input, setInput] = useState("");    
    const menuOption = ['Home', 'MarketPlace', 'Trending-products', 'Newsletter'];

    function handleSearch(e) {
        e.preventDefault();
        setInput("");

        console.log({input});
        //console.log({'message': searchData});
    }

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
                                        <IconButton>
                                            <MenuIcon />
                                        </IconButton>
                                        <Typography>
                                            Categories
                                        </Typography>
                                    </Toolbar>
                                        <Divider orientation='vertical' variant='middle' flexItem/>
                                    {menuOption.map((menu) => (
                                        <MenuItem key={menu}>
                                            <Typography textAlign='center'>{menu}</Typography>
                                        </MenuItem>
                                    ))}
                                </div>
                                
                            </div>
                        </div>
                        <div className='header__input'>
                            <SearchIcon />
                            <input type='text' id='searchInput' value={input} onChange={ e => setInput(e.target.value)} placeholder='Search products, brands and Categories' />
                        </div>
                        <div className='header__searchBtn'>
                            <Button variant="contained" size="small" onClick={handleSearch}>Search</Button>
                        </div>
                        <div className='header__help'>
                            <Toolbar>
                                <IconButton>
                                    <HelpOutlineIcon />
                                </IconButton>
                                <Typography>
                                    Help
                                </Typography>
                                <div className='header__contact'>
                                    <Typography className='header__contactUs'>Contact us</Typography>
                                    <Typography>
                                        About
                                    </Typography>
                                </div>
                            </Toolbar>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
    
}

export default Header
