import { Head, Link } from "@inertiajs/inertia-react";
import ReactPlayer from 'react-player';

export default function Show() {
    return (
        <>
            <Head title="Show"/>
            <section className="mx-auto h-screen w-screen relative watching-page font-poppins bg-form-bg" id="stream">
                <div className="pt-[100px] h-[850px]"> 
                    <ReactPlayer
                        url={'https://www.youtube.com/watch?v=dQw4w9WgXcQ'}
                        controls
                        width='100%'
                        height='100%'
                        />
                </div>
            {/* Button back to dashboard */}
                <div className="absolute top-5 left-5 z-20">
                    <Link href={route('slicing.dashboard')}>
                        <img
                            src="/assets/icons/ic_arrow-left.svg"
                            className="transition-all btn-back w-[46px]"
                            alt="stream"
                            />
                    </Link>
                </div>
            {/* Video Title */}
                <div className="absolute title-video top-7 left-1/2 -translate-x-1/2 max-w-[310px] md:max-w-[620px] text-center">
                    <span className="font-medium text-2xl transition-all text-white drop-shadow-md select-none">
                    Details Screen Part Final
                    </span>
                </div>
            </section>
        </>
    );
}