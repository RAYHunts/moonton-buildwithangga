import PricingCard from "@/Components/PricingCard";
import Authenticated from "@/Layouts/Slicing/Authenticated";
import { Head } from "@inertiajs/inertia-react";

export default function Pricing() {
    return (
        <>
            <Head title="Pricing"/>
            <Authenticated>
            <div className="py-20 flex flex-col items-center">
                <h1 className="text-black font-semibold text-[26px] mb-3">
                    Pricing for Everyone
                </h1>
                <p className="text-base text-gray-1 leading-7 max-w-[302px] text-center">
                    Invest your little money to get a whole new experiences from movies.
                </p>
            {/* Pricing Card */}
            <div className="flex justify-center gap-10 mt-[70px]">
                {/* Basic */}
                <PricingCard durationInMonth={3} name={'Basic'} price={299000}  features={['1', '2']}/>
                {/* For Greatest */}
                <PricingCard durationInMonth={3} isPremium name={'For Greatest'} price={599000} features={['1', '2', '3']}/>
            </div>
            {/* /Pricing Card */}
            </div>

            </Authenticated>
        </>
    );
}