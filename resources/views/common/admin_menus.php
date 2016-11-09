<?php $menus = array(

    array(
        'name' => 'Administrators',
        'icon' => 'fa fa-user',
        'sub' => array(
            array(
                'name' => 'Add',
                'url' => url('/admin/administrators/add'),
                'icon' => 'fa fa-plus'
            ),
            array(
                'name' => 'Overview',
                'url' => url('/admin/administrators/list'),
                'icon' => 'fa fa-eye'
            )
        )
    ),

    array(
        'name' => 'Slider',
        'icon' => 'fa fa-exchange',
        'sub' => array(
            array(
                'name' => 'Add',
                'url' => url('/admin/slider/add'),
                'icon' => 'fa fa-plus'
            ),
            array(
                'name' => 'Overview',
                'url' => url('/admin/slider/list'),
                'icon' => 'fa fa-eye'
            )

        )
    ),

    array(
        'name' => 'Page',
        'icon' => 'fa fa-file-powerpoint-o',
        'sub' => array(
            array(
                'name' => 'Add',
                'url' => url('/admin/page/add'),
                'icon' => 'fa fa-plus'
            ),
            array(
                'name' => 'Overview',
                'url' => url('/admin/page/list'),
                'icon' => 'fa fa-eye'
            )
        )
    ),

    array(
        'name' => 'About',
        'icon' => 'fa fa-at',
        'sub' => array(
            array(
                'name' => 'Add',
                'url' => url('/admin/about/add'),
                'icon' => 'fa fa-plus'
            ),
            array(
                'name' => 'Overview',
                'url' => url('/admin/about/list'),
                'icon' => 'fa fa-eye'
            )
        )
    ),

    array(
        'name' => 'News',
        'icon' => 'fa fa-newspaper-o',
        'sub' => array(
            array(
                'name' => 'Add',
                'url' => url('/admin/news/add'),
                'icon' => 'fa fa-plus'
            ),
            array(
                'name' => 'Overview',
                'url' => url('/admin/news/list'),
                'icon' => 'fa fa-eye'
            )
        )
    ),

    array(
        'name' => 'Services',
        'icon' => 'fa fa-strikethrough',
        'sub' => array(
            array(
                'name' => 'Add',
                'url' => url('/admin/services/add'),
                'icon' => 'fa fa-plus'
            ),
            array(
                'name' => 'Overview',
                'url' => url('/admin/services/list'),
                'icon' => 'fa fa-eye'
            )

        )
    ),

    array(
        'name' => 'Testimonials',
        'icon' => 'fa fa-quote-left',
        'sub' => array(
            array(
                'name' => 'Add',
                'url' => url('/admin/testimonials/add'),
                'icon' => 'fa fa-plus'
            ),
            array(
                'name' => 'Overview',
                'url' => url('/admin/testimonials/list'),
                'icon' => 'fa fa-eye'
            )

        )
    ),
    array(
        'name' => 'Team',
        'icon' => 'fa fa-users',
        'sub' => array(
            array(
                'name' => 'Add',
                'url' => url('/admin/team/add'),
                'icon' => 'fa fa-plus'
            ),
            array(
                'name' => 'Overview',
                'url' => url('/admin/team/list'),
                'icon' => 'fa fa-eye'
            )

        )
    ),
);
return $menus;
