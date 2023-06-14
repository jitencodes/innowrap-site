import React from 'react';
import { usePagination, DOTS } from './usePagination';
import { BiChevronLeft, BiChevronRight } from 'react-icons/bi';
const Pagination = props => {
    const {
        // eslint-disable-next-line react/prop-types
        onPageChange,
        // eslint-disable-next-line react/prop-types
        totalCount,
        // eslint-disable-next-line react/prop-types
        siblingCount = 1,
        // eslint-disable-next-line react/prop-types
        currentPage,
        // eslint-disable-next-line react/prop-types
        pageSize,
    } = props;

    const paginationRange = usePagination({
        currentPage,
        totalCount,
        siblingCount,
        pageSize
    });

    if (currentPage === 0 || paginationRange.length < 2) {
        return null;
    }

    const onNext = () => {
        if(!(currentPage===lastPage)){
            onPageChange(currentPage + 1);
        }
    };

    const onPrevious = () => {
        if(!(currentPage===1)){
        onPageChange(currentPage - 1);
        }
    };

    let lastPage = paginationRange[paginationRange.length - 1];
    return (
        <ul
            className={`flex gap-2 md:gap-4`}
        >
            <li
                className={`${currentPage===1?'bg-zinc-200':'bg-white'} bg-white flex cursor-pointer rounded-[4px] tablet:text-xs h-6 w-6 md:h-11 md:w-11 items-center justify-center`}
                onClick={onPrevious}
            >
                <span><BiChevronLeft/></span>
            </li>
            {paginationRange.map(pageNumber => {
                if (pageNumber === DOTS) {
                    // eslint-disable-next-line react/jsx-key
                    return <li className="bg-white flex cursor-pointer rounded-[4px] tablet:text-xs h-6 w-6 md:h-11 md:w-11 items-center justify-center">&#8230;</li>;
                }

                return (
                    // eslint-disable-next-line react/jsx-key
                    <li key={pageNumber}
                        className={`${currentPage===pageNumber? 'shadow-bs-sm border':''} bg-white flex cursor-pointer rounded-[4px] tablet:text-xs h-6 w-6 md:h-11 md:w-11 items-center justify-center`}
                        onClick={() => onPageChange(pageNumber)}
                    >
                        {pageNumber}
                    </li>
                );
            })}
            <li
                className={`${currentPage===lastPage?'bg-zinc-200':'bg-white'} flex cursor-pointer rounded-[4px] tablet:text-xs h-6 w-6 md:h-11 md:w-11 items-center justify-center`}
                onClick={onNext}
            >
                <span><BiChevronRight/></span>
            </li>
        </ul>
    );
};

export default Pagination;
