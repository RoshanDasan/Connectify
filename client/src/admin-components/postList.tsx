import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableFooter from '@mui/material/TableFooter';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import IconButton from '@mui/material/IconButton';
import FirstPageIcon from '@mui/icons-material/FirstPage';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import LastPageIcon from '@mui/icons-material/LastPage';
import { getPosts, deletePost } from '../api/apiConnection/postConnection';
import { useSelector } from 'react-redux';
import { Button } from '@mui/material';

interface TablePaginationActionsProps {
  count: number;
  page: number;
  rowsPerPage: number;
  onPageChange: (event: React.MouseEvent<HTMLButtonElement>, newPage: number) => void;
}

interface PostListProps {
  content: boolean;
}

function TablePaginationActions(props: TablePaginationActionsProps) {
  const theme = useTheme();
  const { count, page, rowsPerPage, onPageChange } = props;

  const handleFirstPageButtonClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    onPageChange(event, 0);
  };

  const handleBackButtonClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    onPageChange(event, page - 1);
  };

  const handleNextButtonClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    onPageChange(event, page + 1);
  };

  const handleLastPageButtonClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    onPageChange(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
  };

  return (
    <Box sx={{ flexShrink: 0, ml: 2.5 }}>
      <IconButton
        onClick={handleFirstPageButtonClick}
        disabled={page === 0}
        aria-label="first page"
      >
        {theme.direction === 'rtl' ? <LastPageIcon /> : <FirstPageIcon />}
      </IconButton>
      <IconButton
        onClick={handleBackButtonClick}
        disabled={page === 0}
        aria-label="previous page"
      >
        {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
      </IconButton>
      <IconButton
        onClick={handleNextButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="next page"
      >
        {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
      </IconButton>
      <IconButton
        onClick={handleLastPageButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="last page"
      >
        {theme.direction === 'rtl' ? <FirstPageIcon /> : <LastPageIcon />}
      </IconButton>
    </Box>
  );
}

const rowsPerPageOptions = [5, 10, 25, { label: 'All', value: -1 }];

export default function PostList({ content }: PostListProps) {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(rowsPerPageOptions[0]);
  const [posts, setPosts] = React.useState<any[]>([]);
  const token = useSelector((state: any) => state.token);

  console.log(content);

  const getAllPosts = async () => {
    const response = await getPosts(token);
    setPosts(response);
  };
  const getReportedPosts = async () => {
    const response = await getPosts(token);
    const filtered = response.filter((post: any) => post.reports.length > 0)
    setPosts(filtered);
  };

  React.useEffect(() => {
    if (content) {
      getAllPosts();
     console.log(posts);
     
    } else {
      // Handle other cases if needed
      getReportedPosts()
      console.log(posts);
      

    }
  }, [content]);


  const handleDeletePost = async (postId: any) => {
    await deletePost(postId, token)
  }

  // Calculate the total count of rows
  const totalCount = posts.length 

  // Update the page when rowsPerPage is changed
  React.useEffect(() => {
    setPage(0);
  }, [rowsPerPage]);

  // Slice the rows based on the current page and rowsPerPage
  const slicedRows = content ? posts.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage) : posts.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);

  // Calculate the number of empty rows
  const emptyRows = Math.max(0, rowsPerPage - slicedRows.length);

  const handleChangePage = (event: React.MouseEvent<HTMLButtonElement> | null, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setRowsPerPage(parseInt(event.target.value, 10));
  };

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 500 }} aria-label="custom pagination table">
        <TableBody>
          {slicedRows.map((row: any) => (
            <TableRow key={row._id}>
              <TableCell component="th" scope="row">
                {row.userName}
              </TableCell>
              <TableCell style={{ width: 160 }} align="right">
                {row.description}

              </TableCell>
              <TableCell style={{ width: 160 }} align="right">
                {row.reports.length}

              </TableCell>
              <TableCell style={{ width: 160 }} align="right">
                <Button onClick={() => handleDeletePost(row._id)}>
                  Remove
                </Button>

              </TableCell>
            </TableRow>
          ))}
          {emptyRows > 0 && (
            <TableRow style={{ height: 53 * emptyRows }}>
              <TableCell colSpan={3} />
            </TableRow>
          )}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TablePagination
              rowsPerPageOptions={rowsPerPageOptions}
              colSpan={3}
              count={totalCount}
              rowsPerPage={rowsPerPage}
              page={page}
              SelectProps={{
                inputProps: {
                  'aria-label': 'rows per page',
                },
                native: true,
              }}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
              ActionsComponent={TablePaginationActions}
            />
          </TableRow>
        </TableFooter>
      </Table>
    </TableContainer>
  );
}
