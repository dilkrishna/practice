<?php

namespace App\Http\Middleware;
use App\Facades\Admin;

use Closure;

class AdminMiddleware
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request $request
     * @param  \Closure $next
     * @return mixed
     */
    public function handle($request, Closure $next)
    {
        $user = Admin::user();
        if (!$user) {
            return redirect('/admin/login');
        }
        return $next($request);
    }
}
