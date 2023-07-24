import React from "react";
import { useState, useRef, useEffect, useCallback } from "react";
import "../Styles/Header.css";
import SearchIcon from "@mui/icons-material/Search";
import FavoriteIcon from "@mui/icons-material/Favorite";
import StorefrontIcon from "@mui/icons-material/Storefront";
import ChairIcon from "@mui/icons-material/Chair";
import ChildCareIcon from "@mui/icons-material/ChildCare";
import SportsSoccerIcon from "@mui/icons-material/SportsSoccer";
import VideogameAssetIcon from "@mui/icons-material/VideogameAsset";
import CheckroomIcon from "@mui/icons-material/Checkroom";
import ConnectedTvIcon from "@mui/icons-material/ConnectedTv";
import RadioIcon from "@mui/icons-material/Radio";
import LaptopIcon from "@mui/icons-material/Laptop";
import HeadsetMicIcon from "@mui/icons-material/HeadsetMic";
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";
import DevicesOtherIcon from "@mui/icons-material/DevicesOther";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import MenuIcon from "@mui/icons-material/Menu";
import { Button, Divider, MenuItem, Toolbar, ButtonGroup } from "@mui/material";
import { Link } from "react-router-dom";

function Header({ gotoMarket, gotoTrend, gotoHero, findHelp }) {
  // State Management variables
  const [input, setInput] = useState("");
  const [showMenu, setShowMenu] = useState(false);
  const activeTab = useRef(null);
  const ref = useRef(null);

  //Menu Options
  const menuOption = [
    { id: 1, option: "Home", refd: activeTab },
    { id: 2, option: "MarketPlace" },
    { id: 3, option: "Trending-products" },
    { id: 4, option: "Newsletter" },
  ];

  //Categories Options
  const categories = [
    {
      option: "Supermaket",
      icon: <StorefrontIcon fontSize="small" color="success" />,
    },
    {
      option: "Health & Beauty",
      icon: <FavoriteIcon fontSize="small" color="success" />,
    },
    {
      option: "Home & Office",
      icon: <ChairIcon fontSize="small" color="success" />,
    },
    {
      option: "Health & Beauty",
      icon: <FavoriteIcon fontSize="small" color="success" />,
    },
    {
      option: "Appliances",
      icon: <ConnectedTvIcon fontSize="small" color="success" />,
    },
    {
      option: "Phones & Tablets",
      icon: <PhoneIphoneIcon fontSize="small" color="success" />,
    },
    {
      option: "Computing",
      icon: <LaptopIcon fontSize="small" color="success" />,
    },
    {
      option: "Accessories",
      icon: <HeadsetMicIcon fontSize="small" color="success" />,
    },
    {
      option: "Electronics",
      icon: <RadioIcon fontSize="small" color="success" />,
    },
    {
      option: "Fashion",
      icon: <CheckroomIcon fontSize="small" color="success" />,
    },
    {
      option: "Baby Products",
      icon: <ChildCareIcon fontSize="small" color="success" />,
    },
    {
      option: "Gaming",
      icon: <VideogameAssetIcon fontSize="small" color="success" />,
    },
    {
      option: "Sports",
      icon: <SportsSoccerIcon fontSize="small" color="success" />,
    },
    {
      option: "Other Categories",
      icon: <DevicesOtherIcon fontSize="small" color="success" />,
    },
  ];

  //Open and Close Menu
  const handleMenu = (e) => {
    e.preventDefault();
    {
      showMenu === false ? setShowMenu(true) : setShowMenu(false);
    }
  };

  // Close menu on click outside the menu box
  const onClickOutside = useCallback(() => {
    setShowMenu(false);
  }, []);

  //Handles the click outside the menu box to close effect
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        onClickOutside && onClickOutside();
      }
    };
    document.addEventListener("click", handleClickOutside, true);
    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  }, [onClickOutside]);

  function handleSearch(e) {
    e.preventDefault();
    // setInput("");

    console.log({ input });
    setInput("");
  }
  //console.log({'message': searchData});
  return (
    <div className="header">
      <div className="header__width">
        <div className="header__content">
          <div className="header__contentUp">
            <div className="header__logo">
              <Link to="/">
                <img
                  className="header__logoImg"
                  src="\Images\Main Logologo.png"
                  alt="Smart Choice logo"
                />
              </Link>
              <div className="header__search">
                <div className="header__menu">
                  <Toolbar className="header__menuHd">
                    <Button
                      onClick={handleMenu}
                      size="medium"
                      variant="text"
                      startIcon={<MenuIcon />}
                    >
                      {" "}
                      Categories
                    </Button>
                    <div
                      ref={ref}
                      className={showMenu ? "header__menuShow" : "menuHide"}
                    >
                      {categories.map((item, index) => (
                        <MenuItem
                          onClick={() => {
                            setShowMenu(false);
                          }}
                          className="header header__menuOption"
                          key={index}
                        >
                          {item.icon}
                          <span className="header__menuText">
                            {item.option}
                          </span>
                        </MenuItem>
                      ))}
                    </div>
                  </Toolbar>
                  <Divider orientation="vertical" variant="middle" flexItem />
                  <MenuItem className="header__menuDesk">
                    <Button
                      onClick={gotoHero}
                      className="menuBtn"
                      size="medium"
                      variant="text"
                    >
                      Home
                    </Button>
                  </MenuItem>
                  <MenuItem className="header__menuDesk">
                    <Button
                      onClick={gotoMarket}
                      className="menuBtn"
                      size="medium"
                      variant="text"
                    >
                      MarketPlace
                    </Button>
                  </MenuItem>
                  <MenuItem className="header__menuDesk">
                    <Button
                      onClick={gotoTrend}
                      className="menuBtn"
                      size="medium"
                      variant="text"
                    >
                      Trending-products
                    </Button>
                  </MenuItem>
                  <MenuItem className="header__menuDesk">
                    <Button className="menuBtn" size="medium" variant="text">
                      Newsletter
                    </Button>
                  </MenuItem>
                </div>
              </div>
            </div>
            <div className="header__input">
              <SearchIcon />
              <input
                type="text"
                id="searchInput"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                ref={activeTab}
                placeholder="Search products, brands and Categories"
              />
            </div>
            <div className="header__searchBtn">
              <Button variant="contained" size="small" onClick={handleSearch}>
                Search
              </Button>
            </div>
            <div className="header__help">
              <ButtonGroup size="medium" variant="text">
                <Button onClick={findHelp} startIcon={<HelpOutlineIcon />}>
                  Help
                </Button>
                <div className="header__contact">
                  <Button onClick={findHelp} className="header__contactUs">
                    Contact us
                  </Button>
                  <Button>
                    {" "}
                    onClick={findHelp}
                    About
                  </Button>
                </div>
              </ButtonGroup>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
