import React from 'react';
import { forwardRef } from 'react'
import '../Styles/Footer.css';
import { Box, Button, TextField, IconButton } from '@mui/material';
import CallIcon from '@mui/icons-material/Call';
import EmailIcon from '@mui/icons-material/Email';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import GoogleIcon from '@mui/icons-material/Google';

const Footer = forwardRef(function(props, ref) {
    return (
        <div ref={ref} className='footer'>
            <div className='footer__width'>
                <div className='footer__content'>
                    <div className='footer__contentUp'>
                        <div className='footer__contentUpLeft'>
                            <div className='footer__help footer__options'>
                                <div className='footer__helpHeader footerHeader'>
                                    <h4>Let's help you</h4>
                                </div>
                                <div className='footer__helpCompare'>
                                    <div className='footer__helpCompareHeader'>
                                        <h4>Compare for me</h4>
                                    </div>
                                    <ul className='footer__list'>
                                        <li>search for products</li>
                                        <li>click compare4me on the result page</li>
                                        <li>scan through top three products</li>
                                        <li>select a product to purchase</li>
                                    </ul>
                                </div>
                            </div>
                            <div className='footer__new footer__options'>
                                <div className='footer__newHeader footerHeader'>
                                    <h4>New Here</h4>
                                </div>
                                <ul className='footer__list'>
                                    <li>search for products</li>
                                    <li>scan through results</li>
                                    <li>select a product to purchase</li>
                                </ul>
                            </div>
                            <div className='footer__sitemap footer__options'>
                                <div className='footer__sitemapHeader footerHeader'>
                                    <h4>Sitemap</h4>
                                </div>
                                <h5>All Our Pages</h5>
                                <ul className='footer__list'>
                                    <li>Home</li>
                                    <li>Newsletter</li>
                                    <li>Contact us</li>
                                    <li>About</li>
                                </ul>
                            </div>
                            <div className='footer__marketplace footer__options'>
                                <div className='footer__marketplaceHeader footerHeader'>
                                    <h4>MarketPlace</h4>
                                </div>
                                <ul className='footer__list'>
                                    <li>Jumia</li>
                                    <li>Konga</li>
                                    <li>Amazon</li>
                                </ul>
                            </div>
                            <div className='footer__browse footer__options'>
                                <div className='footer__browseHeader footerHeader'>
                                    <h3>Browse</h3>
                                </div>
                                <ul className='footer__list'>
                                    <li>Best Offer</li>
                                    <li>MarketPlace</li>
                                    <li>Trending Products</li>
                                </ul>
                            </div>
                            <div className='footer__contact footer__options'>
                                <div className='footer__contactHeader'>
                                    <h4>Smartchoice</h4>
                                </div>
                                <div className='footer__contactList'>
                                    <div className='footer__contactListUs'>
                                        <CallIcon fontSize='8px' />
                                        <h5>+23498163103164</h5>
                                    </div>
                                    <div className='footer__contactListUs'>
                                        <EmailIcon fontSize='8px' />
                                        <h5>email@smartchoice.com</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='footer__contentUpRight'>
                            <Box component='form'
                                width='300px'
                                sx={{
                                    '& .MuiTextField-root': { m: 1, width: '28ch'}
                                }}
                                noValidate
                                autoComplete='off'
                                >
                                    <div>
                                        <div className='footer__boxContent'>
                                            <div className='footer__message'>
                                                <div className='footer__messageHeader'>
                                                    <h4>Contact Us</h4>
                                                    <h5>Send Us a Message</h5>
                                                </div>
                                            </div>
                                            <TextField 
                                                id="filled-multiline-flexible"
                                                label="First Name"
                                                variant='filled'
                                                required
                                                size='small'
                                                maxRows={4}
                                            />
                                            <TextField 
                                                id="filled-multiline-flexible"
                                                label="Last Name"
                                                variant='filled'
                                                size='small'
                                                multiline
                                                required
                                                maxRows={2}
                                            />
                                            <TextField 
                                                id="filled-multiline-flexible"
                                                label="Your Message"
                                                variant='filled'
                                                size='small'
                                                multiline
                                                rows={4}
                                                column={6}
                                            />
                                    
                                        </div>
                                        <Button
                                            className='formSubmit'
                                            variant='contained'
                                            size='small'
                                            >
                                                Submit
                                        </Button>
                                    </div>
                            </Box>
                        </div>
                    </div>
                    <div className='footer__contentDown'>
                        <div className='footer__socialsLogo'>
                            <div className='footer__socials'>
                                <IconButton>
                                    <FacebookIcon />
                                </IconButton>
                                <IconButton>
                                    <InstagramIcon />
                                </IconButton>
                                <IconButton>
                                    <TwitterIcon />
                                </IconButton>
                                <IconButton>
                                    <WhatsAppIcon />
                                </IconButton>
                                <IconButton>
                                    <GoogleIcon />
                                </IconButton>
                            </div>
                            <div className='footer__logo'>
                                <img alt='Smart Choice logo' src='\Images\SmLogo.png' />
                            </div>
                        </div>
                        <div className='footer__copy'>
                            <div>
                                <span> 
                                    &copy;2023 All Rights Reserved SmartChoice
                                </span>
                            </div>
                            <div>
                                <span>
                                    {/* <img alt='' src='\Images\Main Logologo.png' /> */}
                                    About Ads
                                </span>
                            </div>
                            <div>
                                <span>
                                    Terms of Use
                                </span>
                            </div>
                            <div>
                                <span>
                                    Privacy Policy
                                </span>
                            </div>
                            <div>
                                <span>
                                    Do Not Sell My Personal Information
                                </span>
                            </div>
                            <div>
                                <span>
                                    email@smartchoice.com
                                </span>
                            </div>
                            <div>
                                <span>
                                    Developer Guidelines
                                </span>
                            </div>
                            <div>
                                <span>
                                    Sitemap
                                </span>
                            </div>
                            <div>
                                <span 
                                className='footer__copyLastChild'> &copy;2023 All Rights Reserved SmartChoice
                            </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        )
})

export default Footer
