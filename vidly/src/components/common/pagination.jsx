import React from "react";
import PropTypes from 'prop-types';
import _ from "lodash";

// Input:
// Output: onClick: onHover:

const Pagination = (props) => {
  const { itemsCount, pageSize, currentPage, onPageChange} = props;

  const pageCount = Math.ceil(itemsCount/pageSize);
  if (pageCount === 0) return null;

  const pages = _.range(1, pageCount + 1);

  return (
    <nav aria-label='Page navigation example'>
      <ul className="pagination">
        {pages.map(page => (
          <li key={page} className={ page === currentPage ? 'page-item active' : 'page-item'}>
            <button onClick={() => onPageChange(page)} className='page-link'>{page}</button>
          </li>
        ))}
      </ul>
    </nav>
  )
}

Pagination.propTypes = {
  itemsCount: PropTypes.number.isRequired, 
  pageSize: PropTypes.number.isRequired, 
  currentPage: PropTypes.number.isRequired, 
  onPageChange: PropTypes.func.isRequired
}

// const Pagination = props => {
//   const { itemsCount, pageSize, onPageChange, currentPage } = props;
//   console.log(currentPage);

//   const pagesCount = Math.ceil(itemsCount / pageSize);
//   if (pagesCount === 1) return null;

//   const pages = _.range(1, pagesCount + 1);


//   return (
//     <nav aria-label="Page navigation example">
//       <ul className="pagination">
//         {pages.map(page => (
//           <li key={page} className={ page === currentPage ? 'page-item active' : 'page-item'}>
//             <button onClick={() => onPageChange(page)} className="page-link">
//               {page}
//             </button>
//           </li>
//         ))}
//       </ul>
//     </nav>
//   );
// };

export default Pagination;
