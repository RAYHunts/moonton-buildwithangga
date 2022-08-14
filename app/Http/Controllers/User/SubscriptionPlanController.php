<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use App\Models\SubscriptionPlan;
use App\Models\UserSubscription;
use Illuminate\Http\Request;

class SubscriptionPlanController extends Controller
{
    public function index()
    {   
        $subscriptionPlans = SubscriptionPlan::all();
        return inertia('User/Dashboard/Pricing', compact('subscriptionPlans'));
    }

    // subscribe to a plan

    public function subscribe(Request $request)
    {   
        $plan = SubscriptionPlan::find($request->plan);
        $data = [
            'user_id' => auth()->user()->id,
            'subscription_plan_id' => $plan->id,
            'price' => $plan->price,
            'expired_at' => now()->addMonths($plan->active_period_in_months),
            'payment_status' => 'paid',
        ];
        UserSubscription::create($data);
        return redirect()->route('dashboard.index');
    }
}