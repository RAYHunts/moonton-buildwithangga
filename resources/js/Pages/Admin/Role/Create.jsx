import Button from "@/Components/Button";
import Checkbox from "@/Components/Checkbox";
import Input from "@/Components/Input";
import InputError from "@/Components/InputError";
import Label from "@/Components/Label";
import Authenticated from "@/Layouts/Slicing/Authenticated";
import { Inertia } from "@inertiajs/inertia";
import { Head, Link, useForm } from "@inertiajs/inertia-react";
import { useState } from "react";

export default function Create({ auth, permissions }) {
    const { setData, data, post, processing, errors } = useForm({
        name: "",
        permissions: [],
    });

    const onHandleChange = (event) => {
        setData(
            event.target.name,
            event.target.value
        );
    };

    const onPermissionChange = (event) => {
        if (event.target.checked) {
            data.permissions.push(event.target.name);
        } else {
            data.permissions = data.permissions.filter((permission) => permission !== event.target.name);
        };
    }

    const submit = (e) => {
        e.preventDefault();

        post(route("admin.roles.store"));
    };

    return (
        <>
            <Head title="Admin | Movies" />
            <Authenticated auth={auth}>
                <div className="container mx-auto px-4 sm:px-8 w-full">
                    <div>
                        <div className="flex flex-row mb-1 sm:mb-0 justify-between w-full">
                            <div className="flex gap-3 max-w-sm items-center">
                                <h2 className="text-2xl leading-tight">Insert Role</h2>
                            </div>
                        </div>
                        <div className="overflow-x-auto">
                            <div className="inline-block px-4 py-4  min-w-full shadow rounded-lg overflow-hidden">
                                <form onSubmit={submit}>
                                    <Label forInput="name" value="Name" />
                                    <Input
                                        type="text"
                                        name="name"
                                        variant="primary-outline"
                                        handleChange={onHandleChange}
                                        placeholder="Enter the name of the movie"
                                        value={data.name}
                                    />
                                    <InputError message={errors.name} />
                                    {permissions.map((permission) => (
                                        <div className="relative w-10 mr-2 align-middle select-none mt-4 block" key={permission.id}>
                                            <Label
                                                forInput={permission.id}
                                                value={permission.name}
                                            />
                                            <label
                                                htmlFor={permission.id}
                                                className="block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer"
                                            >
                                                <input
                                                    type="checkbox"
                                                    name={permission.name}
                                                    value={permission.name}
                                                    onChange={onPermissionChange}
                                                    id={permission.id}
                                                    className="checked:bg-alerange text-alerange  focus:bg-alerange ring-0 checked:ring-0 focus:ring-0 outline-none focus:outline-none checked:outline-none right-4 checked:right-0 duration-200 ease-in absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer"
                                                />
                                            </label>
                                        </div>
                                    ))}
                                    <Button type="submit" className="mt-4" processing={processing}>
                                        Save
                                    </Button>
                                </form>

                            </div>
                        </div>
                    </div>
                </div>
            </Authenticated>
        </>
    );
}