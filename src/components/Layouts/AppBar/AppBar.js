import React from 'react'
//components
import ListOfPagee from './ListOfPagee';
// mui components
import Typography from '@mui/material/Typography'
import Avatar from '@mui/material/Avatar';
//css 
import '../../../css/AppBar.css'
//redux
import { useSelector } from 'react-redux'
function AppBar() {
    const admin = useSelector(state => state.admin_data.admin);
    return (
        <div className='app_bar'>
            <div className='app_logo'>
                <Typography variant='h4' component='h3' className='txt-color'> OSH Admin</Typography>
            </div>
            <div className='admin_info'>
                <Avatar alt='Remy Sharp'
                    src={`${process.env.REACT_APP_API}/assets/uploads/${admin?.img}`}
                    sx={{ width: 100, height: 100 }} />
                <p className='muted'>Welcome Admin</p>
                <Typography variant='h5' className='txt-color'>{admin?.name}</Typography>
            </div>
            <div className='admin_budget '>
                <Typography variant='h4' className='txt-color'>$55,660</Typography>
                <p className='muted'>monthly budget</p>
            </div>
            <ListOfPagee />
        </div>
    )
}

export default AppBar