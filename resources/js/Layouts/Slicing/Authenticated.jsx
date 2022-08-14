import Sidebar from "./Sidebar";
import Topbar from "./Topbar";

export default function Authenticated({auth,children}) {
    return (
        <>
            {/* <!-- Desktop Only --> */}
            <div className="mx-auto max-w-screen hidden lg:block">
                {/* <!-- START: Sidebar --> */}
                <Sidebar auth={auth}/>
                {/* <!-- END: Sidebar --> */}

                {/* <!-- START: Content --> */}
                <div className="ml-[300px] px-[50px]">
                    <div className="py-10 flex flex-col gap-[50px]">
                        {/* <!-- Topbar --> */}
                        <Topbar name={auth.user.name}/>
                        {/* <!-- /Topbar --> */}
                        <main>
                        {children}
                        </main>
                    </div>
                </div>
                {/* <!-- END: Content --> */}
            </div>

            <div className="mx-auto px-4 w-full h-screen lg:hidden flex bg-black">
                <div className="text-white text-2xl text-center leading-snug font-medium my-auto">
                    Sorry, this page only supported on 1024px screen or above
                </div>
            </div>
        </>
    );
}