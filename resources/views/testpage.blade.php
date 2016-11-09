<?php

require_once URL::asset('vendor/autoload.php');

$fb = new Facebook\Facebook([
        'app_id' => '271680366562240',
        'app_secret' => '631616238aeefd27ff453e63ce45f81d',
        'default_graph_version' => 'v2.5',
]);

?>