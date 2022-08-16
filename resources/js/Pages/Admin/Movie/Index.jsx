import Authenticated from "@/Layouts/Slicing/Authenticated";
import { Head } from "@inertiajs/inertia-react";

export default function Index({auth}) {
    return (
        <>
            <Head title="Admin" />
            <Authenticated auth={auth}>

            </Authenticated>
        </>
    );
}