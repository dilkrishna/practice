<?php
namespace App\Helpers;

use App\Admin;



/**
 * Class AdminHelper
 * @package App\Helpers
 */
class AdminHelper
{
    protected $user;

    protected $session;

    /**
     * AdminHelper constructor.
     */
    public function __construct()
    {
        $this->session = request()->session();
        $user = $this->session->get('admin');
        $this->user = Admin::where('id', $user['id'])->first();
    }


    /**
     * The currently logged in admin
     * @return mixed
     */
    public function user()
    {
        return $this->user;
    }
}

