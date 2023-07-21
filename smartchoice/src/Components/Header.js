import React from "react";
import "../Styles/Header.css";
import SearchIcon from '@mui/icons-material/Search';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import MenuIcon from '@mui/icons-material/Menu';
import { Button, Divider, IconButton, MenuItem, Toolbar, Typography, ButtonGroup, } from '@mui/material';

function Header() {
    const menuOption = ['Home', 'MarketPlace', 'Trending-products', 'Newsletter'];
    const [input, setInput] = useState(""); 
    const [show, setShow] = useState(false);
    const [showMenu, setShowMenu] = useState(false);

    const categories = [ 
        'Supermaket',
    'Health & Beauty',
    'Home & Office',
    'Appliances',
    'Phones & Tablets',
    'Computing',
    'Electronics',
    'Fashion',
    'Baby Products',
    'Gaming',
    'Sports',
    'Other Categories'
]
    const handleMenu = (e) => {
        e.preventDefault();
        {showMenu === false? setShowMenu(true) : setShowMenu(false)}
    }

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
                                    <Toolbar className='header__menuHd' >
                                        <Button onClick={handleMenu} size='medium' variant='text' startIcon={<MenuIcon />}> Categories</Button>
                                        <div className='header__menuShow'>
                                            {categories.map((item, index) => (
                                                <MenuItem key={index}>{item}</MenuItem>
                                            ))}
                                        </div>
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
                            <input type='text' id='searchInput' value={input} onChange={ e => setInput(e.target.value)} placeholder='Search products, brands and Categories' />
                        </div>
                        <div className='header__searchBtn'>
                            <Button variant="contained" size="small" onClick={handleSearch}>Search</Button>
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
              </Toolbar>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
