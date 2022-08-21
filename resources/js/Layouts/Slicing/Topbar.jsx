import { Link } from "@inertiajs/inertia-react";
import { useState } from "react";

export default function Topbar({ name }) {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const toggleDropdown = (e) => {
        e.preventDefault();
        setDropdownOpen(!dropdownOpen);
    };
    return (
        <>
            <div className="flex items-center justify-between">
                <input
                    type="text"
                    className="top-search bg-[url('/assets/icons/ic_search.svg')]"
                    placeholder="Search movie, cast, genre"
                />
                <div className="flex items-center gap-4">
                    <span className="text-sm font-medium text-black">
                        Welcome, {name}
                    </span>
                    {/* <!-- user avatar --> */}
                    <div className="collapsible-dropdown relative flex flex-col gap-2">
                        <div
                            onClick={toggleDropdown}
                            className="dropdown-button w-[60px] cursor-pointer rounded-full p-[5px] outline outline-2 outline-gray-2"
                            data-target="#dropdown-button"
                        >
                            <img
                                src="/assets/images/avatar.png"
                                className="w-full rounded-full object-cover"
                                alt=""
                            />
                        </div>
                        <div
                            className=
                            {`absolute right-0 top-[80px] z-[999] min-w-[180px] flex-col gap-1 overflow-hidden rounded-2xl bg-white text-left font-medium text-black 
                                ${dropdownOpen ? "flex" : "hidden"}`}
                        >
                            <Link
                                href={route("user.dashboard.index")}
                                className="p-4 text-left transition-all hover:bg-sky-100"
                            >
                                Dashboard
                            </Link>
                            <a href="#!" className="p-4 transition-all hover:bg-sky-100">
                                Settings
                            </a>
                            <Link
                                href={route("logout")}
                                method="post"
                                as="button"
                                className="p-4 text-left transition-all hover:bg-sky-100"
                            >
                                Sign Out
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
