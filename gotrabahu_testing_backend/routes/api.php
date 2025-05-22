<?php
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Auth\EmployeeAuthController;
use App\Http\Controllers\Auth\EmployerAuthController;

Route::prefix('employees')->group(function () {
    Route::post('signup', [EmployeeAuthController::class, 'signup']);
    Route::post('login', [EmployeeAuthController::class, 'login']);
});

Route::prefix('employers')->group(function () {
    Route::post('signup', [EmployerAuthController::class, 'signup']);
    Route::post('login', [EmployerAuthController::class, 'login']);
});
