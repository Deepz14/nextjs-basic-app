import FetchData from "./helpers/fetchData";
import { Suspense } from "react";
import UserList from "./components/UserList";

const fetchUsers = async(page, perPage) => {
    const options = {
        method: 'GET',
        headers: { 'X-GitHub-Api-Version': '2022-11-28',
        'Authorization': process.env.AUTH_TOKEN
    }
    }
    const userURI = [];
    const data = await FetchData(`https://api.github.com/users?since=${page}&per_page=${perPage}`, options);

    // Pushing the user url into userURI
    if(data?.length > 0) {
        data.forEach((user) => userURI.push(user?.url))
    }

    // fetching each user information
    const users = Promise.all(userURI.map(async(url) => {
        const resp = await FetchData(url);
        return resp;
    }))
    .then((data) => data)
    .catch((err) =>console.log(err))
    return users;   
}


export default async function Home({searchParams}) {

   const {since, per_page} = searchParams;
   const currentPage = since == undefined ? 1 : parseInt(since);
   const perPage = per_page == undefined ? 5 : parseInt(per_page);

   const Users = await fetchUsers((currentPage * perPage) - perPage, perPage);


    return (
        <section className="my-3 mx-8 pb-5">
            <div className="header-section p-1">
                <h3 className="font-bold text-lg">User List</h3>
            </div>
            <Suspense fallback={<div>loading......</div>}>
                <UserList users={Users} currentPage={currentPage} itemsPerPage={perPage} />
            </Suspense>
        </section>
  );
}
