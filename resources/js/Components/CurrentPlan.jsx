export default function CurrentPlan({plan}) {
    const remaining_bar = plan.remaining_days / plan.total_days * 100;
    return (
        <>
        <div className="mt-auto pr-[30px]">
            <div className={`p-5 rounded-[25px] outline outline-1 outline-[#f1f1f1] ${plan.name !== 'Basic' && 'bg-black text-white'}`}>
                {plan.name !== 'Basic' && (
                <img src="/assets/icons/ic_star-rounded.svg" alt=""/>
                )}
                <div className="text-lg font-semibold mt-4 mb-8">
                    {plan.name}
                </div>
                <div className="text-sm mb-2">
                    {plan.remaining_days} of {plan.total_days} hari
                </div>
                <div className={`rounded-full w-full h-[6px] ${plan.name !== 'Basic' ? 'bg-gray-800' : 'bg-gray-600'}`}>
                    <div 
                        className={`rounded-full h-full 
                            ${remaining_bar < 20 ? 'bg-red-600' : remaining_bar < 40 ? 'bg-orange-600' : 'bg-green-600'}`} 
                        style={{width: `${remaining_bar}%`}}>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}