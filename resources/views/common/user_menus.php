<?php $menus = array(
    array(
        'name' => 'Blog',
        'icon' => 'fa fa-bold',
        'sub' => array(
            array(
                'name' => 'Add',
                'url' => url('/user/blog/add'),
                'icon' => 'fa fa-plus'
            ),
            array(
                'name' => 'Overview',
                'url' => url('/user/blog/list'),
                'icon' => 'fa fa-eye'
            )
        )
    ),

);
return $menus;
