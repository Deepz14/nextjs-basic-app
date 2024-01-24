import Image from "next/image";
import FetchData from "../helpers/fetchData";
import { Suspense } from "react";
import UserDetailsCard from "../components/UserDetailsCard";

const fetchUserDetails = async(name) => {
    const response = await FetchData(`https://api.github.com/users/${name}`, {
        next: { revalidate: 60 }
    });
    return response;
}

export default async function UserProfile({ params: {name} }) {
    const userInfo = await fetchUserDetails(name);
    return (
        <section className="w-full md:w-[600px] md:m-auto mb-3">
            <Suspense fallback={<div>loading....</div>}>
                <UserDetailsCard userInfo={userInfo} />
            </Suspense>
        </section>
  );

}
