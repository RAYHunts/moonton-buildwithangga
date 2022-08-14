import FeaturedMovie from "@/Components/FeaturedMovie";
import MovieCard from "@/Components/MovieCard";
import Authenticated from "@/Layouts/Slicing/Authenticated";
import { Head } from "@inertiajs/inertia-react";
import Flickity from "react-flickity-component";

export default function Dashboard({auth, featuredMovies, movies}) {
    console.log(auth);
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
                            <FeaturedMovie key={movie.id} slug={movie.slug} name={movie.title} thumbnail={`/assets/images/featured-${2}.png`} rating={movie.rating} category={movie.category} />
                        ))}
                    </Flickity>
                </div>
                <div className="mt-12">
                    <h1 className="font-semibold text-[22px] text-black mb-4">Browse</h1>
                    <Flickity options={flickityOptions2}>
                        {movies.map((movie) => (
                            <MovieCard slug={movie.slug} thumbnail={`/assets/images/browse-${2}.png`} name={movie.title} key={movie.id} category={`Horror`}/>
                        ))}
                    </Flickity>
                </div>
            </Authenticated>
        </>
    );
}