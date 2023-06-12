import Button from "@/Components/Button";
import FlashMessage from "@/Components/FlashMessage";
import Authenticated from "@/Layouts/Slicing/Authenticated";
import { Head, Link, useForm } from "@inertiajs/inertia-react";

export default function Index({ auth, roles, flashMessage, permissions }) {
    const { delete: destroy, put } = useForm();
    const checkPermission = (rolesPermission, permissions) => {
        let rolePermissionId = rolesPermission.map((role) => role.id);
        return rolePermissionId.includes(permissions.id);
    };
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
                            <FlashMessage type={flashMessage.type} message={flashMessage.message} />
                        )}


                        <div className="flex flex-row mb-1 sm:mb-0 justify-between w-full">
                            <div className="flex gap-3 max-w-sm items-center">

                                <h2 className="text-2xl leading-tight">Roles</h2>

                            </div>
                            <Link href={route("admin.roles.create")}>
                                <Button className="px-5">
                                    Add Role
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
                                                scope="col" colSpan={2}
                                                className="px-5 py-3  text-gray-800  text-left text-base uppercase font-semibold"
                                            ></th>
                                            {permissions.map(permission => (
                                                <th
                                                    scope="col"
                                                    className="px-5 py-3  text-gray-800  text-center text-base uppercase font-semibold w-max"
                                                    key={permission.id} >
                                                    <div className="w-max">
                                                        {permission.name}
                                                    </div>
                                                </th>
                                            ))}


                                        </tr>
                                    </thead>
                                    <tbody>
                                        {roles.data.map((role) => (
                                            <tr key={role.id}>
                                                <td className="px-5 py-5 border-b border-gray-200 text-left">
                                                    <div className="w-max">
                                                        {role.name}
                                                    </div>
                                                </td>
                                                <td className="px-5 py-5 border-b border-gray-200 text-left">
                                                    <div className="w-max">
                                                        <Link href={route("admin.roles.edit", role.id)}>
                                                            <Button className="px-5">
                                                                Edit
                                                            </Button>
                                                        </Link>
                                                    </div>
                                                </td>
                                                <td className="px-5 py-5 border-b border-gray-200 text-left">
                                                    <div className="w-max">
                                                        <Button className="px-5" onClick={() => { destroy(route("admin.roles.destroy", role.id)) }}>
                                                            Delete
                                                        </Button>
                                                    </div>
                                                </td>
                                                {permissions.map(permission => (
                                                    <td className="px-5 py-5 border-b border-gray-200 text-center" key={permission.id}>
                                                        {checkPermission(role.permissions, permission) ? (
                                                            <i className="fas fa-check text-green-500"></i>
                                                        ) : (
                                                            <i className="fas fa-times text-red-500"></i>
                                                        )}
                                                    </td>
                                                ))}
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div className="px-5 bg-white py-5 flex flex-col xs:flex-row items-center xs:justify-between">
                            <nav aria-label="Page navigation example">
                                {roles.links.map((link) => (
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