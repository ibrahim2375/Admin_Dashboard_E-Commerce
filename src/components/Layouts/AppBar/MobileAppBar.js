import * as React from 'react';
//components
import AppBar from './AppBar'
import Box from '@mui/material/Box';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import Button from '@mui/material/Button';
import DragHandleOutlinedIcon from '@mui/icons-material/DragHandleOutlined';

export default function SwipeableTemporaryDrawer() {
    const [state, setState] = React.useState({
        top: false,
        left: false,
        bottom: false,
        right: false,
    });

    const toggleDrawer = (anchor, open) => (event) => {
        if (
            event &&
            event.type === 'keydown' &&
            (event.key === 'Tab' || event.key === 'Shift')
        ) {
            return;
        }

        setState({ ...state, [anchor]: open });
    };

    const list = (anchor) => (
        <Box
            // sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
            role="presentation"
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
        >
            <AppBar />
        </Box>
    );

    return (
        <React.Fragment >
            <div className="btn_app_bar_show">
                <Button onClick={toggleDrawer('left', true)} >
                    <DragHandleOutlinedIcon sx={{ color: 'white' }} />
                </Button>
            </div>
            <SwipeableDrawer
                anchor={'left'}
                open={state['left']}
                onClose={toggleDrawer('left', false)}
                onOpen={toggleDrawer('left', true)}
            >
                {list('left')}
            </SwipeableDrawer>
        </React.Fragment>
    );
}
