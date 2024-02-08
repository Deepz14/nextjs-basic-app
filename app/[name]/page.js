import FetchData from "../helpers/fetchData";
import { Suspense } from "react";
import UserDetailsCard from "../components/UserDetailsCard";
import MultiSearchAutoComplete from "../components/MultiSearchAutoComplete";

const fetchUserDetails = async(name) => {
    const response = await FetchData(`https://api.github.com/users/${name}`);
    return response;
}

export default async function UserProfile({ params: {name} }) {
    const userInfo = await fetchUserDetails(name);
    return (
        <section className="w-full mt-16 mb-3 overflow-auto grid grid-cols-12 gap-8 px-5">
            <MultiSearchAutoComplete />
            <Suspense fallback={<div>loading....</div>}>
                <UserDetailsCard userInfo={userInfo} />
            </Suspense>
        </section>
  );

}
