import propTypes from 'prop-types';

MovieCard.propTypes = {
    slug: propTypes.string.isRequired,
    thumbnail: propTypes.string.isRequired,
    name: propTypes.string.isRequired,
    category: propTypes.string.isRequired,
};
export default function MovieCard({
    name,
    slug,
    category,
    thumbnail,
}) {
    return (
        <>
            <div className="absolute group overflow-hidden mr-[30px]">
                <img src={thumbnail} className="object-cover rounded-[30px] h-[340px] w-[250px]" alt=""/>
                <div
                    className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black rounded-bl-[28px] rounded-br-[28px]">
                    <div className="px-7 pb-7">
                        <h1 className="font-medium text-xl text-white">{name}</h1>
                        <p className="mb-0 text-gray-300 text-base mt-[10px]">{category}</p>
                    </div>
                </div>
                <div className="absolute top-1/2 left-1/2 -translate-y-[500px] group-hover:-translate-y-1/2
                    -translate-x-1/2 z-20 transition ease-in-out duration-500 group-hover:bg-alerange rounded-full">
                    <img src="/assets/icons/ic_play.svg" className="" width="50" alt=""/>
                </div>
                <a href={route('user.movie.show', slug)} className="inset-0 absolute z-50"></a>
            </div>
        </>
    )
}