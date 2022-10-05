<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\api\grupoController;
use App\Http\Controllers\api\alumnoController;
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

Route::controller(grupoController::class)->group(function () {
    Route::get('/grupo', 'index');
    Route::get('/grupo/{id}', 'show');
});

Route::controller(alumnoController::class)->group(function () {
    Route::get('/alumno', 'index');
    Route::get('/alumno/{id}', 'show');
});