<!DOCTYPE html>
<html class="no-js lt-ie10"> <![endif]-->
<html class="no-js">
<head>
    <meta charset="utf-8">

    <title>{{trans('bitxhost.site.title')}}</title>

    <meta name="description" content="<?php echo config('template.description'); ?>">
    <meta name="author" content="<?php echo config('template.author');?>">
    <meta name="robots" content="<?php echo config('template.robots'); ?>">
    <meta name="csrf-token" content="{{ csrf_token() }}" />

    <meta name="viewport" content="width=device-width,initial-scale=1,maximum-scale=1.0">

    <link rel="shortcut icon" href="{{URL::to('/assets/logo/logo.png')}}">
    <link rel="apple-touch-icon" href="{{URL::to('/assets/admin/img/icon57.png')}}" sizes="57x57">
    <link rel="apple-touch-icon" href="{{URL::to('/assets/admin/img/icon72.png')}}" sizes="72x72">
    <link rel="apple-touch-icon" href="{{URL::to('/assets/admin/img/icon76.png')}}" sizes="76x76">
    <link rel="apple-touch-icon" href="{{URL::to('/assets/admin/img/icon114.png')}}'" sizes="114x114">
    <link rel="apple-touch-icon" href="{{URL::to('/assets/admin/img/icon120.png')}}" sizes="120x120">
    <link rel="apple-touch-icon" href="{{URL::to('/assets/admin/img/icon144.png')}}" sizes="144x144">
    <link rel="apple-touch-icon" href="{{URL::to('/assets/admin/img/icon152.png')}}" sizes="152x152">
    <link rel="apple-touch-icon" href="{{URL::to('/assets/admin/img/icon180.png')}}" sizes="180x180">

    <link href="{{URL::to('/assets/admin/css/bootstrap.min.css')}}" rel="stylesheet">
    <link href="{{URL::to('/assets/admin/css/plugins.css')}}" rel="stylesheet">
    <link href="{{URL::to('/assets/admin/css/main.css')}}" rel="stylesheet">

    <?php if (config('template.theme')) { ?>
    <link href="{{URL::to('/assets/admin/css/themes/'.config('template.theme').'.css')}}" rel="stylesheet" id="theme-link">

    <?php } ?>
    <link href="{{URL::to('/assets/admin/css/themes.css')}}" rel="stylesheet">
    <script type="text/javascript" src="{{URL::to('/assets/jquery.min.js')}}"></script>


    <script type="text/javascript" src="{{URL::to('/assets/admin/js/vendor/modernizr-2.8.3.min.js')}}"></script>

</head>
<body>