import React from 'react';
import './SectionHeader.css';
import { Button } from '@mui/material';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';

function SectionHeader() {
    return (
        <div className='sectionHeader'>
            <div className='sectionHeader__width'>
                <div className='sectionHeader__content'>
                    <div className='sectionHeader__text'>
                        <h3>MarketPlace</h3>
                        <Button className='sectionBtn' variant='contained' size='small' endIcon={<ArrowCircleRightIcon />}>Compare More</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SectionHeader
