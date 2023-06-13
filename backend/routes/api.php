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

Route::get('/promotions', [PromotionsController::class, 'index']);
Route::get('/promotions/{id}', [PromotionsController::class, 'show']);

Route::get('/advantages', [AdventagesController::class, 'index']);
Route::get('/advantages/{id}', [AdventagesController::class, 'show']);

Route::get('/feedback', [FeedbackController::class, 'index']);
Route::get('/feedback/{id}', [FeedbackController::class, 'show']);
// Route::post('/feedback', [FeedbackController::class, 'store']);

Route::post('/consultation', [ConsultationController::class, 'store']);

Route::get('/repair_types', [RepairTypesController::class, 'index']);
Route::get('/repair_types/{id}', [RepairTypesController::class, 'show']);
Route::post('/repair_types', [RepairTypesController::class, 'store']);
Route::put('/repair_types/{id}', [RepairTypesController::class, 'update']);
Route::delete('/repair_types/{id}', [RepairTypesController::class, 'destroy']);

Route::get('/service', [ServiceController::class, 'index']);
Route::get('/service/{id}', [ServiceController::class, 'show']);
Route::post('/service', [ServiceController::class, 'store']);
Route::put('/service/{id}', [ServiceController::class, 'update']);
Route::delete('/service/{id}', [ServiceController::class, 'destroy']);


    Route::post('/logout', [AuthController::class, 'logout']);
    Route::post('/advantages', [AdventagesController::class, 'store']);
    Route::put('/advantages/{id}', [AdventagesController::class, 'update']);
    Route::delete('/advantages/{id}', [AdventagesController::class, 'destroy']);
    Route::post('/promotions', [PromotionsController::class, 'store']);
    Route::put('/promotions/{id}', [PromotionsController::class, 'update']);
    Route::delete('/promotions/{id}', [PromotionsController::class, 'destroy']);
    // Route::post('/feedback', [FeedbackController::class, 'store']);
    Route::delete('/feedback/{id}', [FeedbackController::class, 'destroy']);
    Route::get('/consultation', [ConsultationController::class, 'index']);
    Route::get('/consultation/{id}', [ConsultationController::class, 'show']);
    Route::delete('/consultation/{id}', [ConsultationController::class, 'destroy']);


// Protected routes
Route::group(['middleware' => 'auth:sanctum'], function () {
    
    // Route::post('/feedback', [FeedbackController::class, 'store']);
    Route::post('/feedback', [FeedbackController::class, 'store'])->middleware('admin');
    Route::post('/logout', [AuthController::class, 'logout']);
    // Route::post('/logout', [AuthController::class, 'logout']);
    // Route::post('/advantages', [AdventagesController::class, 'store']);
    // Route::put('/advantages/{id}', [AdventagesController::class, 'update']);
    // Route::delete('/advantages/{id}', [AdventagesController::class, 'destroy']);
    // Route::post('/promotions', [PromotionsController::class, 'store']);
    // Route::put('/promotions/{id}', [PromotionsController::class, 'update']);
    // Route::delete('/promotions/{id}', [PromotionsController::class, 'destroy']);
    // // Route::post('/feedback', [FeedbackController::class, 'store']);
    // Route::delete('/feedback/{id}', [FeedbackController::class, 'destroy']);
    // Route::get('/consultation', [ConsultationController::class, 'index']);
    // Route::get('/consultation/{id}', [ConsultationController::class, 'show']);
    // Route::delete('/consultation/{id}', [ConsultationController::class, 'destroy']);
});

// Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
//     return $request->user();
// });
