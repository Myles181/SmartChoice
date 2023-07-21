import React from 'react';
import '../Styles/SectionHeader.css';
import { Button } from '@mui/material';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';

function SectionHeader({ tittle, tittleBtn }) {
    return (
        <div className='sectionHeader'>
            <div className='sectionHeader__width'>
                <div className='sectionHeader__content'>
                    <div className='sectionHeader__text'>
                        <h3>{tittle}</h3>
                        <Button className='sectionBtn' variant='contained' size='small' endIcon={<ArrowCircleRightIcon />}>{tittleBtn}</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SectionHeader
