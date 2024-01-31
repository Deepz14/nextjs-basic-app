import Link from "next/link";
import Image from "next/image";
import Pagination from "./Pagination";

const UserList = ({ users, currentPage, itemsPerPage }) => {
    const totalresults = 100;

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
                            users.length > 0 ? users?.map((user) => {
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
                            : <tr>
                                <td colSpan="3" className="text-center">No records found 😐</td>
                            </tr>
                        }   
                    </tbody>
                </table>
            </div>
            {
                <div className="table-footer border border-gray-300 text-right text-sm py-2">
                    <Pagination users={users} totalresults={totalresults}
                        currentPage={currentPage} itemsPerPage={itemsPerPage} />
                </div>
            }
    </>
    )
}

export default UserList;