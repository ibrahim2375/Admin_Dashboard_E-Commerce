import React from 'react'
//components
import AppBar from './Layouts/AppBar/AppBar'
import HeaderBg from './Layouts/HeaderBg'
import AppBarOfMobile from './Layouts/AppBar/MobileAppBar'
//mui components
import Container from '@mui/material/Container'
//css
import '../css/Layout.css'
function Layout({ children }) {
    return (
        <div className='layout'>
            <AppBarOfMobile />
            <HeaderBg />
            <main>
                <div className='app_bar_area'>
                    <AppBar />
                </div>
                <div className='children'>
                    <Container>
                        {children}
                    </Container>
                </div>
            </main>
        </div>
    )
}

export default Layout