import React from 'react'
//router link
import { Link } from 'react-router-dom'
//mui components
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined';
import PeopleOutlineIcon from '@mui/icons-material/PeopleOutline';
import ProductionQuantityLimitsOutlinedIcon from '@mui/icons-material/ProductionQuantityLimitsOutlined';
import AddShoppingCartOutlinedIcon from '@mui/icons-material/AddShoppingCartOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import BarChartIcon from '@mui/icons-material/BarChart';
//redux 
import { useDispatch } from 'react-redux';
import * as Actions from '../../../Redux/actions/Actions'
//list data
const AppBarList = {
    upList: [
        {
            id: 0,
            title: "Dashboard",
            Icon: DashboardOutlinedIcon,
            link: "/dashboard"
        },
        {
            id: 1,
            title: "Users",
            Icon: PeopleOutlineIcon,
            link: "/users"
        },
        {
            id: 2,
            title: "Orders",
            Icon: ShoppingBagOutlinedIcon,
            link: "/orders"
        }
    ],
    downList: [
        {
            id: 0,
            title: "Products",
            Icon: ProductionQuantityLimitsOutlinedIcon,
            link: "/products"
        },
        {
            id: 1,
            title: "Cteate Product",
            Icon: AddShoppingCartOutlinedIcon,
            link: "/create-product"
        },
        {
            id: 2,
            title: "Sales",
            Icon: BarChartIcon,
            link: "/calc-sales"
        }
    ]
}
function ListOfPagee() {
    const dispatch = useDispatch();
    const logout = async () => {
        await dispatch(Actions.get_admin(null, false))
    }
    return (
        <div className='list_nav'>
            <Box>
                <List>
                    {AppBarList.upList.map((List) => (
                        <Link to={List.link} key={List.id} className='link'>
                            <ListItem disablePadding>
                                <ListItemButton>
                                    <ListItemIcon>
                                        <List.Icon  />
                                    </ListItemIcon>
                                    <ListItemText primary={List.title} />
                                </ListItemButton>
                            </ListItem>
                        </Link>
                    ))}
                </List>
                <Divider />
                <List>
                    {AppBarList.downList.map((List) => (
                        <Link to={List.link} key={List.id} className='link'>
                            <ListItem disablePadding>
                                <ListItemButton>
                                    <ListItemIcon>
                                        <List.Icon  />
                                    </ListItemIcon>
                                    <ListItemText primary={List.title} />
                                </ListItemButton>
                            </ListItem>
                        </Link>
                    ))}
                </List>
            </Box>
            <List>
                <ListItem disablePadding>
                    <ListItemButton onClick={logout}>
                        <ListItemIcon>
                            <LogoutOutlinedIcon  />
                        </ListItemIcon>
                        <ListItemText primary={'logout'} className='txt-color' />
                    </ListItemButton>
                </ListItem>
            </List>
        </div>
    )
}

export default ListOfPagee