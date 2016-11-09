<header class="navbar<?php if (config('template.header_navbar')) {
    echo ' ' . config('template.header_navbar');
} ?><?php if (config('template.header')) {
    echo ' ' . config('template.header');
} ?>">
    <ul class="nav navbar-nav-custom">
        <li>
            <a href="javascript:void(0)" onclick="App.sidebar('toggle-sidebar');">
                <i class="fa fa-ellipsis-v fa-fw animation-fadeInRight" id="sidebar-toggle-mini"></i>
                <i class="fa fa-bars fa-fw animation-fadeInRight" id="sidebar-toggle-full"></i>
            </a>
        </li>
        <?php if (config('template.header_link')) { ?>
        <li class="hidden-xs animation-fadeInQuick">
            @if(Admin::user())
                <a href=""><strong>{{config('template.header_link')}} {{strtoupper(Admin::user()['first_name']." ".Admin::user()['last_name'])}}</strong></a>
            @endif
        </li>
        <?php } ?>
    </ul>

    <ul class="nav navbar-nav-custom pull-right">
        <li class="dropdown">
            <a href="javascript:void(0)" class="dropdown-toggle" data-toggle="dropdown">
                <i class="fa fa-windows"></i> Site
            </a>
            <ul class="dropdown-menu dropdown-menu-right">
                @if(Admin::user())
                    <li>
                        <a href="{{url('/admin/site/add')}}">
                            <i class="fa fa-pencil fa-fw pull-right"></i>
                            Add/Edit Details
                        </a>
                    </li>
                    <li class="divider"></li>
                    <li>
                        <a href="{{url('/admin/site/list')}}">
                            <i class="fa fa-eye fa-fw pull-right"></i>
                            View Details
                        </a>
                    </li>
                @endif
                <li class="divider"></li>
                <li>
                    <a href="{{url('/')}}" target="_blank">
                        <i class="fa fa-globe fa-fw pull-right"></i>
                        Visit Site
                    </a>
                </li>
            </ul>
        </li>
        <li>
            <a href="javascript:void(0)" onclick="App.sidebar('toggle-sidebar-alt');">
                <i class="fa fa-users"> My Account</i>
            </a>
        </li>
        <li>
            @if(Admin::user())
                <a href="{{ url('/admin/logout') }}">
                            @endif
                            <i class="fa fa-power-off"></i> Log out
                        </a>
        </li>
    </ul>
</header>