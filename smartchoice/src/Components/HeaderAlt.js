import React from 'react';
import { useState, useRef, useEffect, useCallback } from 'react';
import "../Styles/HeaderAlt.css";
import SearchIcon from '@mui/icons-material/Search';
import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';
import FavoriteIcon from '@mui/icons-material/Favorite';
import StorefrontIcon from '@mui/icons-material/Storefront';
import ChairIcon from '@mui/icons-material/Chair';
import ChildCareIcon from '@mui/icons-material/ChildCare';
import SportsSoccerIcon from '@mui/icons-material/SportsSoccer';
import VideogameAssetIcon from '@mui/icons-material/VideogameAsset';
import CheckroomIcon from '@mui/icons-material/Checkroom';
import ConnectedTvIcon from '@mui/icons-material/ConnectedTv';
import RadioIcon from '@mui/icons-material/Radio';
import LaptopIcon from '@mui/icons-material/Laptop';
import HeadsetMicIcon from '@mui/icons-material/HeadsetMic';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import DevicesOtherIcon from '@mui/icons-material/DevicesOther';
import CloseIcon from '@mui/icons-material/Close';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import StoreIcon from '@mui/icons-material/Store';
import LiveHelpIcon from '@mui/icons-material/LiveHelp';
import HelpIcon from '@mui/icons-material/Help';
import CallIcon from '@mui/icons-material/Call';
import InfoIcon from '@mui/icons-material/Info';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import { Button, ButtonGroup, Divider, IconButton, MenuItem, Toolbar, Typography } from '@mui/material';
import { Link } from 'react-router-dom';


function HeaderAlt({ gotoMarket, gotoTrend, gotoHero, findHelp }) {
    const [showMenu, setShowMenu] = useState(false);
    const ref = useRef(null);

    //The categories on smaller screen
    const categories = [ 
        { option: 'Supermaket', icon : <StorefrontIcon fontSize='small' color='success' /> },
        { option: 'Health & Beauty', icon : <FavoriteIcon fontSize='small' color='success' /> },
        { option: 'Home & Office', icon : <ChairIcon fontSize='small' color='success' /> },
        { option: 'Health & Beauty', icon : <FavoriteIcon fontSize='small' color='success' /> },
        { option: 'Appliances', icon: <ConnectedTvIcon fontSize='small' color='success' /> },
        { option: 'Phones & Tablets', icon: <PhoneIphoneIcon fontSize='small' color='success' /> },
        { option: 'Computing', icon: <LaptopIcon fontSize='small' color='success' /> },
        { option: 'Accessories', icon: <HeadsetMicIcon fontSize='small' color='success' /> },
        { option: 'Electronics', icon: <RadioIcon fontSize='small' color='success' /> },
        { option: 'Fashion', icon: <CheckroomIcon fontSize='small' color='success' /> },
        { option: 'Baby Products', icon: <ChildCareIcon fontSize='small' color='success' /> },
        { option: 'Gaming', icon: <VideogameAssetIcon fontSize='small' color='success' /> },
        { option: 'Sports', icon: <SportsSoccerIcon fontSize='small' color='success' /> },
        { option: 'Other Categories', icon: <DevicesOtherIcon fontSize='small' color='success' /> }
    ]

     //The menus on smaller screen
    const altMenu = [
        { option: 'Home', icon: <HomeIcon fontSize='small' color='success' />, func: gotoHero }, 
        { option: 'Marketplace', icon: <StoreIcon fontSize='small' color='success' />, func: gotoMarket },
        { option: 'Trending-Products', icon: <TrendingUpIcon fontSize='small' color='success' />, func: gotoTrend },
        { option: 'Newsletter', icon: <NewspaperIcon fontSize='small' color='success' />, func: findHelp }
    ]

    const menuHelp = [
        { option: 'Help', icon: <HelpIcon fontSize='small' color='success' /> },
        { option: 'Contact Us', icon: <CallIcon fontSize='small' color='success' /> },
        { option: 'About', icon: <InfoIcon fontSize='small' color='success' /> }
    ]

    //handles open and close menu
    const handleMenu = (e) => {
        e.preventDefault();
        {showMenu === false? setShowMenu(true) : setShowMenu(false)}
    }

    // Close menu on click outside the menu box
    const onClickOutside = useCallback(
        () => {
            setShowMenu(false);
        },
        [],
    )

    //Handles the click outside the menu box to close effect
    useEffect(() => {
        const handleClickOutside = (e) => {
            if (ref.current && !ref.current.contains(e.target)) {
                onClickOutside && onClickOutside();
            }
        };
        document.addEventListener('click', handleClickOutside, true);
        return () => {
        document.removeEventListener('click', handleClickOutside, true)
        };
    }, [onClickOutside]);


    return (
        <div className='headerAlt'>
            <div className='headerAlt__width'>
                <div className='headerAlt__content'>
                    <div className='headerAlt__contentUp'>
                        <div className='headerAlt__logo'>
                            <Link to='/'>
                                <img className='headerAlt__logoImg' alt='Smart Choice Logo' src='\Images\SmLogo.png' />
                            </Link>
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
                            <IconButton onClick={handleMenu}>
                                <MenuIcon color='success' />
                            </IconButton>
                            <Divider orientation='vertical' variant='middle' flexItem/>
                            <Link to='/'>
                                <IconButton>
                                    <HomeIcon color='success' />
                                </IconButton>
                            </Link>
                            <div showMenu ref={ref}  className={showMenu? 'headerAlt__menuShow' : 'menuHideAlt' }>
                                <div className='headerAlt__MenuLogoCancel'>
                                    <div className='headerAlt__MenuLogo'>
                                        <Link to='/'>
                                            <IconButton>
                                                <img alt='Smart Choice Logo' src='\Images\SmLogo.png' className='headerAlt__MenuLogoImg' />
                                            </IconButton>
                                        </Link>
                                    </div>
                                    <IconButton onClick={handleMenu}>
                                        <CloseIcon />
                                    </IconButton>
                                </div>
                                <Divider />
                                <div className='headerAlt__liveHelp'>
                                    <LiveHelpIcon fontSize='small' color='success' />
                                    <Typography onClick={() => {setShowMenu(false)}} align='center' variant='body2' ml={1} >Live Help</Typography>
                                </div>
                                <Divider />
                                <Typography color='success' className='headerAlt__menuCaption' align='left' variant='body1' pl={2} mt={1} >MENU</Typography>
                                {altMenu.map((menu, index) => (
                                    <MenuItem onClick={() => {setShowMenu(false)}} className='header headerAlt__menuOption' key={index}>{menu.icon}<span className='headerAlt__menuText'>{menu.option}</span></MenuItem>
                                ))}
                                <Divider />
                                <Typography className='headerAlt__menuCaption' align='left' variant='body1' pl={2} mt={2} component='h1' >CATEGORIES
                                </Typography>
                                    {categories.map((item, index) => (
                                        <MenuItem onClick={() => {setShowMenu(false)}} className='header headerAlt__menuOption' key={index}>{item.icon}<span className='headerAlt__menuText'>{item.option}</span></MenuItem>
                                    ))}
                                <Divider />
                                {menuHelp.map((menu, index) => (
                                    <MenuItem onClick={() => {setShowMenu(false)}} className='headerAlt__menuOption' key={index}>{menu.icon}<span className='headerAlt__menuText'>{menu.option}</span></MenuItem>
                                ))}
                            </div>
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
