import React, { useEffect, useState } from 'react'
//mui icons 
import CreditCardIcon from '@mui/icons-material/CreditCard';
import Typography from '@mui/material/Typography'

//css
import '../../css/Card.css'
let totalPaidCount = 0;
function Card({ sales }) {
    let [totalPaid, setTotalPaid] = useState(0)
    useEffect(() => {
        let finish = false;
        if (!finish) {
            const total = sales?.map((s) => {
                return setTotalPaid(totalPaidCount += (s?.quantity * s?.price))
            })
            if (total?.length === sales?.length) {
                finish = true;
                totalPaidCount = 0;
            }
        }
    }, [sales])
    return (
        <div className='card'>
            <div className="card_head">
                <p className='muted'>Available Balance</p>
            </div>
            <div className="card_middle">
                <Typography variant='h4' component='h3'> ${totalPaid} </Typography>
            </div>
            <div className="card_footer">
                <p>************42424</p>
                <CreditCardIcon />
            </div>

        </div>
    )
}

export default Card