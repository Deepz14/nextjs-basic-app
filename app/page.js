import Image from "next/image";
import FetchData from "./helpers/fetchData";
import { Suspense } from "react";
import UserProfile from "./[name]/page";
import UserList from "./components/UserList";

const fetchUsers = async() => {
    const options = {
        method: 'GET',
        headers: { 'X-GitHub-Api-Version': '2022-11-28'}
    }
    const userURI = [];
    const data = await FetchData('https://api.github.com/users', options);

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


export default async function Home() {

   const Users = await fetchUsers();
   const currentPage = 1;

    return (
        <section className="my-3 mx-8">
            <div className="header-section p-1">
                <h3 className="font-bold text-lg">User List</h3>
            </div>
            <Suspense fallback={<div>loading......</div>}>
                <UserList users={Users} />
            </Suspense>
        </section>
  );
}
