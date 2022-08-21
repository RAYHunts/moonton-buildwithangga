import Button from "@/Components/Button";
import Authenticated from "@/Layouts/Slicing/Authenticated";
import { Head, Link } from "@inertiajs/inertia-react";

export default function Index({ auth, movies }) {
    console.log(movies);
    function pageLabel(page) {
        return { __html: page };
    }
    return (
        <>
            <Head title="Admin | Movies" />
            <Authenticated auth={auth}>
                <div className="container mx-auto px-4 sm:px-8 w-full">
                    <div>
                        <div className="flex flex-row mb-1 sm:mb-0 justify-between w-full">
                            <div className="flex gap-3 max-w-sm">

                                <h2 className="text-2xl leading-tight">Movies</h2>
                                <Button className="px-5">
                                    Add Movie
                                </Button>
                            </div>
                            <div className="flex">
                                <form className="flex flex-col md:flex-row w-3/4 md:w-full max-w-sm md:space-x-3 space-y-3 md:space-y-0 justify-center">
                                    <div className=" relative ">
                                        <input
                                            type="text"
                                            id='"form-subscribe-Filter'
                                            className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                                            placeholder="name"
                                        />
                                    </div>
                                    <button
                                        className="flex-shrink-0 px-4 py-2 text-base font-semibold text-white bg-purple-600 rounded-lg shadow-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-purple-200"
                                        type="submit"
                                    >
                                        Filter
                                    </button>
                                </form>

                            </div>
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
                                                Created at
                                            </th>
                                            <th
                                                scope="col"
                                                className="px-5 py-3  text-gray-800  text-left text-base uppercase font-semibold"
                                            >
                                                status
                                            </th>
                                            <th
                                                scope="col"
                                                className="px-5 py-3  text-gray-800  text-left text-base uppercase font-semibold"
                                            ></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {movies.data.map((movie) => (
                                            <tr key={movie.id}>
                                                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                                    <div className="flex items-center">
                                                        <div className="flex-shrink-0">
                                                            <a href="#" className="block relative">
                                                                <img
                                                                    alt="profil"
                                                                    src={movie.thumbnail}
                                                                    className="mx-auto object-cover rounded-full h-10 w-10 "
                                                                />
                                                            </a>
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
                                                    <p className="text-gray-900 whitespace-no-wrap">12/09/2020</p>
                                                </td>
                                                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                                    <span className={`relative inline-block px-3 py-1  leading-tight rounded-full ${movie.is_featured ? 'bg-alerange font-semibold' : 'bg-slate-400'}`}>
                                                        {/* <span
                                                            aria-hidden="true"
                                                            className="absolute inset-0 bg-green-200 opacity-50 rounded-full"
                                                        ></span> */}
                                                        <span className="relative">{movie.is_featured ? "Featured" : "Not Featured"}</span>
                                                    </span>
                                                </td>
                                                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                                    <a href="#" className="text-indigo-600 hover:text-indigo-900">
                                                        Edit
                                                    </a>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                                <div className="px-5 bg-white py-5 flex flex-col xs:flex-row items-center xs:justify-between">
                                    <div className="flex items-center">
                                        {movies.links.map((link) => (
                                            <Link as="button"
                                                key={link.label}
                                                className={`w-full p-4 text-base whitespace-pre first:rounded-l-xl last:rounded-r-xl text-gray-600 transition-all disabled:bg-black
                                                ${link.active ? 'bg-alerange font-semibold' : 'bg-slate-400 hover:bg-gray-100'}
                                                ${link.url === null ? 'cursor-not-allowed' : 'cursor-pointer'}
                                                `}
                                                href={link.url}
                                                disabled={link.active || link.url === null}
                                                dangerouslySetInnerHTML={pageLabel(link.label)}
                                            >
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </Authenticated>
        </>
    );
}