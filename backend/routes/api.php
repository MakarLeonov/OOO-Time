<?php

use App\Models\Advantages;
use App\Models\Promotion;
use App\Models\Feedback;
use App\Models\Consultation;
use App\Models\RepairTypes;
use App\Models\Service;
use App\Http\Controllers\AdventagesController;
use App\Http\Controllers\PromotionsController;
use App\Http\Controllers\FeedbackController;
use App\Http\Controllers\ConsultationController;
use App\Http\Controllers\RepairTypesController;
use App\Http\Controllers\ServiceController;
use App\Http\Controllers\AuthController;
// use App\Http\Middleware\isAdmin;
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

// Public routes
Route::post('/register', [AuthController::class, 'register']);
Route::post('/login', [AuthController::class, 'login']);

Route::get('/promotions', [PromotionsController::class, 'index']);
Route::get('/promotions/{id}', [PromotionsController::class, 'show']);

Route::get('/advantages', [AdventagesController::class, 'index']);
Route::get('/advantages/{id}', [AdventagesController::class, 'show']);

Route::get('/feedback', [FeedbackController::class, 'index']);
Route::get('/feedback/{id}', [FeedbackController::class, 'show']);

Route::post('/consultation', [ConsultationController::class, 'store']);

Route::get('/repair_types', [RepairTypesController::class, 'index']);
Route::get('/repair_types/{id}', [RepairTypesController::class, 'show']);

Route::get('/service', [ServiceController::class, 'index']);
Route::get('/service/{id}', [ServiceController::class, 'show']);



    // Route::post('/logout', [AuthController::class, 'logout']);
    // Route::post('/advantages', [AdventagesController::class, 'store']);
    // Route::put('/advantages/{id}', [AdventagesController::class, 'update']);
    // Route::delete('/advantages/{id}', [AdventagesController::class, 'destroy']);
    // Route::post('/promotions', [PromotionsController::class, 'store']);
    // Route::put('/promotions/{id}', [PromotionsController::class, 'update']);
    // Route::delete('/promotions/{id}', [PromotionsController::class, 'destroy']);
    // Route::delete('/feedback/{id}', [FeedbackController::class, 'destroy']);
    // Route::get('/consultation', [ConsultationController::class, 'index']);
    // Route::get('/consultation/{id}', [ConsultationController::class, 'show']);
    // Route::delete('/consultation/{id}', [ConsultationController::class, 'destroy']);
    


// Protected routes
Route::group(['middleware' => 'auth:sanctum'], function () {
    Route::post('/feedback', [FeedbackController::class, 'store']);
    Route::post('/logout', [AuthController::class, 'logout']);

    Route::post('/service', [ServiceController::class, 'store']);
    Route::put('/service/{id}', [ServiceController::class, 'update']);
    Route::delete('/service/{id}', [ServiceController::class, 'destroy']);

    Route::post('/repair_types', [RepairTypesController::class, 'store']);
    Route::put('/repair_types/{id}', [RepairTypesController::class, 'update']);
    Route::delete('/repair_types/{id}', [RepairTypesController::class, 'destroy']);

    Route::post('/advantages', [AdventagesController::class, 'store'])->middleware('admin');
    Route::put('/advantages/{id}', [AdventagesController::class, 'update'])->middleware('admin');
    Route::delete('/advantages/{id}', [AdventagesController::class, 'destroy'])->middleware('admin');

    Route::post('/promotions', [PromotionsController::class, 'store'])->middleware('admin');
    Route::put('/promotions/{id}', [PromotionsController::class, 'update'])->middleware('admin');
    Route::delete('/promotions/{id}', [PromotionsController::class, 'destroy'])->middleware('admin');

    Route::delete('/feedback/{id}', [FeedbackController::class, 'destroy'])->middleware('admin');
    Route::get('/consultation', [ConsultationController::class, 'index'])->middleware('isAdmin');
    Route::get('/consultation/{id}', [ConsultationController::class, 'show'])->middleware('isAdmin');
    Route::delete('/consultation/{id}', [ConsultationController::class, 'destroy'])->middleware('isAdmin');
});

// Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
//     return $request->user();
// });
