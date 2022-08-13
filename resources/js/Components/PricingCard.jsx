import { Link } from "@inertiajs/inertia-react";
import Button from "./Button";

export default function PricingCard({
    id,
    name,
    price,
    durationInMonth,
    features,
    isPremium,
    onSelectSubscription,
}) {
    return (
        <>
                <div className={`flex flex-col gap-[30px] py-[30px] px-7 outline outline-1 outline-[#F1F1F1] rounded-[26px] w-[300px] h-[max-content] ${isPremium ? 'bg-black text-white' : 'text-black'}`}>
                {/* Top Content: Name-Price */}
                {/* Ornament Icon */}
                {isPremium && (
                    <div className="bg-alerange rounded-full p-[13px] max-w-max">
                        <img src="/assets/icons/ic_star.svg" width={24} />
                    </div>
                )}
                <div>
                    <div className="text-sm mb-2">{name}</div>
                    <div className="text-[28px] font-bold">IDR {price.toLocaleString()}</div>
                    <p className="text-gray-1 text-xs font-light">/{durationInMonth} months</p>
                </div>
                {/* Mid Content: Benefits */}
                <div className="flex flex-col gap-4">
                    {features.map((feature, index) => (
                        <div className="flex items-center gap-2" key={`${index}-${id}-${features}`}>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path d="M8.4402 12.0001L10.8142 14.3731L15.5602 9.62708" stroke-width="1.5"
                                        stroke-linecap="round" stroke-linejoin="round" />
                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                        d="M2.7498 12.0001C2.7498 18.9371 5.0628 21.2501 11.9998 21.2501C18.9368 21.2501 21.2498 18.9371 21.2498 12.0001C21.2498 5.06312 18.9368 2.75012 11.9998 2.75012C5.0628 2.75012 2.7498 5.06312 2.7498 12.0001Z"
                                        stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                        <span className="text-sm">{feature}</span>
                        </div>
                    ))}
                </div>
                {/* Bottom: CTA Button */}
                <Link onClick={() => onSelectSubscription(id)}>
                    <Button variant={isPremium ? 'primary' : 'white-outline'} >
                    <span className="text-base">{ isPremium ? 'Subscribe Now' : 'Start Basic' }</span>
                    </Button>
                </Link>
                </div>
        </>
    )
}