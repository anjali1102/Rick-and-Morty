import ReactPaginate from "react-paginate";

interface PaginationProps {
  currentPage: number;
  setCurrentPage: (page: number) => void;
  totalPages: number | null;
}

function Pagination({
  currentPage,
  setCurrentPage,
  totalPages,
}: PaginationProps) {
  return (
    <div>
      <style>
        {`
          @media (max-width: 768px) {
            .pagination {
              font-size: 8px;
            }
            .next, .prev {
              display: none;
            }
          }
          @media (min-width: 769px) {
            .pagination {
              font-size: 8px;
            }
          }
        `}
      </style>
      <ReactPaginate
        className="flex justify-center gap-2 my-4 mt-8"
        pageCount={totalPages ?? 0}
        forcePage={currentPage - 1}
        onPageChange={(data) => setCurrentPage(data.selected + 1)}
        previousLabel="Prev"
        nextLabel="Next"
        containerClassName="pagination"
        pageClassName="inline-block"
        pageLinkClassName="btn btn-square btn-sm text-gray-700 bg-base-200 hover:bg-gray-300"
        activeClassName="!bg-red-500 !text-white !shadow-none"
        activeLinkClassName="!bg-red-500 !text-white"
        previousClassName="btn btn-primary btn-sm mr-1 bg-red-400 border-none text-white"
        nextClassName="btn btn-primary btn-sm ml-1 bg-red-400 border-none text-white"
        disabledClassName="opacity-25 pointer-events-none cursor-not-allowed"
      />
    </div>
  );
}

export default Pagination;
