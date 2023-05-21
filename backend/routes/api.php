<?php

use App\Models\Advantages;
use App\Http\Controllers\AdventagesController;
use App\Http\Controllers\AuthController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

// Route::resource('advantages', AdventagesController::class);

// Public routes
Route::post('/register', [AuthController::class, 'register']);
Route::post('/login', [AuthController::class, 'login']);
Route::get('/advantages', [AdventagesController::class, 'index']);
Route::get('/advantages/{id}', [AdventagesController::class, 'show']);


// Protected routes
Route::group(['middleware' => ['auth:sanctum']], function () {
    Route::post('/logout', [AuthController::class, 'logout']);
    Route::post('/advantages', [AdventagesController::class, 'store']);
    Route::put('/advantages/{id}', [AdventagesController::class, 'update']);
    Route::delete('/advantages/{id}', [AdventagesController::class, 'destroy']);
});

// Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
//     return $request->user();
// });
