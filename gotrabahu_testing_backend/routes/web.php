<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Auth\EmployeeAuthController;

Route::get('/', function () {
    return view('welcome');
});

Route::prefix('employees')->group(function () {
    Route::post('/signupEmployee', [EmployeeAuthController::class, 'signupEmployee']);
    Route::post('/loginEmployee', [EmployeeAuthController::class, 'loginEmployee']);
});
