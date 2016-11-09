<div id="page-wrapper"<?php if (config('template.page_preloader')) {
    echo ' class="page-loading"';
} ?>>

    <div class="preloader">
        <div class="inner">
            <div class="preloader-spinner themed-background hidden-lt-ie10"></div>

            <h3 class="text-primary visible-lt-ie10"><strong>Loading..</strong></h3>
        </div>
    </div>

    <?php
    $page_classes = '';

    if (config('template.header') == 'navbar-fixed-top') {
        $page_classes = 'header-fixed-top';
    } else if (config('template.header') == 'navbar-fixed-bottom') {
        $page_classes = 'header-fixed-bottom';
    }

    if (config('template.sidebar')) {
        $page_classes .= (($page_classes == '') ? '' : ' ') . config('template.sidebar');
    }

    if (config('template.layout') == 'fixed-width' && config('template.header') == '') {
        $page_classes .= (($page_classes == '') ? '' : ' ') . config('template.layout');
    }

    if (config('template.cookies') === 'enable-cookies') {
        $page_classes .= (($page_classes == '') ? '' : ' ') . config('template.cookies');
    }
    ?>
    <div id="page-container"<?php if ($page_classes) {
        echo ' class="' . $page_classes . '"';
    } ?>>
        @if (config('template.inc_sidebar_alt'))
            @include ('common/' . config('template.inc_sidebar_alt'))
        @endif
        @if(config('template.inc_sidebar'))
            @include ('common/' . config('template.inc_sidebar') )
        @endif
        <div id="main-container">
@if(config('template.inc_header'))
    @include ('common/' . config('template.inc_header'))
@endif