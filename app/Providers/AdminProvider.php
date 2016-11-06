<?php

namespace App\Providers;

use App\Helpers\AdminHelper;
use Illuminate\Support\ServiceProvider;

class AdminProvider extends ServiceProvider
{
    protected $defer = true;

    /**
     * Bootstrap the application services.
     *
     * @return void
     */
    public function boot()
    {
        //
    }

    /**
     * Register the application services.
     *
     * @return void
     */
    public function register()
    {
        $this->app->singleton(AdminHelper::class, function () {
            return new AdminHelper();
        });
    }

    public function provides()
    {
        return [AdminHelper::class];
    }
}