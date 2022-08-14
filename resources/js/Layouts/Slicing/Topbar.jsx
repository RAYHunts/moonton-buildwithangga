import { Link } from "@inertiajs/inertia-react";
import { useState } from "react";

export default function Topbar({name}) {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const toggleDropdown = (e) => {
        e.preventDefault();
        setDropdownOpen(!dropdownOpen);
    }
    return (
        <>
            <div className="flex justify-between items-center">
                    <input type="text" className="top-search bg-[url('/assets/icons/ic_search.svg')]" placeholder="Search movie, cast, genre" />
                    <div className="flex items-center gap-4">
                        <span className="text-black text-sm font-medium">Welcome, {name}</span>
                        {/* <!-- user avatar --> */}
                        <div className="collapsible-dropdown flex flex-col gap-2 relative" >
                            <div
                                onClick={toggleDropdown}
                                className="outline outline-2 outline-gray-2 p-[5px] rounded-full w-[60px] dropdown-button cursor-pointer"
                                data-target="#dropdown-button">
                                <img src="/assets/images/avatar.png" className="rounded-full object-cover w-full" alt="" />
                            </div>
                            <div className={`bg-white rounded-2xl text-black font-medium flex-col gap-1 absolute z-[999] right-0 top-[80px] min-w-[180px] overflow-hidden ${dropdownOpen ? 'flex' : 'hidden'}`}>
                                <a href="#!" className="transition-all hover:bg-sky-100 p-4">Dashboard</a>
                                <a href="#!" className="transition-all hover:bg-sky-100 p-4">Settings</a>
                                <Link href={route('logout')} method="post" className="transition-all hover:bg-sky-100 p-4">Sign Out</Link>
                            </div>
                        </div>
                    </div>
                </div>
        </>
    );
}