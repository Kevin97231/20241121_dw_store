export const PaginationButton = ({ number, clickOnPaginationButton }) => {
  return (
    <button
      className="join-item btn btn-lg"
      onClick={() => clickOnPaginationButton(number)}
    >
      {number}
    </button>
  );
};
