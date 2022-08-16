import PricingCard from "@/Components/PricingCard";
import Authenticated from "@/Layouts/Slicing/Authenticated";
import { Inertia } from "@inertiajs/inertia";
import { Head } from "@inertiajs/inertia-react";


export default function Pricing({auth, subscriptionPlans}) {

    const selectPlan = id => {
        Inertia.post(route('user.subscribe'),{
            plan: id
        });
    }


    return (
        <>
            <Head title="Pricing"/>
            <Authenticated auth={auth}>
            <div className="py-20 flex flex-col items-center">
                <h1 className="text-black font-semibold text-[26px] mb-3">
                    Pricing for Everyone
                </h1>
                <p className="text-base text-gray-1 leading-7 max-w-[302px] text-center">
                    Invest your little money to get a whole new experiences from movies.
                </p>
            {/* Pricing Card */}
            <div className="flex justify-center gap-10 mt-[70px]">
                {subscriptionPlans.map(plan => (
                    <PricingCard 
                        durationInMonth={plan.duration_in_months}
                        name={plan.name}
                        price={plan.price}  
                        features={JSON.parse(plan.features)}
                        key={plan.id}
                        isPremium={plan.name !== "Basic"}
                        onSelectSubscription={() => selectPlan(plan.id)}
                    />
                ))}
            </div>
            {/* /Pricing Card */}
            </div>

            </Authenticated>
        </>
    );
}