<div id="sidebar">
    <div id="sidebar-brand" class="themed-background">
        <?php if (Admin::user()) { ?>
        <a href="<?php echo url('/admin/page/list') ?>" class="sidebar-title">
            <?php } ?>
            <img src="<?php echo url('/assets/logo/logo.png') ?>" height="40" width="50">
            <span class="sidebar-nav-mini-hide"><strong><?php echo trans('bitxhost.site.title'); ?></strong></span>

        </a>
    </div>

    <div id="sidebar-scroll">
        <div class="sidebar-content">

            <?php
            if (Admin::user()) {
                include_once('admin_menus.php');
            }
            ?>
            <?php if (!empty($menus)) { ?>
                <ul class="sidebar-nav">
                    <?php foreach ($menus as $key => $link) {
                        $link_class = '';
                        $li_active = '';
                        $menu_link = '';

                        // Get 1st level link's vital info
                        $url = (isset($link['url']) && $link['url']) ? $link['url'] : '#';
                        $active = (isset($link['url']) && (config('template.active_page') == $link['url'])) ? ' active' : '';
                        $icon = (isset($link['icon']) && $link['icon']) ? '<i class="' . $link['icon'] . ' sidebar-nav-icon"></i>' : '';

                        // Check if the link has a submenu
                        if (isset($link['sub']) && $link['sub']) {
                            // Since it has a submenu, we need to check if we have to add the class active
                            // to its parent li element (only if a 2nd or 3rd level link is active)
                            foreach ($link['sub'] as $sub_link) {
                                if (in_array(config('template.active_page'), $sub_link)) {
                                    $li_active = ' class="active"';
                                    break;
                                }

                                // 3rd level links
                                if (isset($sub_link['sub']) && $sub_link['sub']) {
                                    foreach ($sub_link['sub'] as $sub2_link) {
                                        if (in_array(config('template.active_page'), $sub2_link)) {
                                            $li_active = ' class="active"';
                                            break;
                                        }
                                    }
                                }
                            }
                            $menu_link = 'sidebar-nav-menu';
                        }
                        $li_active = strtolower(Request::segment(2)) == strtolower($link['name']) ? ' class="active"' : '';
                        // Create the class attribute for our link
                        if ($menu_link || $active) {
                            $link_class = ' class="' . $menu_link . $active . '"';
                        }
                        ?>
                        <?php if ($url == 'separator') { // if it is a separator and not a link ?>
                            <li class="sidebar-separator">
                                <i class="fa fa-ellipsis-h"></i>
                            </li>
                        <?php } else { // If it is a link ?>
                            <li<?php echo $li_active; ?>>
                                <a href="<?php echo $url; ?>"<?php echo $link_class; ?>><?php if (isset($link['sub']) && $link['sub']) { // if the link has a submenu ?>
                                        <i class="fa fa-chevron-left sidebar-nav-indicator sidebar-nav-mini-hide"></i><?php }
                                    echo $icon; ?><span
                                        class="sidebar-nav-mini-hide"><?php echo $link['name']; ?></span></a>
                                <?php if (isset($link['sub']) && $link['sub']) { // if the link has a submenu ?>
                                    <ul>
                                        <?php foreach ($link['sub'] as $sub_link) {
                                            $link_class = '';
                                            $li_active = '';
                                            $submenu_link = '';

                                            // Get 2nd level link's vital info
                                            $url = (isset($sub_link['url']) && $sub_link['url']) ? $sub_link['url'] : '#';
                                            $active = (isset($sub_link['url']) && (config('template.active_page') == $sub_link['url'])) ? ' active' : '';

                                            // Check if the link has a submenu
                                            if (isset($sub_link['sub']) && $sub_link['sub']) {
                                                // Since it has a submenu, we need to check if we have to add the class active
                                                // to its parent li element (only if a 3rd level link is active)
                                                foreach ($sub_link['sub'] as $sub2_link) {
                                                    if (in_array(config('template.active_page'), $sub2_link)) {
                                                        $li_active = ' class="active"';
                                                        break;
                                                    }
                                                }

                                                $submenu_link = 'sidebar-nav-submenu';
                                            }

                                            if ($submenu_link || $active) {
                                                $link_class = ' class="' . $submenu_link . $active . '"';
                                            }

                                            if (strtolower(Request::segment(2)) == strtolower($link['name'])) {
                                                $seg = Request::segment(3);
                                                if (strtolower($sub_link['name']) == 'add') {
                                                    $l = strtolower($sub_link['name']);
                                                    if ($seg == 'add' || $seg == 'edit' || $seg == $l) {
                                                        $link_class = ' class="active"';
                                                    }
                                                }


                                                if (strtolower($sub_link['name']) == 'overview') {
                                                    $l = strtolower($sub_link['name']);
                                                    if ($seg == 'list' || $seg == $l) {
                                                        $link_class = ' class="active"';
                                                    }
                                                }


                                                if (strtolower($sub_link['name']) == 'edit') {
                                                    $l = strtolower($sub_link['name']);
                                                    if ($seg == 'edit' || $seg == $l) {
                                                        $link_class = ' class="active"';
                                                    }
                                                }
                                            }
                                            ?>
                                            <li<?php echo $li_active; ?>>
                                                <a href="<?php echo $url; ?>"<?php echo $link_class; ?>><?php if (isset($sub_link['sub']) && $sub_link['sub']) { ?>
                                                        <i class="fa fa-chevron-left sidebar-nav-indicator"></i><?php }
                                                    echo $sub_link['name']; ?></a>
                                                <?php if (isset($sub_link['sub']) && $sub_link['sub']) { ?>
                                                    <ul>
                                                        <?php foreach ($sub_link['sub'] as $sub2_link) {
                                                            // Get 3rd level link's vital info
                                                            $url = (isset($sub2_link['url']) && $sub2_link['url']) ? $sub2_link['url'] : '#';
                                                            $active = (isset($sub2_link['url']) && (config('template.active_page') == $sub2_link['url'])) ? ' class="active"' : '';
                                                            ?>
                                                            <li>
                                                                <a href="<?php echo $url; ?>"<?php echo $active ?>><?php echo $sub2_link['name']; ?></a>
                                                            </li>
                                                        <?php } ?>
                                                    </ul>
                                                <?php } ?>
                                            </li>
                                        <?php } ?>
                                    </ul>
                                <?php } ?>
                            </li>
                        <?php } ?>
                    <?php } ?>
                </ul>
            <?php } ?>
        </div>
    </div>
</div>

