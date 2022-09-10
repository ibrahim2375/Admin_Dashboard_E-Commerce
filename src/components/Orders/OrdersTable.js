import { useState } from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import AutoFixHighOutlinedIcon from '@mui/icons-material/AutoFixHighOutlined';
import IconButton from '@mui/material/IconButton';
import CheckOutlinedIcon from '@mui/icons-material/CheckOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import DeliveryDiningOutlinedIcon from '@mui/icons-material/DeliveryDiningOutlined';
//router link 
import { Link } from 'react-router-dom'
//time TimeAgo
import TimeAgo from 'react-timeago'
import enStrings from 'react-timeago/lib/language-strings/en'
import buildFormatter from 'react-timeago/lib/formatters/buildFormatter'
const formatter = buildFormatter(enStrings)
const columns = [
    { id: 'product', label: 'Product', minWidth: 50 },
    { id: 'time', label: 'Time', minWidth: 100 },
    { id: 'actions', label: 'Actions', minWidth: 20 },
];

export default function OrdersTable({ orders, acceptOrder, deleteOrder, Delivered }) {
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };
    return (
        <Paper sx={{ width: '100%' }}>
            <TableContainer sx={{ maxHeight: 500 }}>
                <Table stickyHeader aria-label="sticky table">
                    <TableHead >
                        <TableRow>
                            {columns.map((column) => (
                                <TableCell
                                    key={column.id}
                                    style={{ top: 5, minWidth: column.minWidth }}
                                >
                                    {column.label}
                                </TableCell>
                            ))}
                        </TableRow>
                    </TableHead>
                    <TableBody>

                        {orders?.length >= 0 && orders.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                            .map((order) => {
                                return (
                                    <TableRow hover role="checkbox" key={order?._id}>
                                        <TableCell>
                                            {order?.name}
                                        </TableCell>
                                        <TableCell>
                                            <TimeAgo date={`${order?.createdAt}`} formatter={formatter} />
                                        </TableCell>
                                        <TableCell>
                                            {/* see order details */}
                                            <Link to={`/order/${order?._id}`} className='link'>
                                            <IconButton aria-label="Example">
                                            <AutoFixHighOutlinedIcon />
                                            </IconButton>
                                            </Link>
                                            {/* accept order */}
                                            <IconButton aria-label="Example" onClick={() => acceptOrder(order?._id)}>
                                                <CheckOutlinedIcon sx={{ color: order?.accept ? 'green' : 'gray' }} />
                                            </IconButton>
                                            {/* delete order */}
                                            <IconButton aria-label="Example" onClick={() => Delivered(order?._id)}>
                                                <DeliveryDiningOutlinedIcon sx={{ color: order?.arrived ? 'orange' : 'gray' }} />
                                            </IconButton>
                                            <IconButton aria-label="Example" onClick={() => deleteOrder(order?._id)}>
                                                <DeleteOutlineOutlinedIcon />
                                            </IconButton>
                                        </TableCell>
                                    </TableRow>
                                )
                            })
                        }
                    </TableBody>
                </Table>
            </TableContainer>
            <TablePagination
                rowsPerPageOptions={[3, 10, 30]}
                component="div"
                count={orders?.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
            />
        </Paper >
    );
}
