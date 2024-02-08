'use client'

import { useEffect, useRef, useState } from "react"
import Pills from "./Pills";

export default function MultiSearchAutoComplete() {
    const [searchUser, setSearchUser] = useState('');
    const [suggestionList, setSuggestionList] = useState([]);
    const [selectedUser, setSelectedUser] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(-1);
    const searchRef = useRef(null);
    const searchSuggestions = useRef(null);
    useEffect(() => {
        searchRef.current.focus();
        searchSuggestions.current.style.display = 'none';
    }, [])

    const fetchUsers = async() => {
        const response = await fetch(`https://dummyjson.com/users/search?q=${searchUser}`);
        const data = await response.json();
        if(data?.users?.length > 0) {
            const uniqueUsers = new Set();
            selectedUser.forEach((user) => uniqueUsers.add(user.id))
            data.users = data.users.filter((user) => !uniqueUsers.has(user.id));
            setSuggestionList(data.users);
        }else{
            setSuggestionList([]);
        }
    }

    useEffect(() => {
        const searchInput = searchRef.current;
        const suggestionsList = searchSuggestions.current;
        
        if(searchInput.value.length < 3) {
            suggestionsList.style.display = 'none';
            return;
        }
        // Debounce search
        const debounceSearchUser = setTimeout(() => {
            fetchUsers();
            searchSuggestions.current.style.display = 'block';
        }, 600);

        return () => {
            suggestionsList.style.display = 'none';
            clearTimeout(debounceSearchUser);
        }
    }, [searchUser])

    const handleSelectedUser = (user) => {   
        setSelectedUser([...selectedUser, user]);
        setSearchUser('');
        searchRef.current.focus();
    }

    const onRemoveSelectedUser = (user) => {
        const newSelectedUser = selectedUser.filter((selected) => selected.id !== user.id);
        setSelectedUser([...newSelectedUser]);
        searchRef.current.focus();
    }

    const onKeyUpChange = (e) => {
        if(e.key === "ArrowUp" && currentIndex >= 0){
            setCurrentIndex(currentIndex - 1);
        }
        else if(e.key === "ArrowDown"){
            currentIndex < suggestionList.length ?  setCurrentIndex(currentIndex + 1) :
            setCurrentIndex(0);
        }else if(e.key === "Enter" && currentIndex < suggestionList.length){
            handleSelectedUser(suggestionList[currentIndex]);
            setCurrentIndex(-1);
            searchSuggestions.current.style.display = 'none';
            searchRef.current.focus();
        }else if(e.key === "Backspace"){
            setCurrentIndex(-1);
            if(searchUser.length === 0 &&selectedUser?.length > 0) {
                onRemoveSelectedUser(selectedUser[selectedUser.length - 1]);
            }
        }
    }

    return (
        <div className="search-container col-span-6">
            <div className="search-input-wrapper py-2 px-3 border border-gray-300 rounded-lg w-full">
                {/* Pills container */}
                {
                    selectedUser.length > 0 && <Pills users={selectedUser} emitterRemoveUser={onRemoveSelectedUser} />
                }
                <input onChange={(e) => setSearchUser(e.target.value)} onKeyDown={(event) => onKeyUpChange(event)} ref={searchRef} id="search" name="search" value={searchUser} className="focus:outline-none my-2 px-2 py-1 w-full" 
                    autoComplete="off" type="text" placeholder="Search user..." />
            </div>
            <ul ref={searchSuggestions} className="mt-2 search-suggestions-list py-1 rounded-lg hidden">
                {
                    suggestionList.length > 0 ? 
                        suggestionList.map((user, index) => {
                            return (
                                <li onClick={() => handleSelectedUser(user)} key={user?.id} 
                                    className={`my-1 p-3 hover:bg-gray-100 cursor-pointer
                                    ${currentIndex === index && 'bg-gray-100'}`}>
                                    <h4 className="text-sm">{user?.firstName} {' '} {user?.lastName}</h4></li>
                            )
                        }
                    ):
                    (
                        <li className="my-1 p-3 hover:bg-gray-100 pointer-events-non"><h4 className="text-sm">No results found</h4></li>
                    )
                }
            </ul> 
            
        </div>
    )
}