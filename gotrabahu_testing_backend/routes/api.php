<?php
use App\Models\Post;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\PostController;
use App\Http\Controllers\Auth\EmployeeAuthController;
use App\Http\Controllers\Auth\EmployerAuthController;

// Removed root route returning view from api.php as it is not typical for API routes

Route::prefix('employees')->group(function () {
    Route::post('/signupEmployee', [EmployeeAuthController::class, 'signupEmployee']);
    Route::post('/loginEmployee', [EmployeeAuthController::class, 'loginEmployee']);
    Route::middleware('auth:sanctum')->post('/logoutEmployee', [EmployeeAuthController::class, 'logoutEmployee']);
});

Route::prefix('employers')->group(function () {
    Route::post('/signupEmployer', [EmployerAuthController::class, 'signupEmployer']);
    Route::post('/loginEmployer', [EmployerAuthController::class, 'loginEmployer']);
    Route::middleware('auth:sanctum')->post('/logoutEmployer', [EmployerAuthController::class, 'logoutEmployer']);
});

Route::middleware('auth:sanctum')->group(function () {
    Route::post('/createPost', [PostController::class, 'createPost']);
    Route::put('/updatePost/{post}', [PostController::class, 'updatePost']);
    Route::delete('/deletePost/{post}', [PostController::class, 'deletePost']);
    Route::get('/showEditPost/{post}', [PostController::class, 'showEditScreen']);
});
