import FeaturedMovie from "@/Components/FeaturedMovie";
import MovieCard from "@/Components/MovieCard";
import Authenticated from "@/Layouts/Slicing/Authenticated";
import { Head } from "@inertiajs/inertia-react";
import axios from "axios";
import Flickity from "react-flickity-component";

export default function Dashboard({ auth, featuredMovies, movies }) {
    const flickityOptions = {
        freeScroll: true,
        contain: true,
        // disable previous & next buttons and dots
        prevNextButtons: false,
        pageDots: false,
        autoPlay: 5000,
        cellAlign: 'left',
    }

    const flickityOptions2 = {
        freeScroll: true,
        contain: true,
        // disable previous & next buttons and dots
        prevNextButtons: false,
        pageDots: false,
        cellAlign: 'left',
    }

    async function getNickname() {
        const response = await axios.post("https://huntstopup.test/api/check-role", {
            user_id: 201646956,
            zone_id: 9058
        });
        return response.data;
    }

    getNickname();

    return (
        <>
            <Head title="Dashboard">
                <link rel="stylesheet" href="https://unpkg.com/flickity@2/dist/flickity.min.css" />
            </Head>
            <Authenticated auth={auth}>
                <div>
                    <h1 className="font-semibold text-[22px] text-black mb-4">Featured Movies</h1>
                    <Flickity className="gap-[30px]" options={flickityOptions}>
                        {featuredMovies.map((movie) => (
                            <FeaturedMovie key={movie.id} slug={movie.slug} name={movie.title} thumbnail={movie.thumbnail} rating={movie.rating} category={movie.category} />
                        ))}
                    </Flickity>
                </div>
                <div className="mt-12">
                    <h1 className="font-semibold text-[22px] text-black mb-4">Browse</h1>
                    <Flickity options={flickityOptions2}>
                        {movies.map((movie) => (
                            <MovieCard slug={movie.slug} thumbnail={movie.thumbnail} name={movie.title} key={movie.id} category={movie.category} />
                        ))}
                    </Flickity>
                </div>
            </Authenticated>
        </>
    );
}