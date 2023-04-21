import { AppBar, Toolbar, Button } from "@mui/material";

function Footer({ array, currentPage, setCurrentPage, setLimit, limit }) {
  return (
    <AppBar position="static" color="primary">
      <Toolbar style={{ justifyContent: "center" }}>
        <Button
          variant="contained"
          color="primary"
          onClick={() => setCurrentPage(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Previous Page
        </Button>
        <Button
          variant="contained"
          color="primary"
          onClick={() => {
            setLimit(9999999999);
            setCurrentPage(1);
          }}
        >
          View All
        </Button>
        <Button
          variant="contained"
          color="primary"
          onClick={() => setCurrentPage(currentPage + 1)}
          disabled={limit * currentPage >= array[0].total_count}
        >
          Next Page
        </Button>
      </Toolbar>
    </AppBar>
  );
}

export default Footer;
