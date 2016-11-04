<?php
namespace App\Facades;

use Illuminate\Support\Facades\Facade;
use App\Helpers\AdminHelper;

/**
 * Class Admin
 * @package App\Facades
 */
class Admin extends Facade
{
    protected static function getFacadeAccessor()
    {
        return AdminHelper::class;
    }
}