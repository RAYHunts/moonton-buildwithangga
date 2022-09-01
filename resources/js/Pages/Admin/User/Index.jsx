import Button from "@/Components/Button";
import FlashMessage from "@/Components/FlashMessage";
import Authenticated from "@/Layouts/Slicing/Authenticated";
import { Head, Link, useForm } from "@inertiajs/inertia-react";

export default function Index({ auth, users, flashMessage }) {
    const { delete: destroy, put } = useForm();
    console.log(users);
    function pageLabel(page) {
        return { __html: page };
    };
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
                                <h2 className="text-2xl leading-tight">Users</h2>
                            </div>
                            <Link href={route("admin.users.create")}>
                                <Button className="px-5">
                                    Add User
                                </Button>
                            </Link>
                        </div>
                        <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
                            <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
                                <table className="min-w-full leading-normal table-auto">
                                    <thead className="bg-alerange">
                                        <tr>
                                            <th
                                                scope="col"
                                                className="px-5 py-3  text-gray-800  text-left text-base uppercase font-semibold w-max"
                                            >
                                                Name
                                            </th>
                                            <th
                                                scope="col"
                                                className="px-5 py-3  text-gray-800  text-left text-base uppercase font-semibold w-max"
                                            >
                                                Email
                                            </th>
                                            <th
                                                scope="col"
                                                className="px-5 py-3  text-gray-800  text-left text-base uppercase font-semibold w-max"
                                            >
                                                Role
                                            </th>

                                            <th
                                                scope="col" colSpan={2}
                                                className="px-5 py-3  text-gray-800  text-left text-base uppercase font-semibold"
                                            ></th>
                                            


                                        </tr>
                                    </thead>
                                    <tbody>
                                        {users.data.map((user) => (
                                            <tr key={user.id}>
                                                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                                    <div className="flex items-center">
                                                        <div className="flex-shrink-0 w-10 h-10">
                                                            <img
                                                                className="w-10 h-10 rounded-full"
                                                                src="/assets/images/avatar.png"
                                                                alt=""
                                                            />
                                                        </div>
                                                        <div className="ml-3">
                                                            <p className="text-gray-900 whitespace-no-wrap">
                                                                {user.name}
                                                            </p>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                                    <p className="text-gray-900 whitespace-no-wrap">
                                                        {user.email}
                                                    </p>
                                                </td>
                                                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                                    <div className="text-gray-900 whitespace-no-wrap w-max">
                                                        {user.roles[0].name}
                                                    </div>
                                                </td>
                                                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                                    <Link href={route("admin.users.edit", user.id)}>
                                                        <Button className="px-5">
                                                            Edit
                                                        </Button>
                                                    </Link>
                                                </td>
                                                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                                    <div onClick={() => destroy(route("admin.users.destroy", user.id))}>
                                                        <Button className="px-5">
                                                            Delete
                                                        </Button>
                                                    </div>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div className="px-5 bg-white py-5 flex flex-col xs:flex-row items-center xs:justify-between">
                            <nav aria-label="Page navigation example">
                                {users.links.map((link) => (
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
            </Authenticated>
        </>
    );
}