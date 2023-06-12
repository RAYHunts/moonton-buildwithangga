<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;

class SubsPlan
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure(\Illuminate\Http\Request): (\Illuminate\Http\Response|\Illuminate\Http\RedirectResponse)  $next
     * @return \Illuminate\Http\Response|\Illuminate\Http\RedirectResponse
     */
    public function handle(Request $request, Closure $next, $state)
    {   
        if(!auth()->user()->subscriptionStatus && $state == 'true') {
            return redirect(route('user.pricing'));
        }
        if(auth()->user()->subscriptionStatus && $state == 'false') {
            return redirect()->route('user.dashboard.index');
        }
        return $next($request);
    }
}
