'use client'

import { useRouter } from "next/navigation";

const Pagination = ({ totalresults, currentPage, itemsPerPage }) => {

    const router = useRouter();
    const itemsPerList = [5, 10, 25, 50];

    return (
        <div>
              <span className="text-sm font-light mr-1">Items per page: 
                <select value={itemsPerPage} onChange={(e) => router.replace(`/?per_page=${e.target.value}`)} className="border border-gray-300 px-2 py-1 rounded ml-1 focus:outline-none">
                    {
                        itemsPerList.map((item) => {
                            return (
                                <option key={item} value={item}>{item}</option>
                            )
                        })
                    }
                </select>
            </span>
            <span className="ml-1">
                {(currentPage * itemsPerPage) - itemsPerPage + 1}  {' - '} 
                { currentPage * itemsPerPage > totalresults ? totalresults : currentPage * itemsPerPage } 
                <span className="mx-1">of</span>{totalresults}
            </span>

            <button title="Previous page" onClick={() => router.replace(`/?since=${parseInt(currentPage) - 1}&per_page=${itemsPerPage}`)}
                disabled={currentPage <= 1}
                className={
                    `${currentPage <= 1 && 'opacity-50 cursor-not-allowed'}
                    text-blue-600 px-3
                    `
                } >◀</button>
           
            <button title="Next page"  onClick={() => router.replace(`/?since=${parseInt(currentPage) + 1}&per_page=${itemsPerPage}`)}
                disabled={currentPage >= Math.ceil(totalresults / itemsPerPage)} 
                className={
                    `${currentPage >= Math.ceil(totalresults / itemsPerPage) && 'opacity-50 cursor-not-allowed'}
                    text-blue-600 px-3`
                }>▶</button>
        </div>
    )
}

export default Pagination;