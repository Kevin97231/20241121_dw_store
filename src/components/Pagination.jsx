import { PaginationButton } from "./PaginationButton";

export const Pagination = ({ nbrButton, clickOnPaginationButton }) => {
  const numbers = Array.from({ length: nbrButton }, (_, index) => index + 1);

  //   nbrButon = 4
  // numbers [1,2,3,4]

  return (
    <>
      <div className="bg-white join">
        {numbers.map((number) => (
          <PaginationButton
            key={number}
            number={number}
            clickOnPaginationButton={clickOnPaginationButton}
          />
        ))}
      </div>
    </>
  );
};
