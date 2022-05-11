<?php

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

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
Route::group(['prefix' => 'web-resource','middleware' => 'auth:sanctum'], function () {
    Route::get('term', [WebResourceController::class, 'getTerm']);
    Route::get('privacy', [WebResourceController::class, 'getPrivacy']);
    Route::put('{model}', [WebResourceController::class, 'update']);
});
