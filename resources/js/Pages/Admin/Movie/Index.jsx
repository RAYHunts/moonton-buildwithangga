import Button from "@/Components/Button";
import FlashMessage from "@/Components/FlashMessage";
import Input from "@/Components/Input";
import Authenticated from "@/Layouts/Slicing/Authenticated";
import { Inertia } from "@inertiajs/inertia";
import { Head, Link, useForm } from "@inertiajs/inertia-react";
import { useEffect, useState } from "react";

export default function Index({ auth, movies, flashMessage }) {
    const { delete: destroy, put } = useForm();
    // const [query, search] = useState("");
    // useEffect(() => {
    //     Inertia.replace(route('admin.movies.index'), {
    //         only: ["movies"],
    //         data: {
    //             filter : query
    //         }
    //     })
    // },[query, movies] );

    // const handleSearch = (e) => {
    //     e.preventDefault();
    //     search(e.target.value);
    // }
        
    function pageLabel(page) {
        return { __html: page };
    }
    return (
        <>
            <Head title="Admin | Movies" />
            <Authenticated auth={auth}>
                <div className="container mx-auto px-4 sm:px-8 w-full">
                    <div>
                        {flashMessage && (
                            <FlashMessage type={flashMessage.type} message={flashMessage.message} >
                                {flashMessage.more && (
                                    <div className="px-4 py-2 ml-auto text-center cursor-pointer" onClick={() => {put(flashMessage.more.url)}}>
                                        <span className="font-semibold capitalize text-blue-500 dark:text-blue-400">
                                            {flashMessage.more.title}
                                        </span>
                                        <p
                                            className="text-gray-600 dark:text-gray-200"
                                        >
                                            <i className={flashMessage.more.icon}></i>
                                        </p>
                                    </div>
                                )}
                            </FlashMessage>
                        )}


                        <div className="flex flex-row mb-1 sm:mb-0 justify-between w-full">
                            <div className="flex gap-3 max-w-sm items-center">

                                <h2 className="text-2xl leading-tight">Movies</h2>

                            </div>
                            <Link href={route("admin.movies.create")}>
                                <Button className="px-5">
                                    Add Movie
                                </Button>
                            </Link>
                            {/* <form className="flex flex-col md:flex-row w-3/4 md:w-full max-w-sm md:space-x-3 space-y-3 md:space-y-0 justify-center">
                                <input
                                    type="text"
                                    name="filter"
                                    placeholder="Search"
                                    variant="primary-outline"
                                    onKeyUp={(e) => {handleSearch(e)}}
                                    defaultValue={query}
                                />
                                <Button className="w-1/3">
                                    Filter
                                </Button>
                            </form> */}
                        </div>
                        <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
                            <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
                                <table className="min-w-full leading-normal">
                                    <thead className="bg-alerange">
                                        <tr>
                                            <th
                                                scope="col"
                                                className="px-5 py-3  text-gray-800  text-left text-base uppercase font-semibold"
                                            >
                                                Title
                                            </th>
                                            <th
                                                scope="col"
                                                className="px-5 py-3  text-gray-800  text-left text-base uppercase font-semibold"
                                            >
                                                Category
                                            </th>
                                            <th
                                                scope="col"
                                                className="px-5 py-3  text-gray-800  text-left text-base uppercase font-semibold"
                                            >
                                                Rating
                                            </th>
                                            <th
                                                scope="col"
                                                className="px-5 py-3  text-gray-800  text-base uppercase font-semibold text-center"

                                            >
                                                status
                                            </th>
                                            <th
                                                scope="col" colSpan={2}
                                                className="px-5 py-3  text-gray-800  text-left text-base uppercase font-semibold"
                                            ></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {movies.data.map((movie) => (
                                            <tr key={movie.id}>
                                                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                                    <div className="flex items-center">
                                                        <div className="w-40 h-24 flex-shrink-0">
                                                            <img
                                                                alt="profil"
                                                                src={movie.thumbnail}
                                                                className="object-cover w-full h-full rounded-md"
                                                            />
                                                        </div>
                                                        <div className="ml-3">
                                                            <p className="text-gray-900 whitespace-no-wrap">
                                                                {movie.title}
                                                            </p>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                                    <p className="text-gray-900 whitespace-no-wrap">{movie.category}</p>
                                                </td>
                                                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                                    <p className="text-gray-900 whitespace-no-wrap">{movie.rating}</p>
                                                </td>
                                                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm text-center">
                                                    <span className={`relative inline-block px-3 py-1  leading-tight rounded-full ${parseFloat(movie.is_featured) ? 'bg-alerange font-semibold' : 'bg-slate-400'}`}>

                                                        {parseFloat(movie.is_featured) ? "Featured" : "Not Featured"}

                                                    </span>
                                                </td>
                                                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                                    <Link href={route('admin.movies.edit', movie.slug)}>
                                                        <Button className="px-5">
                                                            Edit
                                                        </Button>
                                                    </Link>
                                                </td>
                                                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                                    <div onClick={() => {destroy(route('admin.movies.destroy', movie.slug))}} >
                                                        <Button className="px-5">
                                                            Delete
                                                        </Button>
                                                    </div>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                                <div className="px-5 bg-white py-5 flex flex-col xs:flex-row items-center xs:justify-between">
                                    <nav aria-label="Page navigation example">
                                        {movies.links.map((link) => (
                                            <Link as="button"
                                                key={link.label}
                                                className={`py-2 px-3 ml-0 leading-tight  first:rounded-l-lg border last:rounded-r-lg border-gray-300
                                                ${link.active ? 'text-blue-600 bg-blue-50  dark:border-gray-700 dark:bg-gray-700 dark:text-white' : 'text-gray-500 bg-white  hover:bg-blue-100 hover:text-blue-700   dark:hover:text-white dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700'}
                                                ${link.url === null && 'cursor-not-allowed'}
                                                `}
                                                href={link.url}
                                                disabled={link.active || link.url === null}
                                                dangerouslySetInnerHTML={pageLabel(link.label)}
                                            >
                                            </Link>
                                        ))}
                                    </nav>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Authenticated>
        </>
    );
}