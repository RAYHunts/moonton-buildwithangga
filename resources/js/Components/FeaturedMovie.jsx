import propTypes from "prop-types"

FeaturedMovie.propTypes = {
    slug: propTypes.string.isRequired,
    name: propTypes.string.isRequired,
    thumbnail: propTypes.string.isRequired,
    rating: propTypes.number.isRequired,
    category: propTypes.string.isRequired,
}

export default function FeaturedMovie({
    name,
    slug,
    category,
    thumbnail,
    rating,
}) {
    return (
        <>
            <div className="overflow-hidden group mr-[30px]">
                <img src={thumbnail} className="object-cover rounded-[30px] w-[520px] h-[340px]" alt="" />
                <div className="rating absolute top-0 left-0">
                    <div className="p-[30px] flex items-center gap-1">
                        <img src="/assets/icons/ic_star.svg" alt=""/>
                        <span className="text-sm font-medium text-white mt-1">{rating.toFixed(1)}/5.0</span>
                    </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black rounded-bl-[28px]
                    rounded-br-[28px] flex justify-between items-center px-7 h-[130px]">
                    <div>
                        <p className="font-medium text-[22px] text-white">{name}</p>
                        <p className="mb-0 text-white text-sm font-light">{category}</p>
                    </div>
                    <div className="translate-x-[100px] group-hover:translate-x-0 transition ease-in-out duration-500">
                        <img src="/assets/icons/ic_play.svg" width="50" alt=""/>
                    </div>
                </div>
                <a href={route('slicing.movie.show', slug)} className="inset-0 absolute z-50"></a>
            </div>
        </>
    )
}