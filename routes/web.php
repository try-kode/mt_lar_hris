<?php

use Illuminate\Support\Facades\Route;

// Route::get('/', function () {
//     return view('welcome');
// });

Route::get('/', function () {
    return view('admin/index');
});

Route::get('/authenticate/login', function () {
    return view('admin/auth/login');
});