<?php
use App\Models\Post;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\PostController;
use App\Http\Controllers\Auth\EmployeeAuthController;
use App\Http\Controllers\Auth\EmployerAuthController;

Route::prefix('employees')->group(function () {
    Route::post('/signupEmployee', [EmployeeAuthController::class, 'signupEmployee']);
    Route::post('/loginEmployee', [EmployeeAuthController::class, 'loginEmployee']);
    Route::post('/requestPasswordReset', [EmployeeAuthController::class, 'requestPasswordReset']);
    Route::post('/verifyResetCode', [EmployeeAuthController::class, 'verifyResetCode']);
    Route::post('/resetPassword', [EmployeeAuthController::class, 'resetPassword']);
    Route::middleware('auth:employee-api')->post('/logoutEmployee', [EmployeeAuthController::class, 'logoutEmployee']);
    Route::middleware('auth:employee-api')->put('/updateProfile', [EmployeeAuthController::class, 'updateProfile']);
});

Route::prefix('employers')->group(function () {
    Route::post('/signupEmployer', [EmployerAuthController::class, 'signupEmployer']);
    Route::post('/loginEmployer', [EmployerAuthController::class, 'loginEmployer']);
    Route::post('/requestPasswordReset', [EmployerAuthController::class, 'requestPasswordReset']);
    Route::post('/verifyResetCode', [EmployerAuthController::class, 'verifyResetCode']);
    Route::post('/resetPassword', [EmployerAuthController::class, 'resetPassword']);
    Route::middleware('auth:sanctum')->post('/logoutEmployer', [EmployerAuthController::class, 'logoutEmployer']);
});

Route::middleware('auth:sanctum')->group(function () {
    Route::post('/createPost', [PostController::class, 'createPost']);
    Route::put('/updatePost/{post}', [PostController::class, 'updatePost']);
    Route::delete('/deletePost/{post}', [PostController::class, 'deletePost']);
    Route::get('/showEditPost/{post}', [PostController::class, 'showEditScreen']);
});

Route::get('/posts', [PostController::class, 'index']);
