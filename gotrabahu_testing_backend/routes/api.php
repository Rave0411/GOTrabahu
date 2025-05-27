<?php
use App\Models\Post;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\PostController;
use App\Http\Controllers\Auth\EmployeeAuthController;
use App\Http\Controllers\Auth\EmployerAuthController;

Route::get('/', function () {
       $posts = Post::all();
    return view('/dashboard', ['posts' => $posts]);
});

Route::prefix('employees')->group(function () {
    Route::post('/signupEmployee', [EmployeeAuthController::class, 'signupEmployee']);
    Route::post('/loginEmployee', [EmployeeAuthController::class, 'loginEmployee']);
    Route::middleware('auth:sanctum')->post('/logoutEmployee', [EmployeeAuthController::class, 'logoutEmployee']);
});

Route::prefix('employers')->group(function () {
    Route::post('/signupEmployer', [EmployerAuthController::class, 'signupEmployer']);
    Route::post('/loginEmployer', [EmployerAuthController::class, 'loginEmployer']);
    Route::middleware('auth:sanctum')->post('/logoutEmployer', [EmployeeAuthController::class, 'logoutEmployer']);
});

Route::post('/createPost', [PostController::class, 'createPost']);
