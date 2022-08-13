import Authenticated from "@/Layouts/Slicing/Authenticated";
import { Head } from "@inertiajs/inertia-react";

export default function Pricing() {
    return (
        <>
            <Head title="Pricing"/>
            <Authenticated>
                <div className="py-20 flex flex-col items-center">
                    <div className="text-black font-semibold text-[26px] mb-3">
                        Pricing for Everyone
                    </div>
                    <p className="text-base text-gray-1 leading-7 max-w-[302px] text-center">
                        Invest your little money to get a whole new experiences from movies.
                    </p>

                    
                    <div className="flex justify-center gap-10 mt-[70px]">
                        
                        <div
                            className="flex flex-col gap-[30px] py-[30px] px-7 outline outline-1 outline-[#F1F1F1] rounded-[26px] text-black w-[300px] h-[max-content]">
                            
                            <div>
                                <div className="text-sm mb-2">Basic</div>
                                <div className="text-[28px] font-bold">
                                    IDR 299.000
                                </div>
                                <p className="text-gray-1 text-xs font-light">/3 months</p>
                            </div>

                            
                            <div className="flex flex-col gap-4">
                                <div className="flex items-center gap-2">
                                    <img src="assets/icons/ic_tick.svg" alt="" />
                                    <span className="text-sm">
                                        Unlock 10 basic movies
                                    </span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <img src="assets/icons/ic_tick.svg" alt="" />
                                    <span className="text-sm">
                                        Up to 3 users
                                    </span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <img src="assets/icons/ic_tick.svg" alt="" />
                                    <span className="text-sm">
                                        Support 24/7 ready
                                    </span>
                                </div>
                            </div>

                            
                            <div>
                                <a href="payment_status/failed.html"
                                    className="rounded-2xl border border-[#F1F1F1] py-[13px] text-center grid">
                                    <span className="text-base">Start Basic</span>
                                </a>
                            </div>
                        </div>

                        
                        <div
                            className="flex flex-col gap-[30px] py-[30px] px-7 outline outline-1 outline-[#F1F1F1] rounded-[26px] text-white w-[300px] bg-black">

                            
                            <div className="bg-alerange rounded-full p-[13px] max-w-max">
                                <img src="assets/icons/ic_star.svg" width="24" alt=""/>
                            </div>
                            
                            <div>
                                <div className="text-sm mb-2">For Greatest</div>
                                <div className="text-[28px] font-bold">
                                    IDR 800.000
                                </div>
                                <p className="text-[#767676] text-xs font-light">/3 months</p>
                            </div>

                            {/* <!-- Mid Content: Benefits --> */}
                            <div className="flex flex-col gap-4">
                                <div className="flex items-center gap-2">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path d="M8.4402 12.0001L10.8142 14.3731L15.5602 9.62708" stroke-width="1.5"
                                            stroke-linecap="round" stroke-linejoin="round" />
                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                            d="M2.7498 12.0001C2.7498 18.9371 5.0628 21.2501 11.9998 21.2501C18.9368 21.2501 21.2498 18.9371 21.2498 12.0001C21.2498 5.06312 18.9368 2.75012 11.9998 2.75012C5.0628 2.75012 2.7498 5.06312 2.7498 12.0001Z"
                                            stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                    <span className="text-sm">
                                        Unlock 200 awards movies
                                    </span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path d="M8.4402 12.0001L10.8142 14.3731L15.5602 9.62708" stroke-width="1.5"
                                            stroke-linecap="round" stroke-linejoin="round" />
                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                            d="M2.7498 12.0001C2.7498 18.9371 5.0628 21.2501 11.9998 21.2501C18.9368 21.2501 21.2498 18.9371 21.2498 12.0001C21.2498 5.06312 18.9368 2.75012 11.9998 2.75012C5.0628 2.75012 2.7498 5.06312 2.7498 12.0001Z"
                                            stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                    <span className="text-sm">
                                        180 subtitles available
                                    </span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path d="M8.4402 12.0001L10.8142 14.3731L15.5602 9.62708" stroke-width="1.5"
                                            stroke-linecap="round" stroke-linejoin="round" />
                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                            d="M2.7498 12.0001C2.7498 18.9371 5.0628 21.2501 11.9998 21.2501C18.9368 21.2501 21.2498 18.9371 21.2498 12.0001C21.2498 5.06312 18.9368 2.75012 11.9998 2.75012C5.0628 2.75012 2.7498 5.06312 2.7498 12.0001Z"
                                            stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                    <span className="text-sm">
                                        iOS, Android, TV
                                    </span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path d="M8.4402 12.0001L10.8142 14.3731L15.5602 9.62708" stroke-width="1.5"
                                            stroke-linecap="round" stroke-linejoin="round" />
                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                            d="M2.7498 12.0001C2.7498 18.9371 5.0628 21.2501 11.9998 21.2501C18.9368 21.2501 21.2498 18.9371 21.2498 12.0001C21.2498 5.06312 18.9368 2.75012 11.9998 2.75012C5.0628 2.75012 2.7498 5.06312 2.7498 12.0001Z"
                                            stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                    <span className="text-sm">
                                        Offline Mode
                                    </span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path d="M8.4402 12.0001L10.8142 14.3731L15.5602 9.62708" stroke-width="1.5"
                                            stroke-linecap="round" stroke-linejoin="round" />
                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                            d="M2.7498 12.0001C2.7498 18.9371 5.0628 21.2501 11.9998 21.2501C18.9368 21.2501 21.2498 18.9371 21.2498 12.0001C21.2498 5.06312 18.9368 2.75012 11.9998 2.75012C5.0628 2.75012 2.7498 5.06312 2.7498 12.0001Z"
                                            stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                    <span className="text-sm">
                                        Up to 20 users
                                    </span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path d="M8.4402 12.0001L10.8142 14.3731L15.5602 9.62708" stroke-width="1.5"
                                            stroke-linecap="round" stroke-linejoin="round" />
                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                            d="M2.7498 12.0001C2.7498 18.9371 5.0628 21.2501 11.9998 21.2501C18.9368 21.2501 21.2498 18.9371 21.2498 12.0001C21.2498 5.06312 18.9368 2.75012 11.9998 2.75012C5.0628 2.75012 2.7498 5.06312 2.7498 12.0001Z"
                                            stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                    <span className="text-sm">
                                        Support 24/7 ready
                                    </span>
                                </div>
                            </div>

                            {/* <!-- Bottom: CTA Button --> */}
                            <div>
                                <a href="payment_status/success.html"
                                    className="rounded-2xl bg-alerange py-[13px] text-center grid">
                                    <span className="text-base font-semibold">Subscribe Now</span>
                                </a>
                            </div>
                        </div>
                    </div>
                    {/* <!-- /Pricing Card --> */}
                </div>
            </Authenticated>
        </>
    );
}