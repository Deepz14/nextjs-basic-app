import Image from "next/image";
import Link from "next/link";

const UserDetailsCard = ({userInfo}) => {
    const {name, avatar_url, followers, following, location, email, blog, public_repos} = userInfo;
    return (
        <div className="border border-gray-300 mt-8">
            <div className="header-section border border-l-0 border-t-0 border-r-0 border-b-300 py-2 flex">
                <Link href={'/'} className="rounded px-5 py-1 bg-gray-300 text-sm font-semibold mx-4 text-blue-600"> ◀ Back</Link>
            </div>
            <div className="mt-3 px-2">
                <div className="img-container">
                    <Image
                        className="rounded"
                        src={avatar_url}
                        alt="User-image"
                        width={150}
                        height={150}
                    />
                </div>
                <div className="pl-1 py-2">
                    <h2 className="font-bold text-lg">{name}</h2>
                    <p>{userInfo.bio}</p>
                    <div className="my-2">
                        <div className="flex items-center my-2">
                            <svg text="muted" aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true">
                                <path d="M2 5.5a3.5 3.5 0 1 1 5.898 2.549 5.508 5.508 0 0 1 3.034 4.084.75.75 0 1 1-1.482.235 4 4 0 0 0-7.9 0 .75.75 0 0 1-1.482-.236A5.507 5.507 0 0 1 3.102 8.05 3.493 3.493 0 0 1 2 5.5ZM11 4a3.001 3.001 0 0 1 2.22 5.018 5.01 5.01 0 0 1 2.56 3.012.749.749 0 0 1-.885.954.752.752 0 0 1-.549-.514 3.507 3.507 0 0 0-2.522-2.372.75.75 0 0 1-.574-.73v-.352a.75.75 0 0 1 .416-.672A1.5 1.5 0 0 0 11 5.5.75.75 0 0 1 11 4Zm-5.5-.5a2 2 0 1 0-.001 3.999A2 2 0 0 0 5.5 3.5Z"></path>
                            </svg>
                            <span className="ml-2 text-sm">{followers} followers</span>
                            <span className="ml-2 text-sm">{following} following</span>
                        </div>
                        {
                            location && (
                                <div className="flex items-center my-2">
                                    <svg viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true">
                                        <path d="m12.596 11.596-3.535 3.536a1.5 1.5 0 0 1-2.122 0l-3.535-3.536a6.5 6.5 0 1 1 9.192-9.193 6.5 6.5 0 0 1 0 9.193Zm-1.06-8.132v-.001a5 5 0 1 0-7.072 7.072L8 14.07l3.536-3.534a5 5 0 0 0 0-7.072ZM8 9a2 2 0 1 1-.001-3.999A2 2 0 0 1 8 9Z"></path>
                                    </svg>
                                    <span className="ml-2 text-sm">{location}</span>
                                </div>
                            )
                        }
                        {
                            email && (
                                <div className="flex items-center my-2">
                                    <svg viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true">
                                        <path d="M1.75 2h12.5c.966 0 1.75.784 1.75 1.75v8.5A1.75 1.75 0 0 1 14.25 14H1.75A1.75 1.75 0 0 1 0 12.25v-8.5C0 2.784.784 2 1.75 2ZM1.5 12.251c0 .138.112.25.25.25h12.5a.25.25 0 0 0 .25-.25V5.809L8.38 9.397a.75.75 0 0 1-.76 0L1.5 5.809v6.442Zm13-8.181v-.32a.25.25 0 0 0-.25-.25H1.75a.25.25 0 0 0-.25.25v.32L8 7.88Z"></path>
                                    </svg>
                                    <span className="ml-2 text-sm">{email}</span>
                                </div>
                            )
                        }
                        {
                            blog && (
                                <div className="flex items-center my-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none" role="img" aria-labelledby="a4ldiaurei3heu7tixpip9sne5ljgzdg"><title id="a4ldiaurei3heu7tixpip9sne5ljgzdg">LinkedIn</title>
                                        <g clipPath="url(#clip0_202_91845)">
                                        <path d="M14.5455 0H1.45455C0.650909 0 0 0.650909 0 1.45455V14.5455C0 15.3491 0.650909 16 1.45455 16H14.5455C15.3491 16 16 15.3491 16 14.5455V1.45455C16 0.650909 15.3491 0 14.5455 0ZM5.05746 13.0909H2.912V6.18764H5.05746V13.0909ZM3.96291 5.20073C3.27127 5.20073 2.712 4.64 2.712 3.94982C2.712 3.25964 3.272 2.69964 3.96291 2.69964C4.65236 2.69964 5.21309 3.26036 5.21309 3.94982C5.21309 4.64 4.65236 5.20073 3.96291 5.20073ZM13.0938 13.0909H10.9498V9.73382C10.9498 8.93309 10.9353 7.90327 9.83491 7.90327C8.71855 7.90327 8.54691 8.77527 8.54691 9.67564V13.0909H6.40291V6.18764H8.46109V7.13091H8.49018C8.77673 6.58836 9.47636 6.016 10.52 6.016C12.6924 6.016 13.0938 7.44582 13.0938 9.30473V13.0909V13.0909Z" fill="currentColor"></path>
                                        </g>
                                    </svg>
                                    <span className="ml-2 text-sm">{blog}</span>
                                </div>
                            )
                        }
                        {
                            public_repos && (
                                <div className="flex items-center my-2">
                                    <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true">
                                        <path d="M2 2.5A2.5 2.5 0 0 1 4.5 0h8.75a.75.75 0 0 1 .75.75v12.5a.75.75 0 0 1-.75.75h-2.5a.75.75 0 0 1 0-1.5h1.75v-2h-8a1 1 0 0 0-.714 1.7.75.75 0 1 1-1.072 1.05A2.495 2.495 0 0 1 2 11.5Zm10.5-1h-8a1 1 0 0 0-1 1v6.708A2.486 2.486 0 0 1 4.5 9h8ZM5 12.25a.25.25 0 0 1 .25-.25h3.5a.25.25 0 0 1 .25.25v3.25a.25.25 0 0 1-.4.2l-1.45-1.087a.249.249 0 0 0-.3 0L5.4 15.7a.25.25 0 0 1-.4-.2Z"></path>
                                    </svg>
                                    <span className="ml-2 text-sm">{public_repos} public repos</span>
                                </div>
                            )
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}


export default UserDetailsCard;