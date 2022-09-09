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
//router link 
import { Link } from 'react-router-dom'
const columns = [
    { id: 'name', label: 'Name', minWidth: 50 },
    { id: 'email', label: 'Email', minWidth: 100 },
    { id: 'actions', label: 'Actions', minWidth: 20 },
];


export default function UsersTable({ users }) {
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
            <TableContainer sx={{ maxHeight: 600 }}>
                <Table stickyHeader aria-label="sticky table">
                    <TableHead >
                        <TableRow>
                            {columns.map((column) => (
                                <TableCell
                                    key={column.id}
                                    style={{ top: 10, minWidth: column.minWidth }}
                                >
                                    {column.label}
                                </TableCell>
                            ))}
                        </TableRow>
                    </TableHead>
                    <TableBody>

                        {users?.length >= 0 && users.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage )
                            .map((user) => {
                                return (
                                    <TableRow hover role="checkbox" key={user?._id}>
                                        <TableCell>
                                            {user?.name}
                                        </TableCell>
                                        <TableCell>
                                            {user?.email}
                                        </TableCell>
                                        <TableCell>
                                            <Link to={`/update-user/${user?._id}`}>
                                                <IconButton aria-label="Example">
                                                    <AutoFixHighOutlinedIcon />
                                                </IconButton>
                                            </Link>
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
                count={users?.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
            />
        </Paper >
    );
}
