import FeaturedMovie from "@/Components/FeaturedMovie";
import MovieCard from "@/Components/MovieCard";
import Authenticated from "@/Layouts/Slicing/Authenticated";
import { Head } from "@inertiajs/inertia-react";
import Flickity from "react-flickity-component";

export default function Dashboard() {
    const flickityOptions = {
        cellAlign : "left",
        contain : true,
        groupCells: 1,
        wrapAround: false,
        pageDots: false,
        prevNextButtons: false,
        draggable: ">1"
    }
        
    return (
        <>
            <Head title="Dashboard">
                <link rel="stylesheet" href="https://unpkg.com/flickity@2/dist/flickity.min.css" />
            </Head>
            <Authenticated>
                <div>
                    <h1 className="font-semibold text-[22px] text-black mb-4">Featured Movies</h1>
                    <Flickity className="gap-[30px]" options={flickityOptions}>
                        {[1, 2, 3 ].map((i) => (
                            <FeaturedMovie key={i} slug={'the-batman-inlove'} name={'The Batman in Love'} thumbnail={`/assets/images/featured-${i}.png`} rating={i} category={'Comedy'} />
                        ))}
                    </Flickity>
                </div>
                <div className="mt-12">
                    <h1 className="font-semibold text-[22px] text-black mb-4">Browse</h1>
                    <Flickity options={flickityOptions}>
                        {[1, 2, 3, 4, 5 ].map((i) => (
                            <MovieCard slug={'movie'} thumbnail={`/assets/images/browse-${i}.png`} name={`Kucing Oyen`} key={i} category={`Horror`}/>
                        ))}
                    </Flickity>
                </div>
            </Authenticated>
        </>
    );
}