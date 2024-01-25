'use client'

const Pagination = ({ users, currentPage, currentItemsPerPage, handlerPageSelect, handlerItemsPerPage }) => {
    return (
        <div>
              <span className="text-sm font-light mr-1">Items per page: 
                <select onChange={(e) => handlerItemsPerPage(e.target.value)} className="border border-gray-300 px-2 py-1 rounded ml-1 focus:outline-none">
                    <option value={'5'}>5</option>
                    <option value={'10'}>10</option>
                    <option value={'25'}>25</option>
                    <option value={'50'}>50</option>
                </select>
            </span>
            <span className="ml-1">
                {(currentPage * currentItemsPerPage) - currentItemsPerPage + 1}  {' - '} 
                { currentPage * currentItemsPerPage > users.length ? users.length : currentPage * currentItemsPerPage } 
                <span className="mx-1">of</span>{users.length}
            </span>

            <button title="Previous page" onClick={() => handlerPageSelect(currentPage - 1)} 
                className={
                    `${currentPage === 1 && 'opacity-50 cursor-not-allowed'}
                    text-blue-600 px-3
                    `
                } >◀</button>
           
            <button title="Next page" onClick={() => handlerPageSelect(currentPage + 1)} 
                className={
                    `${currentPage === Math.ceil(users.length / currentItemsPerPage) && 'opacity-50 cursor-not-allowed'}
                    text-blue-600 px-3`
                }>▶</button>
        </div>
    )
}

export default Pagination;