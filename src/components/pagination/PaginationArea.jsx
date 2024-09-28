import React from 'react';

const PaginationArea = ({ pagenumber, paginate, currentpage, next, prev }) => {
  const startPage = Math.max(currentpage - 3, 0);
  const endPage = Math.min(currentpage + 2, pagenumber.length - 1);

  return (
    <nav className="mt-[50px]" aria-label="Page navigation example">
      <ul className="flex justify-center space-x-1 text-sm cursor-pointer flex-nowrap overflow-hidden">
        {pagenumber.length > 0 && (
          <li onClick={prev} className="cursor-pointer">
            <a className="flex items-center justify-center px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-md">
              Prev
            </a>
          </li>
        )}
        <div className="hidden lg:flex">
          {pagenumber.map((item, i) => (
            <li
              key={i}
              onClick={() => paginate(item)}
              className="cursor-pointer"
            >
              <a
                className={
                  currentpage === item + 1
                    ? "flex items-center justify-center px-3 py-2 leading-tight text-white bg-[#262626] border border-gray-300"
                    : "flex items-center justify-center px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300"
                }
              >
                {item + 1}
              </a>
            </li>
          ))}
        </div>
        <div className="flex lg:hidden">
          {pagenumber
            .slice(startPage, endPage + 1)
            .map((item, i) => (
              <li
                key={i}
                onClick={() => paginate(item)}
                className="cursor-pointer"
              >
                <a
                  className={
                    currentpage === item + 1
                      ? "flex items-center justify-center px-3 py-2 leading-tight text-white bg-[#262626] border border-gray-300"
                      : "flex items-center justify-center px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300"
                  }
                >
                  {item + 1}
                </a>
              </li>
            ))}
        </div>
        {pagenumber.length > 0 && (
          <li onClick={next} className="cursor-pointer">
            <a className="flex items-center justify-center px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-md">
              Next
            </a>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default PaginationArea;
