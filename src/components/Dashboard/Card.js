import React from 'react'
//mui icons 
import CreditCardIcon from '@mui/icons-material/CreditCard';
import Typography from '@mui/material/Typography'
//css
import '../../css/Card.css'

function Card() {
    return (
        <div className='card'>
            <div className="card_head">
                <p className='muted'>Available Balance</p>
            </div>
            <div className="card_middle">
                <Typography variant='h4' component='h3'> $55.70 </Typography>
            </div>
            <div className="card_footer">
                <p>************42424</p>
                <CreditCardIcon  />
            </div>

        </div>
    )
}

export default Card