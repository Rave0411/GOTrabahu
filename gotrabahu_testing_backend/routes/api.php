<?php
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Auth\EmployeeAuthController;
use App\Http\Controllers\Auth\EmployerAuthController;


    Route::post('/signupEmployee', [EmployeeAuthController::class, 'signupEmployee']);
    Route::post('/loginEmployee', [EmployeeAuthController::class, 'loginEmployee']);


Route::prefix('employers')->group(function () {
    Route::post('/signupEmployer', [EmployerAuthController::class, 'signupEmployer']);
    Route::post('/loginEmployer', [EmployerAuthController::class, 'loginEmployer']);
});
