<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It's a breeze. Simply tell Laravel the URIs it should respond to
| and give it the controller to call when that URI is requested.
|
*/

//Route::get('/', function () {
//    return view('welcome');
//});
Route::auth();

Route::group(['middleware' => 'admin','namespace'=>'Admin','prefix' => 'admin'], function () {
    Route::controller('page', 'PageController');
    Route::any('/logout', 'AdminLogoutController@logout');
});

Route::get('/', 'HomeController@index');
Route::get('/show/{id}','HomeController@show');
Route::get('/i18/{any}', 'HomeController@i18')->where('any', '(.*)');


Route::group(['middleware'=>'auth'],function(){
    Route::resource('post', 'PostController');
});

Route::group(['namespace' => 'Admin', 'prefix' => 'admin'], function () {
    Route::get('/', function() {
        return redirect('admin/login');
    });
    Route::Controller('/login', 'AdminAuthController');
//    Route::controller('page', 'PageController');
});