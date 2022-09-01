import Button from "@/Components/Button";
import Checkbox from "@/Components/Checkbox";
import Input from "@/Components/Input";
import InputError from "@/Components/InputError";
import Label from "@/Components/Label";
import Authenticated from "@/Layouts/Slicing/Authenticated";
import { Inertia } from "@inertiajs/inertia";
import { Head, Link, useForm } from "@inertiajs/inertia-react";
import { useState } from "react";

export default function Edit({ auth, movie }) {
    const { setData, data, put, processing, errors } = useForm({
        ...movie,
    });

    const [img, setImg] = useState();

    const onImageChange = (e) => {
        const [file] = e.target.files;
        setImg(URL.createObjectURL(file));
        setData(
            e.target.name, e.target.files[0]
        );
    }

    const onHandleChange = (event) => {
        setData(
            event.target.name,
            event.target.value
        );
    };

    const submit = (e) => {
        e.preventDefault();

        if (data.thumbnail === movie.thumbnail) {
            delete data.thumbnail;
        }
        Inertia.post(route("admin.movies.update", movie.slug), {
            _method: "PUT",
            ...data,
        });
        // put(route("admin.movies.update", movie.slug), {
        //     data: {
        //         ...data,
        //     },
        // });

    };

    return (
        <>
            <Head title="Admin | Movies" />
            <Authenticated auth={auth}>
                <div className="container mx-auto px-4 sm:px-8 w-full">
                    <div>
                        <div className="flex flex-row mb-1 sm:mb-0 justify-between w-full">
                            <div className="flex gap-3 max-w-sm items-center">
                                <h2 className="text-2xl leading-tight">Edit <strong>{movie.title}</strong></h2>
                            </div>
                        </div>
                        <div className="overflow-x-auto">
                            <div className="inline-block px-4 py-4  min-w-full shadow rounded-lg overflow-hidden">
                                <form onSubmit={submit}>
                                    <Label forInput="title" value="Title" />
                                    <Input
                                        type="text"
                                        name="title"
                                        variant="primary-outline"
                                        handleChange={onHandleChange}
                                        placeholder="Enter the name of the movie"
                                        defaultValue={data.title}
                                    />
                                    <InputError message={errors.title} />
                                    <Label forInput="category" value="Category" className="mt-4" />
                                    <Input
                                        type="text"
                                        name="category"
                                        variant="primary-outline"
                                        handleChange={onHandleChange}
                                        placeholder="Enter the category of the movie"
                                        defaultValue={data.category}
                                    />
                                    <InputError message={errors.category} />
                                    <Label
                                        forInput="video_url"
                                        value="Video URL"
                                        className="mt-4"
                                    />
                                    <Input
                                        type="url"
                                        name="video_url"
                                        variant="primary-outline"
                                        handleChange={onHandleChange}
                                        placeholder="Enter the video url of the movie"
                                        defaultValue={data.video_url}
                                    />
                                    <InputError message={errors.video_url} />
                                    <Label
                                        forInput="thumbnail"
                                        value="Thumbnail"
                                        className="mt-4"
                                    />
                                    <img
                                        src={img || data.thumbnail}
                                        alt=""
                                        className="w-40"
                                    />
                                    <Input
                                        type="file"
                                        name="thumbnail"
                                        variant="primary-outline"
                                        handleChange={onImageChange}
                                        placeholder="Insert thumbnail of the movie"
                                        className="px-0"

                                    />
                                    <InputError message={errors.thumbnail} />
                                    <Label forInput="rating" value="Rating" className="mt-4" />
                                    <Input
                                        type="number"
                                        name="rating"
                                        variant="primary-outline"
                                        handleChange={onHandleChange}
                                        placeholder="Enter the rating of the movie"
                                        defaultValue={data.rating}
                                    />
                                    <InputError message={errors.rating} />
                                    <div className="relative inline-block w-10 mr-2 align-middle select-none mt-4">
                                        <Label
                                            forInput="featured"
                                            defaultValue={'Featured'}
                                        />
                                        <label
                                            htmlFor="featured"
                                            className="block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer"
                                        >
                                            <input
                                                type="checkbox"
                                                name="is_featured"
                                                defaultValue={data.is_featured}
                                                defaultChecked={data.is_featured}
                                                onChange={(e) =>
                                                    setData("is_featured", e.target.checked)
                                                }
                                                id="featured"
                                                className="checked:bg-alerange text-alerange  focus:bg-alerange ring-0 checked:ring-0 focus:ring-0 outline-none focus:outline-none checked:outline-none right-4 checked:right-0 duration-200 ease-in absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer"
                                            />
                                        </label>
                                    </div>
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