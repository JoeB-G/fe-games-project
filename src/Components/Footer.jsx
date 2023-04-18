const Footer = ({ array, currentPage, setCurrentPage, setLimit, limit }) => {
  return (
    <footer>
      <button
        onClick={() => {
          setCurrentPage((currentPage) => currentPage - 1);
        }}
        disabled={currentPage === 1}
      >
        Previous Page
      </button>
      <button
        onClick={() => {
          setLimit(9999999999);
          setCurrentPage(1);
        }}
      >
        View All
      </button>
      <button
        onClick={() => {
          setCurrentPage((currentPage) => currentPage + 1);
        }}
        disabled={limit * currentPage >= array[0].total_count}
      >
        Next Page
      </button>
    </footer>
  );
};

export default Footer;
