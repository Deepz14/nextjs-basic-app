const UserCardLinks = ({info, children}) => {
    return (
        <div className="flex items-center my-2">
            {children}
            {
                info?.map((item) => (
                    <span key={item?.key} className="ml-2 text-sm">{item[item.key]} {item.key}</span>
                ))
            }
        </div>
    )
}

export default UserCardLinks;