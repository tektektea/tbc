<?php

namespace App\Http\Controllers;

use App\Models\Vehicle;
use Illuminate\Http\Request;

class VehicleController extends Controller
{
    public function __construct(protected Vehicle $vehicle)
    {
    }

    public function index(Request $request)
    {
        $perPage = $request->get('perPage');
        $search = $request->get('search');
        return [
            'list' => Vehicle::query()->when($search, fn($q) => $q->where('name', 'LIKE', "%$search"))
                ->paginate($perPage??15),
        ];
    }

    public function show(Request $request,Vehicle $model)
    {
        return [
            'data' => $model
        ];
    }

    public function store(Request $request)
    {
        $validatedData=$this->validate($request, [
            'name' => 'required',
            'km_rate' => 'required|numeric',
            'duty_rate' => 'required|numeric',
        ]);
        $model=Vehicle::query()->create($request->merge($validatedData));
        return [
            'data' => $model,
            'message'=>'Vehicle created successfully'
        ];
    }

    public function update(Request $request,Vehicle $model)
    {
        $validatedData=$this->validate($request, [
            'name' => 'required',
            'km_rate' => 'required|numeric',
            'duty_rate' => 'required|numeric',
        ]);
        $model->update($request->merge($validatedData));
        return [
            'data' => $model,
            'message'=>'Vehicle updated successfully'
        ];
    }

    public function destroy(Request $request, Vehicle $model)
    {
        $model->delete();
        return [
            'data'=>$model,
            'message'=>'Vehicle deleted successfully'
        ];
    }
}
