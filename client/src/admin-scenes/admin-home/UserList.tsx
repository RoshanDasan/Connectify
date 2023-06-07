import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import { getAllUsers } from '../../api/apiConnection/userConnection';
import { useSelector } from 'react-redux';

interface Column {
  id: 'name' | 'userName' | 'email' | 'gender' | 'isBlock';
  label: string;
  minWidth?: number;
  format?: (value: number) => string;
}

const columns: readonly Column[] = [
  { id: 'name', label: 'Name', minWidth: 170 },
  { id: 'userName', label: 'Username', minWidth: 100 },
  {
    id: 'email',
    label: 'Email',
    minWidth: 170,
    format: (value: number) => value.toLocaleString('en-US'),
  },
  {
    id: 'gender',
    label: 'Gender',
    minWidth: 170,
    format: (value: number) => value.toLocaleString('en-US'),
  },
  {
    id: 'isBlock',
    label: 'Active',
    minWidth: 170,
  },
];

export default function UserList() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [rows, setUsers] = React.useState<Data[]>([]);
  const token = useSelector((state: any) => state.admintoken);

  const getuserDetails = async () => {
    const users: any = await getAllUsers(token);
    setUsers(users);
  };

  React.useEffect(() => {
    getuserDetails();
  }, []);

  const handleChangePage = (event: any, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper sx={{ width: '100%', overflow: 'hidden' }}>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align="left"
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row: Data) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.userName}>
                    {columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <TableCell key={column.id} align="left">
                          {column.format && typeof value === 'number'
                            ? column.format(value)
                            : value}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}
