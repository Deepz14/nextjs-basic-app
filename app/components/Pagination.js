'use client'

const Pagination = ({ users, currentPage, handlerPageSelect }) => {
    return (
        <>
            <button onClick={() => handlerPageSelect(currentPage - 1)} className="text-blue-500 px-3 ">◀</button>
            {
                Array.from({ length: Math.ceil(users.length / 5) }, (_, i) => i + 1).map(page => (
                    <button onClick={() => handlerPageSelect(page)}  key={page} className={`px-3 ${currentPage === page ? 'text-blue-500' : ''}`} 
                    >{page}</button>
                ))
            }
            <button onClick={() => handlerPageSelect(currentPage + 1)} className="text-blue-500 px-3">▶</button>
        </>
    )
}

export default Pagination;