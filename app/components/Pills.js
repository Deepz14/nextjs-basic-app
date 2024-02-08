'use client';

export default function Pills({users, emitterRemoveUser}) {
    return (
        <div className="my-1 flex flex-wrap gap-2 w-full">
            {
                users?.map((user) => (
                    <span onClick={() => emitterRemoveUser(user)} key={user?.id} 
                        className="border border-gray-300 cursor-pointer p-2 rounded-lg text-sm hover:bg-slate-100">{user?.firstName} {' '} {user?.lastName} <span className="bg-gray-600 text-white rounded-xl px-1 m-1 text-sm">&times;</span></span>
                ))
            }
        </div>
    )
}