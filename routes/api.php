<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\EventController;
use App\Http\Controllers\MediaController;
use App\Http\Controllers\PublicController;
use App\Http\Controllers\TestimonyController;
use App\Http\Controllers\VehicleController;
use App\Http\Controllers\WebResourceController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::group(['prefix' => 'auth','middleware' => 'optimizeImages'], function () {
    Route::post('login', [AuthController::class, 'login']);
    Route::post('logout', [AuthController::class, 'logout'])->middleware('auth:sanctum');
});

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
Route::group(['prefix' => 'web-resource','middleware' => 'auth:sanctum'], function () {
    Route::get('term', [WebResourceController::class, 'getTerm']);
    Route::get('privacy', [WebResourceController::class, 'getPrivacy']);
    Route::put('{model}', [WebResourceController::class, 'update']);
});

Route::group(['prefix' => 'vehicle','middleware' => 'auth:sanctum'], function () {
    Route::get('index', [VehicleController::class, 'index']);
    Route::get('{model}', [VehicleController::class, 'show']);
    Route::post('', [VehicleController::class, 'store']);
    Route::put('{model}', [VehicleController::class, 'update']);
    Route::delete('{model}', [VehicleController::class, 'destroy']);
});

Route::group(['prefix' => 'testimony','middleware' => 'auth:sanctum'], function () {
    Route::get('index', [TestimonyController::class, 'index']);
    Route::get('{model}', [TestimonyController::class, 'show']);
    Route::post('', [TestimonyController::class, 'store']);
    Route::put('{model}', [TestimonyController::class, 'update']);
    Route::delete('{model}', [TestimonyController::class, 'destroy']);
});

Route::group(['prefix' => 'event','middleware' => 'auth:sanctum'], function () {
    Route::get('index', [EventController::class, 'index']);
    Route::get('{model}', [EventController::class, 'show']);
    Route::post('', [EventController::class, 'store']);
    Route::put('{model}', [EventController::class, 'update']);
    Route::delete('{model}', [EventController::class, 'destroy']);
});

Route::group(['prefix' => 'media','middleware' => 'optimizeImages'], function () {
    Route::get('index', [MediaController::class, 'index']);
    Route::get('all', [MediaController::class, 'all']);
    Route::post('', [MediaController::class, 'upload']);
    Route::delete('{model}', [MediaController::class, 'destroy']);
});

Route::group(['prefix' => 'public'], function () {
    Route::get('data', [PublicController::class, 'getPublicData']);
    Route::get('recent-events', [PublicController::class, 'recentEvents']);
    Route::get('events', [PublicController::class, 'events']);
    Route::get('events/{model}', [PublicController::class, 'event']);
    Route::get('testimonials', [PublicController::class, 'testimonials']);
});
