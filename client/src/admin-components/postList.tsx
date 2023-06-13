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
import TableHead from '@mui/material/TableHead'; // Added TableHead import
import Paper from '@mui/material/Paper';
import IconButton from '@mui/material/IconButton';
import FirstPageIcon from '@mui/icons-material/FirstPage';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import LastPageIcon from '@mui/icons-material/LastPage';
import { getPosts, deletePost } from '../api/apiConnection/postConnection';
import { useSelector } from 'react-redux';
import { Avatar, Button } from '@mui/material';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import { TransitionProps } from '@mui/material/transitions';
import { ToastContainer, toast } from 'react-toastify';
import moment from 'moment'

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


const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>,
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function PostList({ content }: PostListProps) {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(rowsPerPageOptions[0]);
  const [posts, setPosts] = React.useState<any[]>([]);
  const token = useSelector((state: any) => state.token);
  const [currentPost, setCurrentPost]: any = React.useState('')
  const [open, setOpen] = React.useState(false);
  const [click, setClick] = React.useState(false)

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
  }, [click, content]);


  const handleDeletePost = async () => {
    await deletePost(currentPost, token)
    setClick(() => !click)
    toast.success('Post Deleted')
    handleClose()
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

  const handleClickOpen = (postId: string) => {
    setOpen(true);
    setCurrentPost(postId)
    
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 500 }} aria-label="custom pagination table">
        <TableHead> {/* Added TableHead component */}
          <TableRow>
            <TableCell>Avatar</TableCell>
            <TableCell>User Name</TableCell>
            <TableCell align="right">Description</TableCell>
            <TableCell align="right">Likes</TableCell>
            <TableCell align="right">Comments</TableCell>
            <TableCell align="right">Posted</TableCell>
            <TableCell align="right">Reports</TableCell>
            <TableCell align="right">Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {slicedRows.map((row: any) => (
            <TableRow key={row._id}>
              <TableCell component="th" scope="row">
                {row.image ? (
                 <div>
                 <Avatar
                   sx={{ width: '3rem', height: '3rem' }}
                   alt={row.userName}
                   src={row.image}
                 />
               </div>
             ) : (
               <Avatar 
               sx={{ width: '3rem', height: '3rem' }}
               alt={row.userName} />
                )}
              </TableCell>
              <TableCell component="th" scope="row">
                {row.userName}
              </TableCell>
              <TableCell style={{ width: 160 }} align="right">
                {row.description}
              </TableCell>
              <TableCell style={{ width: 160 }} align="right">
                {row.likes.length}
              </TableCell>
              <TableCell style={{ width: 160 }} align="right">
                {row.comments.length}
              </TableCell>
              <TableCell style={{ width: 160 }} align="right">
                {moment(row.createdAt).fromNow()}
              </TableCell>
              <TableCell style={{ width: 160 }} align="right">
                {row.reports.length}
              </TableCell>
              <TableCell style={{ width: 160 }} align="right">
                <Button variant="outlined" onClick={() => handleClickOpen(row._id)} color='error'>
                  Remove
                </Button>
              </TableCell>
            </TableRow>
          ))}
          {emptyRows > 0 && (
            <TableRow style={{ height: 53 * emptyRows }}>
              <TableCell colSpan={7} />
            </TableRow>
          )}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TablePagination
              rowsPerPageOptions={rowsPerPageOptions}
              colSpan={7}
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
      <div>
       
       <Dialog
         open={open}
         TransitionComponent={Transition}
         keepMounted
         onClose={handleClose}
         aria-describedby="alert-dialog-slide-description"
       >
         <DialogTitle>{`Are you sure do you want to delete this post ?`}</DialogTitle>
         <DialogContent>
           <DialogContentText id="alert-dialog-slide-description">
             
           </DialogContentText>
         </DialogContent>
         <DialogActions>
           <Button color='info' onClick={handleClose}>Cancel</Button>
           <Button color='info' onClick={handleDeletePost}>Ok</Button>
         </DialogActions>
       </Dialog>
     </div>
     <ToastContainer position="bottom-left" />
    </TableContainer>
  );
}
