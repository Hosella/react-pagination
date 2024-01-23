import cn from "classnames";
import './style.scss'

export const Pagination = ({ total, perPage, currentPage, onPageChange }) => {
  const sumOfButtons = Math.ceil(total / perPage);

  return(
    <div className="Pagination">
      <span className="Pagination__text">{`Page: ${currentPage}`}</span>
      <span className="Pagination__text">
        {`Items: ${perPage * currentPage - perPage + 1} - ${perPage * currentPage > total ? total : perPage * currentPage}`}
      </span>

      <div>
        <button onClick={() => onPageChange(1)}>«</button>

        <button
          onClick={() => currentPage > 1 ? onPageChange(currentPage - 1) : onPageChange(currentPage)}
        >
          {`<`}
        </button>

        {Array(sumOfButtons).fill(null).map((_, i) => {
          return (
            <button onClick={() => onPageChange(i + 1)} className={cn({currentPage: i + 1 === currentPage})}>{i + 1}</button>
          );
        })}

        <button
          onClick={() => currentPage < sumOfButtons ? onPageChange(currentPage + 1) : onPageChange(currentPage)}
        >
          {`>`}
        </button>

        <button onClick={() => onPageChange(sumOfButtons)}>»</button>
        </div>
    </div>
  );
}