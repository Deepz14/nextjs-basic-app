'use client'

import Link from "next/link";
import Image from "next/image";
import Pagination from "./Pagination";
import { useState, useEffect } from "react";

const UserList = ({ users }) => {
    const [totalresults, setTotalResults] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(5);

    useEffect(() => {
        setTotalResults(users);
    }, [])

    const handlerPageSelect = (page) => {
        if(page >= 1 && page <= Math.ceil(users.length / itemsPerPage) && page !== currentPage) {
            setCurrentPage(page);
        }
    }

    const handlerItemsPerPage = (page) => {
        setItemsPerPage(page);
        setCurrentPage(1);
    }

    return  (
        <>
            <div className="table-container">
                <table className="mt-3 w-full table-auto md:table-fixed border border-t-0 border-b-0 border-gray-300">
                    <thead className="bg-slate-200">
                        <tr className="">
                            <th>Username</th>
                            <th>Firstname</th>
                            <th>Lastname</th>
                        </tr>
                    </thead>
                    <tbody className="w-full">
                        {
                            totalresults?.length > 0 && (
                                totalresults?.slice((currentPage * itemsPerPage) - itemsPerPage, currentPage * itemsPerPage)?.map((user) => {
                                    return (
                                        <tr key={user.id}>
                                            <td className="flex items-center">
                                                <Link className="avatar-container" href={`/${user?.login}`}>
                                                    <Image className="avatar" src={user.avatar_url} width={40} height={40} alt="user-img" />
                                                </Link>
                                                <span className="ml-2 font-semibold">
                                                <Link href={`/${user?.login}`}>{user.name}</Link>
                                                </span> 
                                            </td>
                                            <td>{ user?.name ? 
                                                    <span className="font-semibold">
                                                    <Link href={`/${user?.login}`}>{user?.name?.split(' ')[0] }</Link>
                                                    </span>
                                                : '-'}
                                            </td>
                                            <td>{ user?.name ? 
                                                    <span className="font-semibold">
                                                        <Link href={`/${user?.login}`}>{user?.name?.split(' ')[1] }</Link>
                                                    </span>
                                                : '-'}
                                            </td>
                                        </tr>
                                    )
                                })
                            )
                        }   
                    </tbody>
                </table>
            </div>
            {
                users?.length > 0 && (
                    <div className="table-footer border border-gray-300 text-right text-sm py-2">
                        <Pagination users={users} currentPage={currentPage} currentItemsPerPage={itemsPerPage}
                            handlerPageSelect={handlerPageSelect} handlerItemsPerPage={handlerItemsPerPage} />
                    </div>
                )
            }
    </>
    )
}

export default UserList;