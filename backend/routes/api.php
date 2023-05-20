<?php

use App\Models\Advantages;
use App\Http\Controllers\AdventagesController;
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

Route::get('/advantages', [AdventagesController::class, 'index']);
Route::get('/advantages/{id}', [AdventagesController::class, 'show']);
Route::post('/advantages', [AdventagesController::class, 'store']);
Route::post('/advantages/{id}', [AdventagesController::class, 'update']);
Route::post('/advantages/{id}', [AdventagesController::class, 'destroy']);

// Route::get('/advantages', function(){
//     return 'advantages...';
// });

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
