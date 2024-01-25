import FetchData from "../helpers/fetchData";
import { Suspense } from "react";
import UserDetailsCard from "../components/UserDetailsCard";

const fetchUserDetails = async(name) => {
    const response = await FetchData(`https://api.github.com/users/${name}`);
    return response;
}

export default async function UserProfile({ params: {name} }) {
    const userInfo = await fetchUserDetails(name);
    return (
        <section className="w-[400px] md:w-[450px] md:m-auto mb-3 overflow-auto">
            <Suspense fallback={<div>loading....</div>}>
                <UserDetailsCard userInfo={userInfo} />
            </Suspense>
        </section>
  );

}
